let apiUrl = "http://localhost:8000/posts";
let token = `Token ${JSON.parse(localStorage.getItem("mtg_token")).token}`


export const FetchAllPosts = async () => {
    const response = await fetch(apiUrl, {
        headers: {
            Authorization: token
        }
    })
    const posts = await response.json()
    return posts
}