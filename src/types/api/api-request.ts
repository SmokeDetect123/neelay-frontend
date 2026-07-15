export interface PaginationRequest {

    page: number;

    size: number;

}

export interface SearchRequest {

    search?: string;

}

export interface SortRequest {

    sortBy?: string;

    direction?: "asc" | "desc";

}

export interface FilterRequest {

    status?: string;

    role?: string;

}

export type ListRequest =
    PaginationRequest &
    SearchRequest &
    SortRequest &
    FilterRequest;