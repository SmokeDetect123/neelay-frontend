export interface Pageable {

    page: number;

    size: number;

}

export interface PageResponse<T> {

    content: T[];

    totalElements: number;

    totalPages: number;

    size: number;

    number: number;

}