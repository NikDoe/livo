import { mainPageslinks } from '@/utils/links';
import { Button } from '../ui/button';
import Link from 'next/link';

function MainPagesLinks() {
	return (
		<ul className='grid grid-cols-2 gap-x-8'>
			{
				mainPageslinks.map(
					link => (
						<Button key={link.href} asChild variant='ghost'>
							<Link href={link.href}>{link.label}</Link>
						</Button>
					)
				)
			}
		</ul>
	);
}

export default MainPagesLinks;
