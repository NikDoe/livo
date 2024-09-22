import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { fetchProfile } from '@/utils/actions';

type PageContainerProps = {
	isProfileForm?: boolean;
	pageTitle: string;
	pageDescription: string;
	children: React.ReactNode;
}

async function PageContainer(props: PageContainerProps) {
	const { children, isProfileForm = false, pageDescription, pageTitle } = props;
	const profile = await fetchProfile();

	const profileButton = (
		<Button asChild variant='outline'>
			<Link href={`/profile/${profile!.clerkId}`}>Просмотреть профиль</Link>
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
			<Separator className='h-[0.5px]' />
			{children}
		</div>
	);
}

export default PageContainer;
