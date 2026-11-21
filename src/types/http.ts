export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

export type HttpHeaders = Record<string, string | string[] | undefined>;

export type QueryParams = Record<string, string | string[] | undefined>;



export interface HttpRequest {
    method: HttpMethod;
    url: string;
    headers?: HttpHeaders;
    body?: string | Buffer | Uint8Array;
    timeout?: number;
    queryParams?: QueryParams;
}

export interface HttpResponse {
    success: boolean;
    statusCode: number;
    statusText: string;
    headers: HttpHeaders;
    body: string;
    rawBody?: Buffer; //for handling  raw binary chunks like files.
    elapsedTime: number;
    size?: number;
}

export interface ErrorResponse {
    statusCode: number;
    message: string
}