export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

export type HttpHeaders = Record<string, string | string[] | undefined>;

export type QueryParams = Record<string, string | string[] | undefined>;


export interface HeaderRow {
    id: string;
    key: string;
    value: string;
    enabled: boolean;
}

export interface HttpRequest {
    method: HttpMethod;
    url: string;
    headers?: HttpHeaders;
    body?: unknown;
    timeout?: number;
    queryParams?: QueryParams;
}

export interface HttpResponse {
    statusCode: number;
    statusText: string;
    headers: HttpHeaders;
    body: string;
    elapsedTime: number;
    size?: number;
}