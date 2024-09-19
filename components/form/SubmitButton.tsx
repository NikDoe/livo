'use client';
import { RxReload } from 'react-icons/rx';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
	className?: string;
	text?: string;
	size?: btnSize;
};

const loadingText = (
	<>
		<RxReload className='mr-2 h-4 w-4 animate-spin' />
		Пожалуйста подождите...
	</>
);

export function SubmitButton(props: SubmitButtonProps) {
	const { className = '', text = 'отправить', size = 'lg' } = props;
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			disabled={pending}
			className={`capitalize ${className}`}
			size={size}
		>
			{pending ? loadingText : text}
		</Button>
	);
}