'use server';

import db from '../db';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { imageSchema, profileSchema, validateWithZodSchema } from '../schemas';
import { redirect } from 'next/navigation';
import { getAuthUser, renderError } from './actionHelpers';
import { revalidatePath } from 'next/cache';
import { uploadImage } from '../supabase';

export const createProfileAction = async (
	prevState: any,
	formData: FormData
) => {
	try {
		const user = await currentUser();
		if (!user) throw new Error('Войдите в аккаунт чтобы создать профиль');

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

	redirect('/cars/?accountCreated=true');
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

	return profile ? profile.profileImage : user.imageUrl;
};

export const fetchProfile = async (id?: string) => {
	const clerkId = id || (await getAuthUser()).id;

	const profile = await db.profile.findUnique({
		where: {
			clerkId,
		},
	});

	if (!profile && !id) return redirect('/profile/create');

	return profile;
};

export const updateProfileAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();

	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(profileSchema, rawData);

		await db.profile.update({
			where: {
				clerkId: user.id,
			},
			data: validatedFields,
		});

		revalidatePath('/account');

		return { message: 'Профиль обновлён успешно' };
	} catch (error) {
		return renderError(error);
	}
};

export const updateProfileImageAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();
	try {
		const image = formData.get('image') as File;
		const validatedFields = validateWithZodSchema(imageSchema, { image });
		const fullPath = await uploadImage(validatedFields.image);

		await db.profile.update({
			where: {
				clerkId: user.id,
			},
			data: {
				profileImage: fullPath,
			},
		});

		revalidatePath('/account');

		return { message: 'Изображение профиля обновлено успешно' };
	} catch (error) {
		return renderError(error);
	}
};