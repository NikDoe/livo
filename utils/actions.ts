'use server';

import { profileSchema, validateWithZodSchema } from './schemas';

type ErrorResponse = {
	message: string;
}

const renderError = (error: unknown): ErrorResponse => {
	return {
		message: error instanceof Error ? error.message : 'Произошла ошибка, попробуйте снова',
	};
};

export const createProfileAction = async (
	prevState: any,
	formData: FormData
) => {
	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(profileSchema, rawData);

		console.log(validatedFields);

		return { message: 'Ваш профиль успешно создан' };
	} catch (error) {
		return renderError(error);
	}
};