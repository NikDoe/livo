import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

import { SlLogin, SlUserFollow } from 'react-icons/sl';

function GuestDropdown() {
	return (
		<SignedOut>
			<DropdownMenuItem>
				<SignInButton
					mode='modal'
					forceRedirectUrl=''
					fallbackRedirectUrl=''
				>
					<Button variant='ghost' className='flex'>
						<SlLogin className='w-6 h-6 mr-4' />
						Войти
					</Button>
				</SignInButton>
			</DropdownMenuItem>
			<Separator />
			<DropdownMenuItem>
				<SignUpButton
					mode='modal'
					forceRedirectUrl=''
					fallbackRedirectUrl=''
				>
					<Button variant='ghost' className='flex'>
						<SlUserFollow className='w-6 h-6 mr-4' />
						Регистрация
					</Button>
				</SignUpButton>
			</DropdownMenuItem>
		</SignedOut>
	);
}

export default GuestDropdown;
