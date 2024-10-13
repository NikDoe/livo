import Logo from '../navbar/Logo';
import { Separator } from '../ui/separator';
import DarkMode from './DarkMode';
import PagesLinks from './PagesLinks';

function Footer() {
	return (
		<footer className='container'>

			<div className='flex flex-col gap-10 md:flex-row py-6 md:py-12 items-start'>
				<div className='w-full flex gap-4 md:flex-col justify-between'>
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
