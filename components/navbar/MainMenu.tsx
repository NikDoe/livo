import Link from 'next/link';
import { Button } from '../ui/button';
import MainPagesDropDown from './MainPagesDropDown';

function MainMenu() {
	return (
		<div className='flex items-center justify-between flex-grow'>

			<MainPagesDropDown />

			<div className='flex'>
				<Button asChild variant='ghost'>
					<Link href='/support'>Поддержка</Link>
				</Button>
				<Button asChild>
					<Link href='/stays/create-stay'>Разместить жильё</Link>
				</Button>
			</div>
		</div>
	);
}

export default MainMenu;
