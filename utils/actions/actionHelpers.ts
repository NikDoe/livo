type ErrorResponse = {
	message: string;
}

export const renderError = (error: unknown): ErrorResponse => {
	return {
		message: error instanceof Error ? error.message : 'Произошла ошибка, попробуйте снова',
	};
};
