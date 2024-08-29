import { useEffect, useState } from "react"
import { FetchAllPosts } from "../../postManager.js"
import { PostList } from "../Cards/PostList.jsx"

export const AllPosts = () => {
    const [post, setPosts] = useState([])

    useEffect(() => {
        FetchAllPosts().then(setPosts)
    },[])
    return(
        <div>
            <PostList content={post} />
        </div>
    )
}