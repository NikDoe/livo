import { getPluralReviews } from '@/utils/pluralRules';
import { FetchReviews } from '@/utils/types';
import ReviewCard from './ReviewCard';

type ReviewsProps = {
	id: string;
	fetchReviews: (id: string) => Promise<FetchReviews[]>;
}

async function Reviews(props: ReviewsProps) {
	const { fetchReviews, id } = props;
	const reviews = await fetchReviews(id);

	if (reviews.length < 1) {
		return <h1 className='title-level_2'>0 Отзывов</h1>;
	};

	return (
		<div>
			<h1 className='title-level_2'>{getPluralReviews(reviews.length)}</h1>
			<div className='flex flex-col'>
				{reviews.map((review) => {
					const { comment, rating } = review;
					const { displayName, profileImage } = review.profile;

					const reviewInfo = {
						comment,
						rating,
						name: displayName,
						image: profileImage,
					};

					return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
				})}
			</div>
		</div>
	);
}

export default Reviews;
