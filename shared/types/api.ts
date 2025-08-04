export type PaginatedApiResponse<T> = {
    total: number;
    hasNextPage: boolean;
    prev: number | null;
    next: number | null;
    items: T[];
}

export type PageParams = {
    page: number;
    limit: number
}

export type Order = 'asc' | 'desc';

export type OrderOptions<T extends string> = {
    sort: Order;
    orderBy: T
}

