import {
	CarsList,
	ExperiencesList,
	FlightsList,
	StaysList
} from '@/components/mainPages';
import EmptyList from '@/components/mainPages/common/EmptyList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchFavorites } from '@/utils/actions';
import { getPluralFavorites } from '@/utils/pluralRules';

async function WishListsPage() {
	const favorites = await fetchFavorites();

	const isEmpty =
		favorites.stays.length === 0;
	//&& favorites.cars.length === 0 &&
	// favorites.experiences.length === 0;

	if (isEmpty) {
		return (
			<EmptyList
				heading='Ваш список избранного пуст'
				message='Добавляйте понравившиеся дома, автомобили или туры, чтобы легко находить их в будущем.'
			/>
		);
	}

	const { stays } = favorites;
	const pluralText = getPluralFavorites(favorites.stays.length);

	return (
		<Tabs defaultValue='stays'>
			<div className='flex items-end justify-between xl:mb-16'>
				<div>
					<h1 className='title-level_1 mb-3'>Ваши избранные предложения</h1>
					<p className='page_subtitle'>Вы добавили {pluralText}</p>
				</div>
				<TabsList>
					<TabsTrigger value='stays'>Жильё</TabsTrigger>
					<TabsTrigger value='flights'>Авиабилеты</TabsTrigger>
					<TabsTrigger value='cars'>Автомобили</TabsTrigger>
					<TabsTrigger value='experiences'>Туры</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value='stays'><StaysList stays={stays} /></TabsContent>
			<TabsContent value='flights'><FlightsList /></TabsContent>
			<TabsContent value='cars'><CarsList /></TabsContent>
			<TabsContent value='experiences'><ExperiencesList /></TabsContent>
		</Tabs>
	);
}

export default WishListsPage;