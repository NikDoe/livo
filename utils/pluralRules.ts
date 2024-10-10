const getPluralValues = (
	count: number,
	rules: string[],
) => {
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

export const getPluralFavorites = (count: number) => {
	const rules = [
		'замечательное предложение',
		'замечательных предложения',
		'замечательных предложений',
	];

	return getPluralValues(count, rules);
};

export const getPluralGuests = (count: number) => {
	const rules = [
		'гость',
		'гостя',
		'гостей',
	];

	return getPluralValues(count, rules);
};

export const getPluralBedrooms = (count: number) => {
	const rules = [
		'спальная комната',
		'спальные комнаты',
		'спальных комнат',
	];

	return getPluralValues(count, rules);
};

export const getPluralBeds = (count: number) => {
	const rules = [
		'кровать',
		'кровати',
		'кроватей',
	];

	return getPluralValues(count, rules);
};

export const getPluralBaths = (count: number) => {
	const rules = [
		'ванная комната',
		'ванные комнаты',
		'ванных комнат',
	];

	return getPluralValues(count, rules);
};