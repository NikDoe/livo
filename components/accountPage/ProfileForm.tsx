import {
	fetchProfile,
	updateProfileAction,
	updateProfileImageAction
} from '@/utils/actions';

import {
	FormContainer,
	FormInput,
	ImageInputContainer,
	SubmitButton
} from '../form';

async function ProfileForm() {
	const profile = await fetchProfile();

	return (
		<section>
			<div className='max-w-full lg:max-w-3xl'>
				<ImageInputContainer
					image={profile!.profileImage}
					name={profile!.displayName}
					action={updateProfileImageAction}
					text='Обновить изображение'
				/>
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
