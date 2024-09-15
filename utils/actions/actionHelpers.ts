import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type ErrorResponse = {
	message: string;
}

export const renderError = (error: unknown): ErrorResponse => {
	return {
		message: error instanceof Error ? error.message : 'Произошла ошибка, попробуйте снова',
	};
};

export const getAuthUser = async () => {
	const user = await currentUser();

	if (!user) {
		throw new Error('Для доступа к этой странице необходимо войти в аккаунт');
	}

	if (!user.privateMetadata.hasProfile) redirect('/profile/create');

	return user;
};