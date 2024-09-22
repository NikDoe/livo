import { Input } from '../ui/input';
import { Label } from '../ui/label';

type ImageInputProps = {
	labelText?: string;
}

const name = 'image';

function ImageInput({ labelText }: ImageInputProps) {
	return (
		<div>
			<Label htmlFor={name}>
				{labelText}
			</Label>
			<Input
				id={name}
				name={name}
				type='file'
				required
				accept='image/*'
				className='max-w-xs my-2'
			/>
		</div>
	);
}

export default ImageInput;
