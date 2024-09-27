export type RouteText = {
	heading: string;
	message: string;
	btnText: string;
	link: string;
};

export const routeTexts: Record<string, RouteText> = {
	'/cars': {
		heading: 'Нет доступных автомобилей.',
		message: 'Продолжайте изучать наши автомобили.',
		btnText: 'Продолжить выбор автомобиля',
		link: '/cars',
	},
	'/experiences': {
		heading: 'Нет доступных мероприятий.',
		message: 'Исследуйте наши уникальные мероприятия.',
		btnText: 'Продолжить поиск мероприятий',
		link: '/experiences',
	},
	'/stays': {
		heading: 'Нет доступного жилья.',
		message: 'Продолжайте искать варианты проживания.',
		btnText: 'Продолжить поиск жилья',
		link: '/stays',
	},
	'/flights': {
		heading: 'Нет доступных рейсов.',
		message: 'Продолжайте изучать наши авиарейсы.',
		btnText: 'Найти подходящий рейс',
		link: '/flights',
	},
};