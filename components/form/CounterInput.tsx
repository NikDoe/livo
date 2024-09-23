import { DEFAULT_ARRAY_LENGTH } from '@/utils/constants';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type CounterInputProps = {
	name: string;
	maxValue?: number;
	labelText?: string;
	placeholder?: string;
}

function CounterInput(props: CounterInputProps) {
	const { maxValue, labelText, name, placeholder } = props;
	const length = maxValue ? maxValue + 1 : DEFAULT_ARRAY_LENGTH + 1;

	return (
		<div>
			<Label htmlFor={name}>
				{labelText}
			</Label>
			<Select
				defaultValue='0'
				name={name}
				required
			>
				<SelectTrigger id={name}>
					<SelectValue
						placeholder={placeholder || '0'}
					/>
				</SelectTrigger>
				<SelectContent>
					{Array.from({ length }, (_, i) => (
						<SelectItem key={i} value={(i).toString()}>
							{i.toString()}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}

export default CounterInput;
