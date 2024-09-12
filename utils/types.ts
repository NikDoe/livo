type ActionResponse = {
    message: string;
}

export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<ActionResponse>;