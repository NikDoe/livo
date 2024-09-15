'use server';

import db from '../db';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { profileSchema, validateWithZodSchema } from '../schemas';
import { redirect } from 'next/navigation';
import { renderError } from './actionHelpers';

export const createProfileAction = async (
	prevState: any,
	formData: FormData
) => {
	try {
		const user = await currentUser();
		if (!user) throw new Error('Пожалуйста, войдите в аккаунт для создания профиля');

		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(profileSchema, rawData);

		await db.profile.create({
			data: {
				clerkId: user.id,
				profileImage: user.imageUrl,
				...validatedFields
			}
		});

		await clerkClient.users.updateUserMetadata(user.id, {
			privateMetadata: {
				hasProfile: true,
			},
		});
	} catch (error) {
		return renderError(error);
	}

	redirect('/?accountCreated=true');
};

export const fetchProfileImage = async () => {
	const user = await currentUser();
	if (!user) return null;

	const profile = await db.profile.findUnique({
		where: {
			clerkId: user.id,
		},
		select: {
			profileImage: true,
		},
	});
	return profile?.profileImage;
};
