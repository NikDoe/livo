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
		imgUrl: '/images/main-pic-4.jpg',
		text: 'Дороги ждут вашего приключения',
		title: 'Откройте мир на колесах',
	},
	{
		path: '/experiences',
		imgUrl: '/images/main-pic-5.jpg',
		text: 'Присоединяйтесь к уникальным событиям',
		title: 'Время для незабываемых эмоций',
	},
	{
		path: '/flights',
		imgUrl: '/images/main-pic-3.jpg',
		text: 'Ваше путешествие начинается здесь',
		title: 'Взлетайте к новым горизонтам',
	},
	{
		path: '/stays',
		imgUrl: '/images/main-pic-1.jpg',
		text: 'Найдите свой идеальный уголок',
		title: 'Комфорт и уют ждут вас',
	},
];

export const getHeroDetails = (path: MainRoutes) => {
	const hero = heroBanners.find(banner => banner.path === path);
	return hero || heroBanners[0];
};