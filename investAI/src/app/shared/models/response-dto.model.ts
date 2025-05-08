export type ResponseDTO<T> = {
    ok: boolean;
    data: T;
    message: string;
}