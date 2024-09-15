import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UserNotFound() {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-6xl'>404</h1>
			<p className='my-6'>Пользователя с таким профилем не существует</p>
			<Button asChild variant='secondary'>
				<Link href='/cars'>Вернуться на главную</Link>
			</Button>
		</div>
	);
}