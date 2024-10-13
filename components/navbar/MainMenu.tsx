'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import MainPagesDropDown from './MainPagesDropDown';
import useIsMobile from '@/hooks/use-is-mobile';

function MainMenu() {
	const isMobile = useIsMobile();

	return (
		<div className='hidden md:flex items-center justify-between flex-grow'>
			<MainPagesDropDown />
			<div className='flex flex-col gap-6 md:flex-row'>
				<Button
					asChild
					variant={isMobile ? 'outline' : 'ghost'}
					className='order-2 md:order-1'
				>
					<Link href='/support'>Поддержка</Link>
				</Button>

				<Button
					asChild
					variant={isMobile ? 'default' : 'outline'}
					className='order-1 md:order-2'
				>
					<Link href='/stays/create-stay'>Разместить жильё</Link>
				</Button>
			</div>
		</div>
	);
}

export default MainMenu;
