import { calculateTotals } from '@/utils/calculateTotals';
import { useStay } from '@/utils/store';
import { formatCurrency } from '@/utils/format';
import { getPluralNights } from '@/utils/pluralRules';
import { STAY_DISCOUNT_VALUE } from '@/utils/constants';

function BookingForm() {
	const { range, price } = useStay((state) => state);
	const checkIn = range?.from as Date;
	const checkOut = range?.to as Date;

	const {
		totalNights,
		subTotal,
		cleaning,
		service,
		discount,
		orderTotal
	} = calculateTotals({ checkIn, checkOut, price });

	const nightsLabel = `${price} x ${getPluralNights(totalNights)}`;
	const discountLabel = `Скидка ${STAY_DISCOUNT_VALUE * 100}%`;

	return (
		<div>
			<FormRow label={nightsLabel} amount={subTotal} />
			<FormRow label='Уборка номера' amount={cleaning} />
			<FormRow label='Сервис' amount={service} />
			<FormRow label={discountLabel} amount={discount} isDiscountRow />
			<FormRow label='Итого' amount={orderTotal} isTotalRow />
		</div>
	);
}

export default BookingForm;

type FormRowProps = {
	label: string;
	amount: number;
	isDiscountRow?: boolean;
	isTotalRow?: boolean;
}

function FormRow(props: FormRowProps) {
	const { isDiscountRow = false, isTotalRow = false, amount, label } = props;
	const totalClassName = isTotalRow
		? 'bg-gray-100 font-bold'
		: '';
	const formatedAmount = formatCurrency(amount);
	const amountText = isDiscountRow ? `-${formatedAmount}` : formatedAmount;

	return (
		<p className={`flex justify-between text-sm py-3 px-4 rounded-md ${totalClassName}`}>
			<span>{label}</span>
			<span>{amountText}</span>
		</p>
	);
}
