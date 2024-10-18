import type { ExperienceBooking } from '@/utils/types';

type BookingExperienceListProps = {
	experienceBookings: ExperienceBooking[]
}

function BookingExperienceList({ experienceBookings }: BookingExperienceListProps) {
	if (experienceBookings.length === 0) {
		return <p className='text-muted-foreground'>Вы не забронировали ещё ни одного турпохода</p>;
	}

	return (
		<section className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3'>

		</section>
	);
}

export default BookingExperienceList;
