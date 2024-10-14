import { Separator } from '../ui/separator';
import Logo from './Logo';
import MainMenu from './MainMenu';
import UserMenuDropdown from './UserMenuDropDown';
import MobileMenu from './MobileMenu';

function Navbar() {
	return (
		<>
			<nav
				className='container py-6 flex items-center justify-between'
			>
				<Logo />
				<Separator className='hidden md:block mx-6 h-8' orientation='vertical' />
				<MainMenu />
				<UserMenuDropdown />
				<MobileMenu />
			</nav>
		</>
	);
}

export default Navbar;
