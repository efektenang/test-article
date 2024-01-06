export const getArticle = async (page) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles?search&page=${page}&page_size=5`)
    const result = await response.json()
    return result
}