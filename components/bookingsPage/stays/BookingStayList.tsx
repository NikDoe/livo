import { StayBooking } from '@/utils/types';
import BookingStayCard from './BookingStayCard';

type BookingStayListProps = {
	stayBookings: StayBooking[]
}

function BookingStayList({ stayBookings }: BookingStayListProps) {
	if (stayBookings.length === 0) {
		return <p>какой-то текст</p>;
	}

	return (
		<section className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3'>
			{stayBookings.map(booking => <BookingStayCard key={booking.id} booking={booking} />)}
		</section>
	);
}

export default BookingStayList;
