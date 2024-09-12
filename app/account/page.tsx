import PageContainer from '@/components/accountPage/page-container';
import ProfileForm from '@/components/accountPage/ProfileForm';

function AccountPage() {
	return (
		<PageContainer
			isProfileForm
			pageTitle='Личная информация'
			pageDescription='Так вас будут видеть другие пользователи на сайте.'
		>
			<ProfileForm />
		</PageContainer>
	);
}

export default AccountPage;