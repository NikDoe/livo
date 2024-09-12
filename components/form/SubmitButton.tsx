'use client';
import { RxReload } from 'react-icons/rx';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
	className?: string;
	text?: string;
};

export function SubmitButton(props: SubmitButtonProps) {
	const { className = '', text = 'отправить' } = props;
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			disabled={pending}
			className={`capitalize ${className}`}
			size='lg'
		>
			{pending ? (
				<>
					<RxReload className='mr-2 h-4 w-4 animate-spin' />
					Пожалуйста подождите...
				</>
			) : (
				text
			)}
		</Button>
	);
}