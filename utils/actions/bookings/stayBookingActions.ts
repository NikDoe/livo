'use server';

import db from '@/utils/db';
import { getAuthUser, renderError } from '../actionHelpers';
import { calculateTotals } from '@/utils/calculateTotals';
import { redirect } from 'next/navigation';

type CreateActionPrevState = {
	stayId: string;
	checkIn: Date;
	checkOut: Date;
}

export const createStayBookingAction = async (prevState: CreateActionPrevState) => {
	const user = await getAuthUser();

	const { stayId, checkIn, checkOut } = prevState;
	const property = await db.stay.findUnique({
		where: { id: stayId },
		select: { price: true },
	});

	if (!property) {
		return { message: 'Жильё не найдено' };
	}

	const { orderTotal, totalNights } = calculateTotals({
		checkIn,
		checkOut,
		price: property.price,
	});

	try {
		const booking = await db.stayBooking.create({
			data: {
				checkIn,
				checkOut,
				orderTotal,
				totalNights,
				profileId: user.id,
				stayId,
			},
		});
	} catch (error) {
		return renderError(error);
	}

	redirect('/bookings');
};

export const fetchStayBookings = async () => {
	const user = await getAuthUser();

	const bookings = await db.stayBooking.findMany({
		where: {
			profileId: user.id,
		},
		select: {
			id: true,
			orderTotal: true,
			checkIn: true,
			checkOut: true,
			totalNights: true,
			stay: {
				select: {
					id: true,
					stayTitle: true,
					amenities: true,
					image: true,
					price: true,
				},
			},
		},
		orderBy: {
			checkIn: 'desc',
		},
	});

	return bookings;
};