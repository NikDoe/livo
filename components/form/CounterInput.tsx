import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const DEFAULT_ARRAY_LENGTH = 4;

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
				name={name}
				required
			>
				<SelectTrigger id={name}>
					<SelectValue placeholder={placeholder || 0} />
				</SelectTrigger>
				<SelectContent>
					{Array.from({ length }, (_, i) => (
						<SelectItem key={i + 1} value={(i).toString()}>
							{i}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}

export default CounterInput;
