'use server';

import { redirect } from 'next/navigation';
import { imageSchema, propertySchema, validateWithZodSchema } from '../schemas';
import { uploadImage } from '../supabase';
import { getAuthUser, renderError } from './actionHelpers';
import db from '../db';

export const createPropertyAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();
	try {
		const rawData = Object.fromEntries(formData);
		const file = formData.get('image') as File;

		const validatedFields = validateWithZodSchema(propertySchema, rawData);
		const validatedFile = validateWithZodSchema(imageSchema, { image: file });
		const fullPath = await uploadImage(validatedFile.image);

		await db.property.create({
			data: {
				...validatedFields,
				image: fullPath,
				profileId: user.id,
			},
		});

	} catch (error) {
		return renderError(error);
	}

	redirect('/stays?propertyCreated=true');
};

type TFetchProperties = {
	search?: string;
	category?: string;
}

export const fetchProperties = async ({
	search,
	category,
}: TFetchProperties) => {
	const properties = await db.property.findMany({
		where: {
			category,
			propertyTitle: search,
		},
		select: {
			id: true,
			propertyTitle: true,
			country: true,
			image: true,
			price: true,
		},
	});

	return properties;
};