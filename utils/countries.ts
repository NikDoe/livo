import countries from 'world-countries';
import { COUNTRY_TRANSLATION_LANGUAGE } from './constants';

export const formattedCountries = countries.map((item) => ({
	code: item.cca2,
	name: item.translations[COUNTRY_TRANSLATION_LANGUAGE].common,
	flag: item.flag,
	location: item.latlng,
	region: item.region,
}));

export const findCountryByCode = (code: string) =>
	formattedCountries.find((item) => item.code === code);