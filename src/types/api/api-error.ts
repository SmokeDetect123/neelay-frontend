export interface ApiError {

    success: false;

    message: string;

    errors?: Record<string, string>;

    timestamp?: string;

    path?: string;

    status?: number;

}