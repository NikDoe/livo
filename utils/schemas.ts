import { z, ZodSchema } from 'zod';

export const profileSchema = z.object({
	displayName: z
		.string()
		.min(2, {
			message: 'Отображаемое имя должно быть минимум 2 символа.',
		})
		.max(30, {
			message: 'Отображаемое имя должно быть максимум 30 символов.',
		}),
	realName: z
		.string()
		.min(2, {
			message: 'Реальное имя должно быть минимум 2 символа.',
		})
		.max(30, {
			message: 'Реальное имя должно быть максимум 30 символов.',
		}),
});

export function validateWithZodSchema<T>(
	schema: ZodSchema<T>,
	data: unknown
): T {
	const result = schema.safeParse(data);

	if (!result.success) {
		const errors = result.error.errors.map((error) => error.message);
		throw new Error(errors[0]);
	}

	return result.data;
}

function validateFile() {
	const maxUploadSize = 1024 * 1024;
	const acceptedFileTypes = ['image/'];
	return z
		.instanceof(File)
		.refine((file) => {
			return !file || file.size <= maxUploadSize;
		}, 'Изображение должно быть не более 1 mb')
		.refine((file) => {
			return (
				!file || acceptedFileTypes.some((type) => file.type.startsWith(type))
			);
		}, 'Файл должен быть изображением');
}

export const imageSchema = z.object({
	image: validateFile(),
});

export const propertySchema = z.object({
	name: z
		.string()
		.min(2, {
			message: 'Название должно содержать как минимум 2 символа.',
		})
		.max(100, {
			message: 'Название должно содержать не более 100 символов.',
		}),
	price: z.coerce
		.number()
		.int()
		.min(0, {
			message: 'Цена должна быть положительным числом',
		}),
	category: z
		.string(),
	description: z
		.string()
		.refine(
			(description) => {
				const wordCount = description.split(' ').length;
				return wordCount >= 10 && wordCount <= 1000;
			},
			{ message: 'описание должно быть от 10 до 1000 слов', }
		),
	country: z
		.string(),
});
