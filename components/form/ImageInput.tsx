import { Input } from '../ui/input';

const name = 'image';

function ImageInput() {
	return (
		<Input
			id={name}
			name={name}
			type='file'
			required
			accept='image/*'
			className='max-w-xs my-2'
		/>
	);
}

export default ImageInput;
