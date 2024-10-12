'use server';

export const createStayReviewAction = async () => {
	return { message: 'добавить отзыв' };
};

export const fetchStayReviews = async () => {
	return { message: 'загрузить отзывы' };
};

export const fetchStayReviewsByUser = async () => {
	return { message: 'загрузить отзывы пользователя' };
};

export const deleteStayReviewAction = async () => {
	return { message: 'удалить отзыв' };
};