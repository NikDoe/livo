'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { BsTrash } from 'react-icons/bs';
import { RxReload } from 'react-icons/rx';

function DeleteBookingButton() {
	const { pending } = useFormStatus();

	return (
		<Button size='icon' variant={'outline'}>
			{pending
				? (<RxReload className=' animate-spin' />)
				: (<BsTrash className='h-5 w-5' />)
			}
		</Button>
	);
}

export default DeleteBookingButton;
