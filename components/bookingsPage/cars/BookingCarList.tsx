import type { CarBooking } from '@/utils/types';

type BookingCarListProps = {
	carBookings: CarBooking[];
}

function BookingCarList({ carBookings }: BookingCarListProps) {
	if (carBookings.length === 0) {
		return <p className='text-muted-foreground'>Вы не арендовали ещё ни одной машины</p>;
	}

	return (
		<section className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3'>

		</section>
	);
}

export default BookingCarList;
