import { calculateDaysBetween } from '@/utils/calendar';
import { CLEANING_VALUE, SERVICE_VALUE, STAY_DISCOUNT_VALUE } from './constants';

type BookingDetails = {
	checkIn: Date;
	checkOut: Date;
	price: number;
};

export const calculateTotals = ({
	checkIn,
	checkOut,
	price,
}: BookingDetails) => {
	const totalNights = calculateDaysBetween({ checkIn, checkOut });
	const subTotal = totalNights * price;
	const cleaning = CLEANING_VALUE;
	const service = SERVICE_VALUE;
	const discount = subTotal * STAY_DISCOUNT_VALUE;
	const orderTotal = subTotal + cleaning + service - discount;

	return { totalNights, subTotal, cleaning, service, discount, orderTotal };
};