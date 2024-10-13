import Image from 'next/image';

type UserInfoProps = {
	profileData: {
		profileImage: string;
		username: string;
	};
};

function UserInfo({ profileData }: UserInfoProps) {
	const { profileImage, username } = profileData;

	return (
		<article className='grid grid-cols-[auto,1fr] gap-4'>
			<Image
				src={profileImage}
				alt={username}
				width={50}
				height={50}
				className='rounded-full w-12 h-12 object-cover border'
			/>
			<div className='text-muted-foreground'>
				<p>
					размещено
					<span className='font-bold text-foreground'> {username}</span>
				</p>
				<p>
					2 года назад
				</p>
			</div>
		</article>
	);
}

export default UserInfo;
