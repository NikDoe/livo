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