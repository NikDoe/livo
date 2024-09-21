import { IconType } from 'react-icons';
import { GoContainer } from 'react-icons/go';
import { MdCabin, MdOutlineHouseboat } from 'react-icons/md';
import { PiHouseLine, PiTent, PiWarehouse } from 'react-icons/pi';
import { TbBuildingCottage } from 'react-icons/tb';
import { RiCaravanLine } from 'react-icons/ri';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { BsHouseHeart } from 'react-icons/bs';

export type CategoryLabel =
	| 'уютная хижина'
	| 'палатка для кемпинга'
	| 'загородный коттедж'
	| 'дом из контейнера'
	| 'дом на колесах'
	| 'малый домик'
	| 'сказочный домик'
	| 'складское помещение'
	| 'домик для отдыха';

type Category = {
	label: CategoryLabel;
	icon: IconType;
};

export const categories: Category[] = [
	{
		label: 'уютная хижина',
		icon: PiHouseLine,
	},
	{
		label: 'палатка для кемпинга',
		icon: PiTent,
	},
	{
		label: 'загородный коттедж',
		icon: TbBuildingCottage,
	},
	{
		label: 'дом из контейнера',
		icon: GoContainer,
	},
	{
		label: 'дом на колесах',
		icon: RiCaravanLine,
	},
	{
		label: 'малый домик',
		icon: BsHouseHeart,
	},

	{
		label: 'складское помещение',
		icon: LiaWarehouseSolid,
	},
	{
		label: 'домик для отдыха',
		icon: MdOutlineHouseboat,
	},
];