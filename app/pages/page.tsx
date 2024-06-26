import ListLayout from '@/layouts/ListLayout'
import { genPageMetadata } from 'app/seo'
import { allPages } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

const POSTS_PER_PAGE = 100

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
    const posts = allCoreContent(sortPosts(allPages.filter((p) => !p.hidden)))
    const pageNumber = 1
    const initialDisplayPosts = posts.slice(
        POSTS_PER_PAGE * (pageNumber - 1),
        POSTS_PER_PAGE * pageNumber
    )
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    }

    return (
        <ListLayout
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            posts={posts as any}
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            initialDisplayPosts={initialDisplayPosts as any}
            pagination={pagination}
            title="All Posts"
        />
    )
}
