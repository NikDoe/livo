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