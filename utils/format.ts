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

const convertToGenitive = (word: string): string => {
	const prepositions = [
		'в', 'во', 'на', 'на', 'к', 'с', 'со', 'из', 'от', 'до',
		'для', 'по', 'об', 'о', 'за', 'между', 'при', 'без', 'через',
		'вдоль', 'вместо', 'кроме', 'напротив', 'по поводу', 'среди'
	];

	// обработка предлогов
	if (prepositions.includes(word)) return word;

	if (word.endsWith('ая')) return word.slice(0, -2) + 'ой';
	if (word.endsWith('яя')) return word.slice(0, -2) + 'ей';

	if (word.endsWith('ый') || word.endsWith('ий')) return word.slice(0, -1) + 'ом';
	if (word.endsWith('ое')) return word.slice(0, -2) + 'ом';

	// Обработка существительных:
	if (word.endsWith('а') || word.endsWith('я')) return word.slice(0, -1) + 'е';
	if (word.endsWith('о')) return word.slice(0, -1) + 'е';
	if (word.endsWith('е')) return word.slice(0, -1) + 'е';

	return word + 'е';
};

export function choosePreposition(phrase: string): string {
	const words = phrase.trim().split(' ');

	const firstWord = words[0].toLowerCase();
	const secondWord = words[1].toLowerCase();
	const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

	const preposition = vowels.includes(firstWord[0]) || firstWord[0] === 'й' ? 'об' : 'о';
	const firstWordCorrected = convertToGenitive(firstWord);
	const secondWordCorrected = convertToGenitive(secondWord);

	return `${preposition} ${firstWordCorrected} ${secondWordCorrected} ${words.slice(2).join(' ')}`.toLowerCase();
}