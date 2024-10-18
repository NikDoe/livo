import { Rating } from '@/components/mainPages';
import StayCardAmenities from '@/components/mainPages/staysPage/StayCardAmenities';
import { Separator } from '@/components/ui/separator';
import { deleteStayBookingAction, fetchStayRating } from '@/utils/actions';
import { STAY_DISCOUNT_VALUE, STAY_TITLE_MAX_LENGTH } from '@/utils/constants';
import { formatBookingDate, formatCurrency, formatText } from '@/utils/format';
import type { StayBooking } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import DeleteBooking from '../DeleteBooking';

type BookingStayCardProps = {
	booking: StayBooking;
}

function BookingStayCard({ booking }: BookingStayCardProps) {
	const { stay, checkIn, checkOut, orderTotal, totalNights, id: bookingId } = booking;
	const { amenities, id: stayId, image, stayTitle, price } = stay;

	const title = formatText(stayTitle, STAY_TITLE_MAX_LENGTH);
	const priceText = formatCurrency(price);
	const discount = price * STAY_DISCOUNT_VALUE;
	const discountPriceText = formatCurrency(price - discount);

	return (
		<article className='group relative border rounded-xl'>
			<Link href={`/stays/${stayId}`}>
				<div className='relative h-[300px] overflow-hidden rounded-t-xl'>
					<Image
						src={image}
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
						alt={stayTitle}
						className='rounded-t-xl object-cover transform group-hover:scale-110 transition-transform duration-500'
					/>
				</div>
				<div className='p-6'>
					<div className='flex justify-between mb-4'>
						<h1 className='text-lg font-semibold'>{title}</h1>
						<div className='flex flex-col font-bold text-xs p-2 border-2 border-primary rounded-sm'>
							<span className='line-through text-muted-foreground'>{priceText}</span>
							<span className='text-primary'>{discountPriceText}</span>
						</div>
					</div>
					<StayCardAmenities cardAmenities={amenities} />
					<Separator className='h-[0.5px] my-4' />
					<BookingRow label='Дата заезда' value={formatBookingDate(checkIn)} />
					<BookingRow label='Дата выезда' value={formatBookingDate(checkOut)} />
					<BookingRow label='Количество ночей' value={totalNights.toString()} />
					<div className='flex justify-between mt-2'>
						<span className='text-sm font-bold'>Итого: {formatCurrency(orderTotal)}</span>
						<Rating inPage={false} id={stayId} fetchRating={fetchStayRating} />
					</div>
				</div>
			</Link>
			<div className='absolute top-3 right-3'>
				<DeleteBooking
					bookingId={bookingId}
					deleteAction={deleteStayBookingAction}
				/>
			</div>
		</article>
	);
}

export default BookingStayCard;

type BookingRowProps = {
	label: string;
	value: string;
}

function BookingRow({ value, label }: BookingRowProps) {
	return (
		<p className='flex text-muted-foreground justify-between text-sm py-2'>
			<span>{label}</span>
			<span>{value}</span>
		</p>
	);
}