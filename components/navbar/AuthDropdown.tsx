import { SignedIn } from '@clerk/nextjs';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import Link from 'next/link';
import { BsHouseAdd } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { Separator } from '../ui/separator';
import { GoChecklist } from 'react-icons/go';
import { LuTent } from 'react-icons/lu';
import { Button } from '../ui/button';
import SignOutLink from './SignOutLink';

function AuthDropdown() {
	return (
		<SignedIn>
			<DropdownMenuItem>
				<Link href='/bookings' className='flex items-center w-full'>
					<BsHouseAdd className='w-6 h-6 mr-4' />
					Бронирования
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Link href='/wishlists' className='flex items-center w-full'>
					<MdFavoriteBorder className='w-6 h-6 mr-4' />
					Избранное
				</Link>
			</DropdownMenuItem>
			<Separator />
			<DropdownMenuItem>
				<Link href='/stays/create-stay' className='flex items-center w-full'>
					<GoChecklist className='w-6 h-6 mr-4' />
					Разместить жильё
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Link href='/experiences/create-experience' className='flex items-center w-full'>
					<LuTent className='w-6 h-6 mr-4' />
					Организовать мероприятие
				</Link>
			</DropdownMenuItem>
			<div className='flex space-x-2'>
				<Button asChild className='w-full'>
					<Link href='/account'>Аккаунт</Link>
				</Button>
				<SignOutLink />
			</div>
		</SignedIn>
	);
}

export default AuthDropdown;
