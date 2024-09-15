'use client';

import { useToast } from '@/hooks/use-toast';
import { SignOutButton } from '@clerk/nextjs';
import { Button } from '../ui/button';

function SignOutLink() {
	const { toast } = useToast();

	const handleLogout = () => {
		toast({ description: 'Вы вышли из аккаунта.' });
	};

	return (
		<SignOutButton redirectUrl='/cars'>
			<Button
				variant='outline'
				className='w-full'
				onClick={handleLogout}
			>
				Выйти
			</Button>
		</SignOutButton>
	);
}

export default SignOutLink;