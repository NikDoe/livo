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