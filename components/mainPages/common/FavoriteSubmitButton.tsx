import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { RxReload } from 'react-icons/rx';

type FavoriteSubmitButtonProps = {
	isFavorite: boolean;
}

function FavoriteSubmitButton({ isFavorite }: FavoriteSubmitButtonProps) {
	const { pending } = useFormStatus();
	return (
		<Button
			type='submit'
			size='icon'
			variant='outline'
			className='p-2 cursor-pointer rounded-full border-2'
		>
			{pending ? (
				<RxReload className=' animate-spin' />
			) : isFavorite ? (
				<FaHeart />
			) : (
				<FaRegHeart />
			)}
		</Button>
	);
}

export default FavoriteSubmitButton;
