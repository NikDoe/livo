import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/SubmitButton';
import { createProfileAction } from '@/utils/actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

async function CreateProfilePage() {
	const user = await currentUser();

	if (user?.privateMetadata?.hasProfile) redirect('/cars');

	return (
		<section className='container'>
			<h3 className='text-3xl mb-8'>Создание профиля</h3>
			<div className='max-w-full lg:max-w-3xl'>
				<FormContainer action={createProfileAction}>
					<div className='grid gap-10'>
						<FormInput
							type='text'
							name='displayName'
							label='Отбражаемое имя'
							placeholder='Введите ваше отображаемое имя'
						/>
						<FormInput
							type='text'
							name='realName'
							label='Реальное имя'
							placeholder='Введите ваше реальное имя'
						/>
					</div>
					<SubmitButton text='Создать профиль' className='mt-10' />
				</FormContainer>
			</div>
		</section>
	);
}

export default CreateProfilePage;
