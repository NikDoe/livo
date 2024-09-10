import Link from 'next/link';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import UserIcon from './UserIcon';
import { Separator } from '../ui/separator';

import { BsHouseAdd } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { GoChecklist } from 'react-icons/go';
import { LuTent } from 'react-icons/lu';

function UserMenuDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size='icon' className='rounded-full ml-6'>
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='flex flex-col space-y-4 p-6'
				align='end'
				sideOffset={10}
			>
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
					<Button variant='outline' className='w-full'>
						Выйти
					</Button>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default UserMenuDropdown;
