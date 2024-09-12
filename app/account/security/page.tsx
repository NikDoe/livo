import PageContainer from '@/components/accountPage/page-container';
import SecurityForm from '@/components/accountPage/SecurityForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Безопасность - Аккаунт | Livo',
	description: 'Настройте параметры безопасности для вашего аккаунта, измените пароль',
	keywords: ['аккаунт', 'безопасность', 'пароль'],
};

function SecurityPage() {
	return (
		<PageContainer
			pageTitle='Безопасность'
			pageDescription='Управляйте настройками безопасности вашего аккаунта, включая изменение пароля и настройку двухфакторной аутентификации. Обеспечьте защиту вашего аккаунта на сайте'
		>
			<SecurityForm />
		</PageContainer>
	);
}

export default SecurityPage;
