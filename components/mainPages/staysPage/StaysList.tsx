import { StayCardProps } from '@/utils/types';
import StayCard from './StayCard';

type StaysListProps = {
	stays: StayCardProps[]
}

function StaysList({ stays }: StaysListProps) {
	return (
		<section className='mt-4 gap-4 grid sm:grid-cols-2 lg:grid-cols-3'>
			{stays.map((stay) => {
				return <StayCard key={stay.id} stay={stay} />;
			})}
		</section>
	);
}

export default StaysList;
