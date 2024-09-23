import { MAIN_ROUTES } from './constants';

type ActionResponse = {
    message: string;
}

export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<ActionResponse>;

export type PropertyCardProps = {
    image: string;
    id: string;
    propertyTitle: string;
    country: string;
    price: number;
};

export type MainRoutes = typeof MAIN_ROUTES extends Set<infer U> ? U : never;