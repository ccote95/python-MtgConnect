import { useEffect, useState } from "react"
import { FetchAllPosts } from "../../postManager.js"

export const AllPosts = () => {
    const [post, setPosts] = useState([])

    useEffect(() => {
        FetchAllPosts().then(setPosts)
    },[])
    return(
        <div>
            hello
        </div>
    )
}