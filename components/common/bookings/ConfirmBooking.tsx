'use client';

import { SignInButton, useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { useStay } from '@/utils/store';
import FormContainer from '@/components/form/FormContainer';
import { createStayBookingAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form';
import { usePathname } from 'next/navigation';

function ConfirmBooking() {
	const pathname = usePathname();
	const { userId } = useAuth();
	const { stayId, range } = useStay((state) => state);
	const checkIn = range?.from as Date;
	const checkOut = range?.to as Date;

	if (!userId)
		return (
			<SignInButton
				mode='modal'
				forceRedirectUrl={pathname}
			>
				<Button type='button' className='w-full mt-8'>
					Авторизуйтесь для бронирования
				</Button>
			</SignInButton>
		);

	const createBooking = createStayBookingAction.bind(null, {
		stayId,
		checkIn,
		checkOut,
	});

	return (
		<section>
			<FormContainer action={createBooking}>
				<SubmitButton text='Забронировать' className='w-full mt-8' />
			</FormContainer>
		</section>
	);
}
export default ConfirmBooking;