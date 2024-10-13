import { auth } from '@clerk/nextjs/server';
import SubmitReview from './SubmitReview';
import { Separator } from '@/components/ui/separator';
import Reviews from './Reviews';
import type { actionFunction, FetchReviews } from '@/utils/types';

type ReviewSectionProps = {
	id: string;
	title: string;
	createReviewAction: actionFunction;
	fetchReviews: (id: string) => Promise<FetchReviews[]>;
}

function ReviewSection(props: ReviewSectionProps) {
	const { id, title, createReviewAction, fetchReviews } = props;

	const { userId } = auth();

	const isShowAddReview = userId;

	const addReviewForm = (
		<>
			<h1 className='title-level_2 mb-2'>Оставьте отзыв</h1>
			<SubmitReview
				id={id}
				createReviewAction={createReviewAction}
				title={title}
			/>
			<Separator className='h-[0.5px] my-10' />
		</>
	);

	return (
		<>
			{isShowAddReview ? addReviewForm : null}
			<Reviews fetchReviews={fetchReviews} id={id} />
		</>
	);
}

export default ReviewSection;
