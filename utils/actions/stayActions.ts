'use server';

import { redirect } from 'next/navigation';
import { imageSchema, staySchema, validateWithZodSchema } from '../schemas';
import { uploadImage } from '../supabase';
import { getAuthUser, renderError } from './actionHelpers';
import db from '../db';

export const createStayAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();
	try {
		const rawData = Object.fromEntries(formData);
		const file = formData.get('image') as File;

		const validatedFields = validateWithZodSchema(staySchema, rawData);
		const validatedFile = validateWithZodSchema(imageSchema, { image: file });
		const fullPath = await uploadImage(validatedFile.image);

		await db.stay.create({
			data: {
				...validatedFields,
				image: fullPath,
				profileId: user.id,
			},
		});

	} catch (error) {
		return renderError(error);
	}

	redirect('/stays?stayCreated=true');
};

type TFetchStays = {
	search?: string;
	category?: string;
}

export const fetchStays = async ({
	search,
	category,
}: TFetchStays) => {
	const stays = await db.stay.findMany({
		where: {
			category,
			stayTitle: {
				contains: search,
				mode: 'insensitive',
			},
		},
		select: {
			id: true,
			stayTitle: true,
			countryCode: true,
			image: true,
			price: true,
			amenities: true,
		},
	});

	return stays;
};

export const fetchStayDetails = (id: string) => {
	return db.stay.findUnique({
		where: {
			id,
		},
		include: {
			profile: true,
			stayBookings: {
				select: {
					checkIn: true,
					checkOut: true,
				}
			}
		},
	});
};