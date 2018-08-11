import { httpGet } from "./http";

export const httpBookList = (): Promise<Response> => {
    return httpGet('/booklist').then((res) => {
        return res.json()
    })
}