import { ImageContainer, ProfileCard } from '@/components/common';
import { fetchProfile } from '@/utils/actions';
import { notFound } from 'next/navigation';
import type { ProfileCardData } from '@/utils/types';

type UserProfileProps = {
	params: {
		profileId: string
	}
}

async function UserProfile({ params }: UserProfileProps) {
	const profile = await fetchProfile(params.profileId);

	// console.log(profile?.clerkId === params.profileId);

	if (!profile) {
		notFound();
	}

	const profileData: ProfileCardData = {
		profileId: profile.clerkId,
		profileImage: profile.profileImage,
		registrationTime: profile.createdAt,
		username: profile.displayName
	};

	return (
		<section className='lg:pt-16'>
			<div className='z-0 hidden lg:block -mt-16 mx-auto max-w-[1400px]'>
				<ImageContainer
					mainImage='/images/profile_bg.png'
					name='profile background image'
					className='md:h-[400px]'
				/>
			</div>
			<div
				className='container -mt-16 lg:mt-0 flex flex-col lg:flex-row gap-10 items-start'
			>
				<div className='w-full lg:w-1/4 lg:-mt-40 z-10'>
					<ProfileCard profileData={profileData} />
				</div>
				<div className='w-full lg:w-3/4'>
					Информация о пользователе
				</div>
			</div>
		</section>
	);
}

export default UserProfile;
