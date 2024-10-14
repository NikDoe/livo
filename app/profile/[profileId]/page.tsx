import { ImageContainer } from '@/components/common';
import { fetchProfile } from '@/utils/actions';
import { notFound } from 'next/navigation';
import profile_bg from '@/public/images/profile_bg.png';

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

	return (
		<section className='container'>
			<ImageContainer
				mainImage='/images/profile_bg.png'
				name='profile background image'
				className='-mt-16'
			/>
		</section>
	);
}

export default UserProfile;
