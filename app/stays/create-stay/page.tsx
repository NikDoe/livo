import {
	AccommodationBlock,
	AmenitiesBlock,
	DetailsBlock,
	FormHeader
} from '@/components/create-stay-form';

import {
	FormContainer,
	ImageInput,
	SubmitButton,
	TextAreaInput
} from '@/components/form';

import { createStayAction } from '@/utils/actions';;

function CreateStay() {
	return (
		<section className='container flex flex-col lg:flex-row gap-20'>
			<div className='w-full space-y-10 lg:w-2/3'>
				<FormHeader />
				<div className='space-y-20'>
					<FormContainer action={createStayAction}>
						<h3 className='text-base font-bold mb-10'>Загрузите фото</h3>
						<ImageInput />
						<DetailsBlock />
						<TextAreaInput name='description' labelText='Описание (от 10 до 1000 слов)' />
						<AccommodationBlock />
						<AmenitiesBlock />
						<SubmitButton text='Разместить предложение' className='mt-20' />
					</FormContainer>
				</div>
			</div>

			<div className='w-1/3'>
				<h1 className='text-2xl font-semibold'>Предпросмотр</h1>
			</div>
		</section>
	);
}

export default CreateStay;
