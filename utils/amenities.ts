import { IconType } from 'react-icons';

export type Amenity = {
	name: string;
	icon: IconType;
	selected: boolean;
};

import {
	FiCloud,
	FiTruck,
	FiZap,
	FiWind,
	FiSun,
	FiCoffee,
	FiFeather,
	FiAirplay,
	FiTrello,
	FiBox,
	FiAnchor,
	FiDroplet,
	FiMapPin,
	FiSunrise,
	FiSunset,
	FiMusic,
	FiHeadphones,
	FiRadio,
	FiFilm,
	FiTv,
} from 'react-icons/fi';

export const amenities: Amenity[] = [
	{ name: 'облачное хранилище', icon: FiCloud, selected: false },
	{ name: 'парковка', icon: FiTruck, selected: false },
	{ name: 'костровая яма', icon: FiZap, selected: false },
	{ name: 'гриль для барбекю', icon: FiWind, selected: false },
	{ name: 'уличная мебель', icon: FiSun, selected: false },
	{ name: 'собственная ванная комната', icon: FiCoffee, selected: false },
	{ name: 'горячий душ', icon: FiFeather, selected: false },
	{ name: 'кухонный уголок', icon: FiAirplay, selected: false },
	{ name: 'отопление', icon: FiTrello, selected: false },
	{ name: 'кондиционер', icon: FiBox, selected: false },
	{ name: 'постельное белье', icon: FiAnchor, selected: false },
	{ name: 'полотенца', icon: FiDroplet, selected: false },
	{ name: 'пикниковый стол', icon: FiMapPin, selected: false },
	{ name: 'гамак', icon: FiSunrise, selected: false },
	{ name: 'солнечная энергия', icon: FiSunset, selected: false },
	{ name: 'водоснабжение', icon: FiMusic, selected: false },
	{ name: 'кухонные принадлежности', icon: FiHeadphones, selected: false },
	{ name: 'холодильник', icon: FiRadio, selected: false },
	{ name: 'фонари', icon: FiFilm, selected: false },
	{ name: 'аптечка', icon: FiTv, selected: false },
];