import Logo from '../navbar/Logo';
import { Separator } from '../ui/separator';
import DarkMode from './DarkMode';
import PagesLinks from './PagesLinks';

function Footer() {
	return (
		<footer className='container py-0'>

			<div className='flex flex-col items-start gap-10 py-6 md:flex-row md:py-12'>
				<div className='w-full flex justify-between gap-4 md:flex-col md:items-start'>
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
