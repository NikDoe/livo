import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import UserIcon from './UserIcon';
import AuthDropdown from './AuthDropdown';
import GuestDropdown from './GuestDropdown';

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
				<GuestDropdown />
				<AuthDropdown />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default UserMenuDropdown;
