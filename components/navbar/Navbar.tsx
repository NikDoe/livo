import { Separator } from '../ui/separator';
import Logo from './Logo';
import MainMenu from './MainMenu';
import UserMenuDropdown from './UserMenuDropDown';
import ConditionalSeparator from './ConditionalSeparator';

function Navbar() {
	return (
		<>
			<nav
				className='container py-6 flex items-center '
			>
				<Logo />
				<Separator className='mx-6 h-8' orientation='vertical' />
				<MainMenu />
				<UserMenuDropdown />
			</nav>
			<ConditionalSeparator />
		</>
	);
}

export default Navbar;
