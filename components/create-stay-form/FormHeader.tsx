import Link from 'next/link';
import { Button } from '../ui/button';

function FormHeader() {
	return (
		<div className='flex flex-col md:flex-row justify-between'>
			<h1 className='mb-4 text-3xl font-semibold lg:mb-20'>
				Объявление о жилье
			</h1>
			<Button asChild>
				<Link href='/experiences/create-experience'>Организовать мероприятие</Link>
			</Button>
		</div>
	);
}

export default FormHeader;
