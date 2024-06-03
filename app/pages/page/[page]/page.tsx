import ListLayout from '@/layouts/ListLayout'
import { allPages } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
    const totalPages = Math.ceil(allPages.length / POSTS_PER_PAGE)
    const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

    return paths
}

export default function Page({ params }: { params: { page: string } }) {
    const posts = allCoreContent(sortPosts(allPages))
    const pageNumber = parseInt(params.page as string)
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
