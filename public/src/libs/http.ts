export const httpGet = (url: string) => {
    return fetch(url, { method: 'GET' })
}