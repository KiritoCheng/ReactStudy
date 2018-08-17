import { httpGet } from "./http";

export const httpBookList = () => {
    return httpGet('/booklist').then((res) => {
        return res.json()
    })
}