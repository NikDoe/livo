'use client';

import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

function FavoriteSignInButton() {
	const pathname = usePathname();

	return (
		<SignInButton
			mode='modal'
			forceRedirectUrl={pathname}
		>
			<Button
				size='icon'
				variant='ghost'
				className='p-2 cursor-pointer rounded-full border-2'
			>
				<FaRegHeart className='w-4 h-4' />
			</Button>
		</SignInButton>
	);
}

export default FavoriteSignInButton;
