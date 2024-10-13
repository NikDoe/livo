import Link from 'next/link';
import { Button } from '../ui/button';
import MainPagesLinks from './MainPagesLinks';

function PagesLinks() {
	return (
		<div className='w-full flex flex-col sm:flex-row sm:justify-between'>

			<MainPagesLinks />

			<Button asChild variant='ghost'>
				<Link href='/support'>Поддержка</Link>
			</Button>

		</div>
	);
}

export default PagesLinks;
