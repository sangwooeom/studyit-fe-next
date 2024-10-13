import { http, HttpResponse } from "msw";

export const handlers = [
    http.get('http://localhost:5000/test', () => {
        return HttpResponse.json({
            message: 'Hello World!'
        })
    })
]