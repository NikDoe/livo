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