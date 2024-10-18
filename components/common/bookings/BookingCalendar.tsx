'use client';

import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useStay } from '@/utils/store';
import { ru } from 'date-fns/locale';

import {
	generateDisabledDates,
	generateDateRange,
	defaultSelected,
	generateBlockedPeriods,
} from '@/utils/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import DateInput from './DateInput';
import { useToast } from '@/hooks/use-toast';

function BookingCalendar() {
	const currentDate = new Date();
	const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
	const bookings = useStay(state => state.bookings);
	const blockedPeriods = generateBlockedPeriods({
		bookings,
		today: currentDate,
	});

	const { toast } = useToast();
	const unavailableDates = generateDisabledDates(blockedPeriods);

	useEffect(() => {
		const selectedRange = generateDateRange(range);

		const isDisabledDateIncluded = selectedRange.some((date) => {
			if (unavailableDates[date]) {
				setRange(defaultSelected);

				toast({
					description: 'Некоторые из дат в выбранном вами диапазоне уже забронированы',
				});

				return true;
			}

			return false;
		});

		useStay.setState({ range });
	}, [range]);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<div
					className='flex flex-col gap-y-4 bg-muted rounded-md p-4 cursor-pointer'
				>
					<DateInput text='заезд' date={range?.from} />
					<Separator />
					<DateInput text='выезд' date={range?.to} />
				</div>
			</PopoverTrigger>
			<PopoverContent>
				<Calendar
					mode='range'
					defaultMonth={currentDate}
					selected={range}
					onSelect={setRange}
					locale={ru}
					disabled={blockedPeriods}
				/>
			</PopoverContent>
		</Popover >
	);
}

export default BookingCalendar;
