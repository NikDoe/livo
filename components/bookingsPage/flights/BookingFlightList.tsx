import type { FlightBooking } from '@/utils/types';

type BookingFlightListProps = {
	flightBookings: FlightBooking[]
}

function BookingFlightList({ flightBookings }: BookingFlightListProps) {
	if (flightBookings.length === 0) {
		return <p className='text-muted-foreground'>Вы не забронировали ещё ни одного полёта</p>;
	}

	return (
		<section className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3'>

		</section>
	);
}

export default BookingFlightList;
