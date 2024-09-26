import { IconType } from 'react-icons';
import { GoContainer } from 'react-icons/go';
import { MdCabin, MdOutlineHouseboat } from 'react-icons/md';
import { PiHouseLine, PiTent, PiWarehouse } from 'react-icons/pi';
import { TbBuildingCottage } from 'react-icons/tb';
import { RiCaravanLine } from 'react-icons/ri';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { BsHouseHeart } from 'react-icons/bs';

export type CategoryName =
	| 'cabin'
	| 'tent'
	| 'cottage'
	| 'container'
	| 'caravan'
	| 'tiny'
	| 'warehouse'
	| 'lodge';

export type CategoryLabel =
	| 'уютная хижина'
	| 'палатка для кемпинга'
	| 'загородный коттедж'
	| 'дом из контейнера'
	| 'дом на колесах'
	| 'малый домик'
	| 'складское помещение'
	| 'домик для отдыха';

type Category = {
	name: CategoryName;
	label: CategoryLabel;
	icon: IconType;
};

export const categories: Category[] = [
	{
		name: 'cabin',
		label: 'уютная хижина',
		icon: PiHouseLine,
	},
	{
		name: 'tent',
		label: 'палатка для кемпинга',
		icon: PiTent,
	},
	{
		name: 'cottage',
		label: 'загородный коттедж',
		icon: TbBuildingCottage,
	},
	{
		name: 'container',
		label: 'дом из контейнера',
		icon: GoContainer,
	},
	{
		name: 'caravan',
		label: 'дом на колесах',
		icon: RiCaravanLine,
	},
	{
		name: 'tiny',
		label: 'малый домик',
		icon: BsHouseHeart,
	},

	{
		name: 'warehouse',
		label: 'складское помещение',
		icon: LiaWarehouseSolid,
	},
	{
		name: 'lodge',
		label: 'домик для отдыха',
		icon: MdOutlineHouseboat,
	},
];