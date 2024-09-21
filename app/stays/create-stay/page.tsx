import { FormContainer, FormInput, SubmitButton } from '@/components/form';
import CategoriesInput from '@/components/form/CategoriesInput';
import PriceInput from '@/components/form/PriceInput';
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
						<div className='grid md:grid-cols-2 gap-8 mb-4'>
							<FormInput
								name='name'
								type='text'
								label='Название (макс. 20 символов)'
								defaultValue='Домик в Гомеле'
							/>
							<PriceInput />
							<CategoriesInput />
						</div>
						{/* текстовая область / описание */}
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
