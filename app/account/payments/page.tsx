import PageContainer from '@/components/accountPage/page-container';
import PaymentsForm from '@/components/accountPage/PaymentsForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Способы оплаты - Аккаунт | Livo',
	description: 'Управляйте своими способами оплаты, добавляйте новые и удаляйте устаревшие.',
	keywords: ['аккаунт', 'способы оплаты', 'кредитная карта'],
};

function PaymentsPage() {
	return (
		<PageContainer
			pageTitle='Способы оплаты'
			pageDescription='Добавляйте, удаляйте или редактируйте способы оплаты. Так вы можете легко управлять своими финансовыми данными на сайте.'
		>
			<PaymentsForm />
		</PageContainer>
	);
}

export default PaymentsPage;
