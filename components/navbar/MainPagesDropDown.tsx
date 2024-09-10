import { mainPageslinks } from '@/utils/links';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '../ui/dropdown-menu';
import Link from 'next/link';

import { SlArrowDown } from 'react-icons/sl';

function MainPagesDropDown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' className='flex gap-4 items-center'>
					<span>Для путешественников</span>
					<SlArrowDown />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='flex flex-col space-y-4 p-6 w-56'
				align='start'
				sideOffset={10}
			>
				{mainPageslinks.map((link) => {
					return (
						<DropdownMenuItem key={link.href}>
							<Link href={link.href} className='flex items-center w-full'>
								<link.icon className='w-6 h-6 mr-4' />
								{link.label}
							</Link>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default MainPagesDropDown;
