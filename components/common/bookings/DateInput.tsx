import { formatBookingDate } from '@/utils/format';
import { CiCalendar } from 'react-icons/ci';

type DateInputProps = {
	text: string;
	date: undefined | Date;
}

function DateInput(props: DateInputProps) {
	const { date, text } = props;
	const dateText = date ? formatBookingDate(date) : 'выберите дату';

	return (
		<div className='flex items-center justify-between gap-x-2'>
			<div className='flex flex-col items-start'>
				<span className='text-muted-foreground text-sm'>{text}</span>
				<span>{dateText}</span>
			</div>
			<CiCalendar className='h-6 w-6 text-muted-foreground' />
		</div>
	);
}

export default DateInput;
