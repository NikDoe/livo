import { BookingCarList, BookingExperienceList, BookingFlightList, BookingStayList } from '@/components/bookingsPage';
import { PageContainer } from '@/components/common';
import EmptyList from '@/components/mainPages/common/EmptyList';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchStayBookings } from '@/utils/actions';
import { getPluralBookings } from '@/utils/pluralRules';

async function BookingsPage() {
	const stayBookings = await fetchStayBookings();

	if (stayBookings.length === 0) {
		return <EmptyList />;
	}

	const allBookingsCount = stayBookings.length;
	const pluralText = getPluralBookings(allBookingsCount);

	return (
		<>
			<Separator />
			<PageContainer>
				<div className='mb-16'>
					<h1 className='title-level_1 mb-3'>Забронировано для вас</h1>
					<p className='page_subtitle'>У вас есть {pluralText}</p>
				</div>

				<Tabs defaultValue='stays'>
					<TabsList className='mb-4'>
						<TabsTrigger value='stays'>Жильё</TabsTrigger>
						<TabsTrigger value='flights'>Авиабилеты</TabsTrigger>
						<TabsTrigger value='cars'>Автомобили</TabsTrigger>
						<TabsTrigger value='experiences'>Туры</TabsTrigger>
					</TabsList>
					<TabsContent value='stays'>
						<BookingStayList stayBookings={stayBookings} />
					</TabsContent>
					<TabsContent value='flights'>
						<BookingFlightList flightBookings={[]} />
					</TabsContent>
					<TabsContent value='cars'>
						<BookingCarList carBookings={[]} />
					</TabsContent>
					<TabsContent value='experiences'>
						<BookingExperienceList experienceBookings={[]} />
					</TabsContent>
				</Tabs>
			</PageContainer>
		</>
	);
}

export default BookingsPage;