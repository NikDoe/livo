'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { formatRegistrationDate } from '@/utils/format';
import { usePathname } from 'next/navigation';
import { PROFILE_ROUTE } from '@/utils/constants';

import type { ProfileCardData } from '@/utils/types';

type ProfileCardProps = {
	profileData: ProfileCardData;
};

function ProfileCard({ profileData }: ProfileCardProps) {
	const pathName = usePathname();
	const { profileId, profileImage, registrationTime, username } = profileData;
	const profilePage = pathName.startsWith(PROFILE_ROUTE);

	const linkElement = (
		<Button asChild variant='outline'>
			<Link href={`/profile/${profileId}`}>
				Профиль
			</Link>
		</Button>
	);

	return (
		<div
			className='p-6 border rounded-xl flex flex-col items-center gap-8 bg-background'
		>
			<Image
				src={profileImage}
				alt={username}
				width={100}
				height={100}
				className='rounded-full w-40 h-40 object-cover border'
			/>
			<p className='title-level_1'>{username}</p>
			{!profilePage && linkElement}
			<Separator className='w-[200px]' />
			<p className='text-muted-foreground text-sm'>
				{formatRegistrationDate(registrationTime)}
			</p>
		</div>
	);
}

export default ProfileCard;
