'use server';

import { revalidatePath } from 'next/cache';
import db from '../db';
import { getAuthUser, renderError } from './actionHelpers';
import { Favorites } from '../types';

export type FavoriteType = 'stay';

const mappedFields = {
	stay: 'stayId',
} as const;

interface FetchFavoriteIdParams {
	favoriteType: FavoriteType;
	id: string;
}

export const fetchFavoriteId = async ({
	favoriteType,
	id,
}: FetchFavoriteIdParams) => {
	const user = await getAuthUser();

	const favoriteField = mappedFields[favoriteType];

	const favorite = await db.favorite.findFirst({
		where: {
			[favoriteField]: id,
			profileId: user.id,
		},
		select: {
			id: true,
		},
	});

	return favorite?.id || null;
};

interface ToggleFavoriteActionParams {
	id: string;
	favoriteId: string | null;
	favoriteType: FavoriteType;
	pathname: string;
}

export const toggleFavoriteAction = async (prevState: ToggleFavoriteActionParams) => {
	const user = await getAuthUser();
	const { id, favoriteId, favoriteType, pathname } = prevState;

	const favoriteField = mappedFields[favoriteType];

	try {
		if (favoriteId) {
			await db.favorite.delete({
				where: {
					id: favoriteId,
				},
			});
		} else {
			await db.favorite.create({
				data: {
					[favoriteField]: id,
					profileId: user.id,
				},
			});
		}
		revalidatePath(pathname);
		return { message: getFavoriteMessage(favoriteType, !!favoriteId) };
	} catch (error) {
		return renderError(error);
	}
};

const getFavoriteMessage = (favoriteType: FavoriteType, isRemoved: boolean) => {
	const favoriteTypeTranslations: Record<FavoriteType, string> = {
		stay: 'Жильё',
	};

	const itemType = favoriteTypeTranslations[favoriteType];
	return isRemoved ? `${itemType} удалено из избранного` : `${itemType} добавлено в избранное`;
};

export const fetchFavorites = async () => {
	const user = await getAuthUser();

	const favorites = await db.favorite.findMany({
		where: {
			profileId: user.id,
		},
		select: {
			stay: {
				select: {
					id: true,
					stayTitle: true,
					country: true,
					image: true,
					price: true,
					amenities: true,
				},
			},
			// car: { select: { ... } },
			// experience: { select: { ... } },
		},
	});

	return favorites.reduce<Favorites>((acc, favorite) => {
		if (favorite.stay) acc.stays.push(favorite.stay);
		// if (favorite.car) acc.cars.push(favorite.car);
		// if (favorite.experience) acc.experiences.push(favorite.experience);
		return acc;
	}, { stays: [], });
};