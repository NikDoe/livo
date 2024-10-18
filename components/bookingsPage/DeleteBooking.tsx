import type { actionFunction } from '@/utils/types';
import { FormContainer } from '../form';
import DeleteBookingButton from './DeleteBookingButton';

type DeleteBookingButtonProps = {
	bookingId: string;
	deleteAction: actionFunction;
}

function DeleteBooking({ bookingId, deleteAction }: DeleteBookingButtonProps) {
	const deleteBooking = deleteAction.bind(null, { bookingId });

	return (
		<FormContainer action={deleteBooking}>
			<DeleteBookingButton />
		</FormContainer>
	);
}

export default DeleteBooking;