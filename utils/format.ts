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

const formatIsoDate = (isoDate: Date) => {
	const date = new Date(isoDate);

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};

	const formattedDate = date.toLocaleDateString('ru-RU', options);

	return formattedDate;
};

export function formatRegistrationDate(isoDate: Date): string {
	const formattedDate = formatIsoDate(isoDate);
	return `Зарегистрирован с ${formattedDate}`;
}

function declineWord(count: number, singular: string, pluralOne: string, pluralMany: string): string {
	if (count % 10 === 1 && count % 100 !== 11) {
		return singular;
	} else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
		return pluralOne;
	} else {
		return pluralMany;
	}
}

export function timeSinceCreation(isoDate: Date): string {
	const createdDate = new Date(isoDate);
	const currentDate = new Date();

	const diffInMs = currentDate.getTime() - createdDate.getTime();
	const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
	const diffInHours = Math.floor(diffInMinutes / 60);
	const diffInDays = Math.floor(diffInHours / 24);
	const diffInWeeks = Math.floor(diffInDays / 7);
	const diffInMonths = Math.floor(diffInDays / 30);
	const diffInYears = Math.floor(diffInMonths / 12);

	if (diffInYears >= 1) {
		return `${diffInYears} ${declineWord(diffInYears, 'год', 'года', 'лет')} назад`;
	} else if (diffInMonths >= 1) {
		return `${diffInMonths} ${declineWord(diffInMonths, 'месяц', 'месяца', 'месяцев')} назад`;
	} else if (diffInWeeks >= 1) {
		return `${diffInWeeks} ${declineWord(diffInWeeks, 'неделя', 'недели', 'недель')} назад`;
	} else if (diffInDays >= 1) {
		return `${diffInDays} ${declineWord(diffInDays, 'день', 'дня', 'дней')} назад`;
	} else if (diffInHours >= 1) {
		return `${diffInHours} ${declineWord(diffInHours, 'час', 'часа', 'часов')} назад`;
	} else {
		return 'Меньше часа назад';
	}
}

export const formatBookingDate = (date: Date) => {
	const formattedDate = formatIsoDate(date);
	return formattedDate;
};
