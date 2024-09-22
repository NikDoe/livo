import {
	CategoriesInput,
	FormContainer,
	FormInput,
	PriceInput,
	SubmitButton,
	TextAreaInput
} from '@/components/form';
import { Button } from '@/components/ui/button';

import { createPropertyAction } from '@/utils/actions';

import Link from 'next/link';

function CreateProperty() {
	return (
		<section className='flex flex-col lg:flex-row gap-20'>
			<div className='w-2/3'>
				<div className='flex justify-between'>
					<h1 className='text-3xl font-semibold mb-20'>
						Объявление о жилье
					</h1>
					<Button asChild>
						<Link href='/experiences/create-experience'>Организовать мероприятие</Link>
					</Button>
				</div>
				<div className='space-y-20'>
					<FormContainer action={createPropertyAction}>
						<div className='grid md:grid-cols-2 gap-10 mb-10'>
							<FormInput
								name='name'
								type='text'
								label='Название (макс. 20 символов)'
								defaultValue='Глэмпинг в Гомеле: Уютный домик в стиле Тосканы'
							/>
							<PriceInput />
							<CategoriesInput />
						</div>
						<TextAreaInput name='description' labelText='Описание (от 10 до 1000 слов)' />
						<SubmitButton text='Разместить предложение' className='mt-20' />
					</FormContainer>
				</div>
			</div>

			<div className='w-1/3'>
				<h1 className='text-3xl'>Превью</h1>
			</div>
		</section>
	);
}

export default CreateProperty;
