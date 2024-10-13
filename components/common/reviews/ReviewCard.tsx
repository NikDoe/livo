import Image from 'next/image';
import Rating from './Rating';
import Comment from './Comment';

type ReviewCardProps = {
	reviewInfo: {
		comment: string;
		rating: number;
		name: string;
		image: string;
	};
	children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
	const { comment, image, name, rating } = reviewInfo;

	return (
		<div className='flex mt-5 gap-x-2 border-b-[0.5px] pb-5'>
			<Image
				alt='profile'
				src={image}
				width={100}
				height={100}
				className='w-12 h-12 rounded-full object-cover'
			/>
			<div className='flex flex-col w-full'>
				<div className='flex justify-between mb-2'>
					<p className='font-bold'>{name}</p>
					<Rating rating={rating} />
				</div>
				<Comment comment={comment} />
			</div>
		</div>
	);
}

export default ReviewCard;
