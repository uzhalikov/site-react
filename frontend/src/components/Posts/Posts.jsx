import styles from './Posts.module.css'
import { PostPreview } from '../PostPreview/PostPreview'
import { useLoaderData, Outlet } from 'react-router-dom'

export function Posts(){
    const posts = useLoaderData()
    return (
        <>
            <div className={styles.posts}>
                {posts && <div className={styles.posts}>{posts.map(post => <PostPreview key={post.id} post={post}/>)}</div>}
            </div>
            <Outlet/>
        </>
    )
}
