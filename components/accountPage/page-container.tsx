import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';

type PageContainerProps = {
	isProfileForm?: boolean;
	pageTitle: string;
	pageDescription: string;
	children: React.ReactNode;
}

function PageContainer(props: PageContainerProps) {
	const { children, isProfileForm = false, pageDescription, pageTitle } = props;

	const profileButton = (
		<Button asChild variant='outline'>
			<Link href='/profile'>Просмотреть профиль</Link>
		</Button>
	);

	return (
		<div className='space-y-12'>
			<div className='flex justify-between'>
				<div className='space-y-2'>
					<h3 className='text-3xl font-medium'>{pageTitle}</h3>
					<p className='text-sm text-muted-foreground'>
						{pageDescription}
					</p>
				</div>

				{isProfileForm ? profileButton : null}

			</div>
			<Separator />
			{children}
		</div>
	);
}

export default PageContainer;
