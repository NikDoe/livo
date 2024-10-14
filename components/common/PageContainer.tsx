import { ReactNode } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import BreadCrumbs from './BreadCrumbs';

type PageContainerProps = {
	children: ReactNode;
	name?: string;
}

function PageContainer(props: PageContainerProps) {
	const { children, name } = props;

	return (
		<section className='container'>
			<div className='flex items-center justify-between mb-16'>
				<Button variant='outline' asChild>
					<Link href='/'>На главную</Link>
				</Button>
				<BreadCrumbs name={name} />
			</div>
			{children}
		</section>
	);
}

export default PageContainer;
