const pluralRulesMap = {
	favorites: ['замечательное предложение', 'замечательных предложения', 'замечательных предложений'],
	guests: ['гость', 'гостя', 'гостей'],
	bedrooms: ['спальная комната', 'спальные комнаты', 'спальных комнат'],
	beds: ['кровать', 'кровати', 'кроватей'],
	baths: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
	reviews: ['отзыв', 'отзыва', 'отзывов'],
	nights: ['ночь', 'ночи', 'ночей'],
	bookings: ['активное бронирование', 'активных бронирования', 'активных бронирований'],
} as const;

type PluralRulesMap = typeof pluralRulesMap;
type PluralKey = keyof PluralRulesMap;

const getPluralValues = (count: number, rules: readonly string[]) => {
	const result = new Intl.PluralRules('ru-RU').select(count);

	switch (result) {
		case 'one':
			return `${count} ${rules[0]}`;
		case 'few':
			return `${count} ${rules[1]}`;
		default:
			return `${count} ${rules[2]}`;
	}
};

export const getPlural = (key: PluralKey, count: number) => {
	const rules = pluralRulesMap[key];

	return getPluralValues(count, rules);
};


export const getPluralFavorites = (count: number) => getPlural('favorites', count);
export const getPluralGuests = (count: number) => getPlural('guests', count);
export const getPluralBedrooms = (count: number) => getPlural('bedrooms', count);
export const getPluralBeds = (count: number) => getPlural('beds', count);
export const getPluralBaths = (count: number) => getPlural('baths', count);
export const getPluralReviews = (count: number) => getPlural('reviews', count);
export const getPluralNights = (count: number) => getPlural('nights', count);
export const getPluralBookings = (count: number) => getPlural('bookings', count);
