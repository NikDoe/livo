import { fetchProfile, updateProfileAction } from '@/utils/actions';
import { FormContainer, FormInput, SubmitButton } from '../form';

async function ProfileForm() {
	const profile = await fetchProfile();

	return (
		<section>
			<div className='max-w-full lg:max-w-3xl'>
				<FormContainer action={updateProfileAction}>
					<div className='grid gap-10'>
						<FormInput
							type='text'
							name='displayName'
							label='Отбражаемое имя'
							defaultValue={profile!.displayName}
						/>
						<FormInput
							type='text'
							name='realName'
							label='Реальное имя'
							defaultValue={profile!.realName}
						/>
					</div>
					<SubmitButton text='Обновить профиль' className='mt-10' />
				</FormContainer>
			</div>
		</section>
	);
}

export default ProfileForm;
