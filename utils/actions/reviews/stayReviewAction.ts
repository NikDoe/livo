'use server';

import { createReviewSchema, validateWithZodSchema } from '@/utils/schemas';
import { getAuthUser, renderError } from '../actionHelpers';
import db from '@/utils/db';
import { revalidatePath } from 'next/cache';

export const createStayReviewAction = async (prevState: any, formData: FormData) => {
	const user = await getAuthUser();

	try {
		const rawData = Object.fromEntries(formData);

		const { comment, itemId, rating } = validateWithZodSchema(createReviewSchema, rawData);

		await db.stayReview.create({
			data: {
				comment,
				stayId: itemId,
				rating,
				profileId: user.id,
			},
		});

		revalidatePath(`/stays/${itemId}`);
		return { message: 'Отзыв был успешно опубликован' };
	} catch (error) {
		return renderError(error);
	}
};

export const fetchStayReviews = async (stayId: string) => {
	const reviews = await db.stayReview.findMany({
		where: {
			stayId,
		},
		select: {
			id: true,
			rating: true,
			comment: true,
			profile: {
				select: {
					displayName: true,
					profileImage: true,
				},
			},
		},
		orderBy: {
			createdAt: 'desc',
		},
	});

	return reviews;
};

export const fetchStayReviewsByUser = async () => {
	return { message: 'загрузить отзывы пользователя' };
};

export const deleteStayReviewAction = async () => {
	return { message: 'удалить отзыв' };
};