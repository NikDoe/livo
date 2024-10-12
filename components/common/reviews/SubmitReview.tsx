'use client';

import FormContainer from '@/components/form/FormContainer';
import RatingInput from '@/components/form/RatingInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { SubmitButton } from '@/components/form';
import { actionFunction } from '@/utils/types';
import { choosePreposition } from '@/utils/format';

type SubmitReviewProps = {
	id: string;
	createReviewAction: actionFunction;
	title: string;
}

function SubmitReview(props: SubmitReviewProps) {
	const { id, createReviewAction, title } = props;

	const titleText = choosePreposition(title);
	const titleElement = (<span className='font-bold'>{titleText}</span>);

	return (
		<FormContainer action={createReviewAction}>
			<input type='hidden' name='itemId' value={id} />
			<div className='mb-5'>
				<p className='mb-5'>Поделитесь первыми впечатлениями {titleElement}</p>
				<RatingInput name='rating' labelText='рейтинг' />
			</div>
			<TextAreaInput
				rows={1}
				name='comment'
				defaultValue='Ваш комментарий...'
			/>
			<SubmitButton text='Оставить отзыв' className='mt-4' />
		</FormContainer>
	);
}

export default SubmitReview;