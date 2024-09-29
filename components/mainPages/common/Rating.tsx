import { FaStar } from 'react-icons/fa';

type RatingProps = {
	id: string;
	inPage: boolean;
}

function Rating({ id, inPage }: RatingProps) {
	// temp
	const rating = 4.7;
	const count = 100;

	const className = `flex gap-1 items-center ${inPage ? 'text-sm' : 'text-xs'}`;
	const countText = count > 1 ? 'отзывов' : 'отзыв';

	return (
		<span className={className}>
			<FaStar className='w-4 h-4 text-yellow-400' />
			<p className='font-bold'>{rating}</p>
			<p className='text-muted-foreground'>{countText}</p>
		</span>
	);
}

export default Rating;
