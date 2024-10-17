import { create } from 'zustand';
import { Booking } from './types';
import { DateRange } from 'react-day-picker';

type StayState = {
	stayId: string;
	price: number;
	bookings: Booking[];
	range: DateRange | undefined;
};

export const useStay = create<StayState>(() => {
	return {
		stayId: '',
		price: 0,
		bookings: [],
		range: undefined,
	};
});