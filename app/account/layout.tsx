import { accountSidebarNavLinks } from '@/utils/links';
import { Metadata } from 'next';

import SidebarNav from '@/components/accountPage/SidebarNav';

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
		<div className='flex flex-col lg:flex-row lg:space-x-24'>
			<aside className='lg:-mx-4 lg:w-1/5'>
				<SidebarNav items={accountSidebarNavLinks} />
			</aside>
			<div className='flex-1'>{children}</div>
		</div>
	);
}

export default AccountPageLayout;