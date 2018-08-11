

export const BOOK_RESPONSE = "BOOK_RESPONSE";


export const bookResponse = (success: boolean) => {
    return {
        type: BOOK_RESPONSE,
        success
    }
}