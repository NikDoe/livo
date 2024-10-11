import { MainRoutes } from './types';

type HeroBanners = {
	path: MainRoutes;
	imgUrl: string;
	text: string;
	title: string;
}


export const heroBanners: HeroBanners[] = [
	{
		path: '/cars',
		imgUrl: '/images/hero-car.jpg',
		text: 'Дороги ждут вашего приключения',
		title: 'Откройте мир на колесах',
	},
	{
		path: '/experiences',
		imgUrl: '/images/hero-exp.jpg',
		text: 'Присоединяйтесь к уникальным событиям',
		title: 'Время для незабываемых эмоций',
	},
	{
		path: '/flights',
		imgUrl: '/images/hero-flight.jpg',
		text: 'Ваше путешествие начинается здесь',
		title: 'Взлетайте к новым горизонтам',
	},
	{
		path: '/stays',
		imgUrl: '/images/hero-stay.jpg',
		text: 'Найдите свой идеальный уголок',
		title: 'Комфорт и уют ждут вас',
	},
];

export const getHeroDetails = (path: MainRoutes) => {
	const hero = heroBanners.find(banner => banner.path === path);
	return hero || heroBanners[0];
};