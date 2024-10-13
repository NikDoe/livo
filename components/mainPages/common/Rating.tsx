import { getPluralReviews } from '@/utils/pluralRules';
import { FetchRating } from '@/utils/types';
import { FaStar } from 'react-icons/fa';

type RatingProps = {
	id: string;
	inPage: boolean;
	fetchRating: (id: string) => Promise<FetchRating>
}

async function Rating(props: RatingProps) {
	const { id, fetchRating, inPage } = props;
	const { rating, count } = await fetchRating(id);

	const className = `flex gap-1 items-center ${inPage ? 'text-sm' : 'text-xs'}`;

	return (
		<span className={className}>
			<FaStar className='w-4 h-4 text-yellow-400' />
			<p className='font-bold'>{rating}</p>
			<p className='text-muted-foreground'>{`(${getPluralReviews(count)})`}</p>
		</span>
	);
}

export default Rating;
