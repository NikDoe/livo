import { fetchProfileImage } from '@/utils/actions';
import { CiUser } from 'react-icons/ci';

async function UserIcon() {
	const profileImage = await fetchProfileImage();

	if (profileImage)
		return (
			<img
				src={profileImage}
				className='w-full h-full rounded-full object-cover'
				alt='user image'
			/>
		);

	return <CiUser className='w-6 h-6 bg-primary rounded-full text-white' />;
}

export default UserIcon;
