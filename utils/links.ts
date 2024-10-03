import { IconType } from 'react-icons/lib';
import {
	PiCarProfileLight,
	PiMountainsThin,
	PiAirplaneLight,
	PiHouseThin
} from 'react-icons/pi';

type NavLink = {
	href: string;
	label: string;
	icon: IconType
};

export const mainPageslinks: NavLink[] = [
	{ href: '/cars', label: 'Аренда машин', icon: PiCarProfileLight },
	{ href: '/experiences', label: 'Чем заняться', icon: PiMountainsThin },
	{ href: '/flights', label: 'Авиабилеты', icon: PiAirplaneLight },
	{ href: '/stays', label: 'Аренда жилья', icon: PiHouseThin },
];

export const accountSidebarNavLinks: Omit<NavLink, 'icon'>[] = [
	{ href: '/account', label: 'Личная информация' },
	{ href: '/account/security', label: 'Безопасность' },
	{ href: '/account/payments', label: 'Способы оплаты' },
	{ href: '/account/notifications', label: 'Оповещения' },
];

export const pagesLinks: Omit<NavLink, 'icon'>[] = [
	{ href: '/cars', label: 'Аренда машин' },
	{ href: '/experiences', label: 'Чем заняться' },
	{ href: '/flights', label: 'Авиабилеты' },
	{ href: '/stays', label: 'Аренда жилья' },
	{ href: '/wishlists', label: 'Избранное' },
	{ href: '/bookings', label: 'Бронирования' },
];

export const getLabelByHref = (href: string) => {
	const page = pagesLinks.find(link => href.includes(link.href));
	return {
		pageLabel: page ? page.label : undefined,
		pageHref: page ? page.href : undefined,
	};
};