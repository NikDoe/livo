import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { TEXTAREA_DEFAULT_ROWS_NUMBER } from '@/utils/constants';

type TextAreaInputProps = {
	name: string;
	labelText?: string;
	defaultValue?: string;
	rows?: number;
};

const tempDefaultDescription =
	'Приглашаем вас в наш уникальный домик, расположенный в живописном саду с оливковыми деревьями. Внутри вас ждёт комфорт: кондиционер, отопление, удобная королевская кровать, телевизор и Wi-Fi, а также потрясающий вид на природу. Всего в нескольких минутах от живописного парка и реки, где вы сможете насладиться катанием на каяках и исследовать окрестности.На территории имеется баня, костровище и мини - кухня, а также свежие домашние яйца. Расслабьтесь и насладитесь чистым деревенским воздухом.У нас обитают уточки, курочки и петушки, а также дружелюбные собаки.Пространство вдохновляет и помогает отдохнуть.Оливковые деревья цветут весной и радуют урожаем осенью. Не упустите возможность посетить наш фермерский магазин, где вы сможете купить свежие продукты прямо с нашего хозяйства.Ждём вас!';

function TextAreaInput(props: TextAreaInputProps) {
	const { name, defaultValue, labelText, rows } = props;

	const labelElement = (
		<Label htmlFor={name} className='uppercase'>
			{labelText}
		</Label>
	);

	return (
		<>
			{labelText ? labelElement : null}
			<Textarea
				id={name}
				name={name}
				placeholder={defaultValue}
				rows={rows || TEXTAREA_DEFAULT_ROWS_NUMBER}
				required
				className='leading-loose mt-2'
			/>
		</>
	);
}

export default TextAreaInput;