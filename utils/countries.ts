import countries from 'world-countries';
import { COUNTRY_TRANSLATION_LANGUAGE } from './constants';

export function truncateCountryName(str: string, maxLength: number = 20): string {
	if (str.length > maxLength) {
		return str.slice(0, maxLength) + '...';
	}

	return str;
}

export const formattedCountries = countries.map((item) => ({
	code: item.cca2,
	name: item.translations[COUNTRY_TRANSLATION_LANGUAGE].common,
	flag: item.flag,
	location: item.latlng,
	region: item.region,
}));

export const findCountryByCode = (code: string) =>
	formattedCountries.find((item) => item.code === code);