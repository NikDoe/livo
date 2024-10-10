'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { CiCalendar } from 'react-icons/ci';

function BookingCalendar() {
	const currentDate = new Date();
	const defaultSelected: DateRange = {
		from: undefined,
		to: undefined,
	};
	const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className='mt-8 text-muted-foreground flex justify-between'
				>
					<span>выберите дату</span>
					<CiCalendar className='w-5 h-5' />
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<Calendar
					id='test'
					mode='range'
					defaultMonth={currentDate}
					selected={range}
					onSelect={setRange}
				/>
			</PopoverContent>
		</Popover>
	);
}

export default BookingCalendar;
