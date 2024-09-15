import { fetchProfile } from '@/utils/actions';
import { notFound } from 'next/navigation';

type UserProfileProps = {
	params: {
		profileId: string
	}
}

async function UserProfile({ params }: UserProfileProps) {
	const profile = await fetchProfile(params.profileId);

	if (!profile) {
		notFound();
	}

	return (
		<h1>
			{profile.displayName}
		</h1>
	);
}

export default UserProfile;
