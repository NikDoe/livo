import ContentContainer from '@/components/accountPage/ContentContainer';
import SecurityForm from '@/components/accountPage/SecurityForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Безопасность - Аккаунт | Livo',
	description: 'Настройте параметры безопасности для вашего аккаунта, измените пароль',
	keywords: ['аккаунт', 'безопасность', 'пароль'],
};

function SecurityPage() {
	return (
		<ContentContainer
			pageTitle='Безопасность'
			pageDescription='Управляйте настройками безопасности вашего аккаунта, включая изменение пароля и настройку двухфакторной аутентификации. Обеспечьте защиту вашего аккаунта на сайте'
		>
			<SecurityForm />
		</ContentContainer>
	);
}

export default SecurityPage;
