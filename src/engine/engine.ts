import type { ErrorResponse, HttpRequest, HttpResponse } from "../types/http.js";


const res: HttpResponse = {
    body: "",
    elapsedTime: 100,
    success: true,
    statusCode: 200, statusText: "OK",
    headers: {},
}

export const sendRequest = async (request: HttpRequest): Promise<HttpResponse | ErrorResponse | undefined> => {
    try {
        return res;
    } catch (error: unknown) {
        return {
            success: false,
            statusCode: 500,
            message: error instanceof Error ? error.message : "Something went wrong",
        };
    }
}