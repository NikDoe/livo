import { accountSidebarNavLinks } from '@/utils/links';
import { Metadata } from 'next';

import SidebarNav from '@/components/accountPage/SidebarNav';
import { Separator } from '@/components/ui/separator';

type AccountPageLayoutProps = {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: 'Личная информация - Аккаунт | Livo',
	description: 'Управляйте своей личной информацией, обновляйте контактные данные и другую персональную информацию.',
	keywords: ['аккаунт', 'личная информация', 'контактные данные'],
};

function AccountPageLayout({ children }: AccountPageLayoutProps) {
	return (
		<>
			<Separator />
			<div className='container flex flex-col lg:flex-row lg:space-x-24'>
				<aside className='lg:-mx-4 lg:w-1/5'>
					<SidebarNav items={accountSidebarNavLinks} />
				</aside>
				<div className='flex-1'>{children}</div>
			</div>
		</>
	);
}

export default AccountPageLayout;