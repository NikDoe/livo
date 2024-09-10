import Logo from '../navbar/Logo';
import { Separator } from '../ui/separator';
import DarkMode from './DarkMode';
import PagesLinks from './PagesLinks';

function Footer() {
	return (
		<footer className='container'>

			<div className='flex py-12 items-center'>
				<div className='space-y-2'>
					<Logo />
					<DarkMode />
				</div>

				<PagesLinks />
			</div>

			<Separator className='h-[0.5px]' />

			<p className='font-extralight py-6'>
				Copyright © {new Date().getFullYear()} NikDoe. Все права защищены
			</p>

		</footer>
	);
}

export default Footer;
