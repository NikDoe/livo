import { IconType } from 'react-icons';

export type Amenity = {
	name: string;
	icon: IconType;
	selected: boolean;
};

import {
	PiFirstAidKitLight,
	PiSolarRoof,
	PiPicnicTable,
	PiTowel,
	PiBed,
	PiBathtub
} from 'react-icons/pi';
import {
	TbFridge,
	TbToolsKitchen3,
	TbAirConditioning,
	TbChairDirector,
	TbParkingCircle
} from 'react-icons/tb';
import { FiCloud } from 'react-icons/fi';
import { IoIosFlashlight, IoMdBonfire } from 'react-icons/io';
import { IoWaterOutline } from 'react-icons/io5';
import { RiZzzFill } from 'react-icons/ri';
import { MdOutlineFireplace, MdOutdoorGrill } from 'react-icons/md';
import { FaKitchenSet } from 'react-icons/fa6';
import { BiShower } from 'react-icons/bi';

export const amenities: Amenity[] = [
	{ name: 'облачное хранилище', icon: FiCloud, selected: false },
	{ name: 'парковка', icon: TbParkingCircle, selected: false },
	{ name: 'костровая яма', icon: IoMdBonfire, selected: false },
	{ name: 'гриль для барбекю', icon: MdOutdoorGrill, selected: false },
	{ name: 'уличная мебель', icon: TbChairDirector, selected: false },
	{ name: 'собственная ванная комната', icon: PiBathtub, selected: false },
	{ name: 'горячий душ', icon: BiShower, selected: false },
	{ name: 'кухонный уголок', icon: FaKitchenSet, selected: false },
	{ name: 'отопление', icon: MdOutlineFireplace, selected: false },
	{ name: 'кондиционер', icon: TbAirConditioning, selected: false },
	{ name: 'постельное белье', icon: PiBed, selected: false },
	{ name: 'полотенца', icon: PiTowel, selected: false },
	{ name: 'пикниковый стол', icon: PiPicnicTable, selected: false },
	{ name: 'гамак', icon: RiZzzFill, selected: false },
	{ name: 'солнечная энергия', icon: PiSolarRoof, selected: false },
	{ name: 'водоснабжение', icon: IoWaterOutline, selected: false },
	{ name: 'кухонные принадлежности', icon: TbToolsKitchen3, selected: false },
	{ name: 'холодильник', icon: TbFridge, selected: false },
	{ name: 'фонари', icon: IoIosFlashlight, selected: false },
	{ name: 'аптечка', icon: PiFirstAidKitLight, selected: false },
];