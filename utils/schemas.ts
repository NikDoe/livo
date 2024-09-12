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