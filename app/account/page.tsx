import ContentContainer from '@/components/accountPage/ContentContainer';
import ProfileForm from '@/components/accountPage/ProfileForm';

function AccountPage() {
	return (
		<ContentContainer
			isProfileForm
			pageTitle='Личная информация'
			pageDescription='Так вас будут видеть другие пользователи на сайте.'
		>
			<ProfileForm />
		</ContentContainer>
	);
}

export default AccountPage;