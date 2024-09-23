'use server';

import { propertySchema, validateWithZodSchema } from '../schemas';
import { getAuthUser, renderError } from './actionHelpers';

export const createPropertyAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();
	try {
		const rawData = Object.fromEntries(formData);
		console.log(rawData);
		const validatedFields = validateWithZodSchema(propertySchema, rawData);

		console.log(validatedFields);

		return { message: 'Жильё успешно опубликовано!' };
	} catch (error) {
		return renderError(error);
	}
};