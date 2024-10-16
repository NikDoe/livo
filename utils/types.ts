import { MAIN_ROUTES } from './constants';

type ActionResponse = {
    message: string;
}

export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<ActionResponse>;

export type StayCardProps = {
    image: string;
    id: string;
    stayTitle: string;
    countryCode: string;
    price: number;
    amenities: string;
};

export type MainRoutes = typeof MAIN_ROUTES extends Set<infer U> ? U : never;

export type Favorites = {
    stays: StayCardProps[]
}

export type FetchReviews = {
    comment: string;
    rating: number;
    id: string;
    profile: {
        displayName: string;
        profileImage: string;
    };
}

export type FetchRating = {
    rating: string | number;
    count: number;
}

export type ProfileCardData = {
    profileId: string;
    profileImage: string;
    username: string;
    registrationTime: Date;
};

export type DateRangeSelect = {
    startDate: Date;
    endDate: Date;
    key: string;
};

export type Booking = {
    checkIn: Date;
    checkOut: Date;
};

//BOOKINGS
export type StayBooking = {
    id: string;
    orderTotal: number;
    totalNights: number;
    checkIn: Date;
    checkOut: Date;
    stay: {
        id: string;
        stayTitle: string;
        image: string;
        amenities: string;
        price: number;
    };
}

export type FlightBooking = {
    id: string;
}

export type CarBooking = {
    id: string;
}

export type ExperienceBooking = {
    id: string;
}