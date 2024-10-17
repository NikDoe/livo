'use client';

import { useStay } from '@/utils/store';
import { Booking } from '@/utils/types';
import BookingCalendar from './BookingCalendar';
import BookingContainer from './BookingContainer';
import { useEffect } from 'react';

type BookingWrapperProps = {
	stayId: string;
	price: number;
	bookings: Booking[];
};

export default function BookingWrapper(props: BookingWrapperProps) {
	const { bookings, price, stayId } = props;

	useEffect(() => {
		useStay.setState({
			stayId,
			price,
			bookings,
		});
	}, []);

	return (
		<>
			<BookingCalendar />
			<BookingContainer />
		</>
	);
}