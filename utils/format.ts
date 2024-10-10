export const formatCurrency = (amount: number | null) => {
	const value = amount || 0;
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'BYN',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value);
};

export const formatText = (str: string, maxLength: number = 20): string => {
	if (str.length > maxLength) {
		return str.slice(0, maxLength) + '...';
	}

	return str;
};
