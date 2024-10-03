import ContentContainer from '@/components/accountPage/ContentContainer';
import NotificationsForm from '@/components/accountPage/NotificationsForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Оповещения - Аккаунт | Livo',
	description: 'Настройте ваши оповещения и выберите, какие уведомления получать.',
	keywords: ['аккаунт', 'оповещения', 'уведомления'],
};

function NotificationsPage() {
	return (
		<ContentContainer
			pageTitle='Настройки оповещения'
			pageDescription='Настройте, какие уведомления вы хотите получать и как часто. Управляйте своими оповещениями на сайте для лучшего контроля'
		>
			<NotificationsForm />
		</ContentContainer>
	);
}

export default NotificationsPage;
