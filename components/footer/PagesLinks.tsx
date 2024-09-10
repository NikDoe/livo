import Link from 'next/link';
import { Button } from '../ui/button';
import MainPagesLinks from './MainPagesLinks';

function PagesLinks() {
	return (
		<div className='flex flex-grow justify-evenly'>

			<MainPagesLinks />

			<Button asChild variant='ghost'>
				<Link href='/support'>Поддержка</Link>
			</Button>

		</div>
	);
}

export default PagesLinks;
