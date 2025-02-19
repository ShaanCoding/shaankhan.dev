import { components } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
import PostBare from '@/layouts/PostBare'
import PostLayout from '@/layouts/PostLayout'
import PostSimple from '@/layouts/PostSimple'
import type { Authors, Pages } from 'contentlayer/generated'
import { allAuthors, allPages } from 'contentlayer/generated'
import 'css/prism.css'
import 'katex/dist/katex.css'
import { GetStaticPaths, Metadata } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer'

import { ReportView } from './view'

const defaultLayout = 'PostLayout'
const layouts = {
    PostSimple,
    PostLayout,
    PostBare,
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string[] }
}): Promise<Metadata | undefined> {
    const slug = decodeURI(params.slug.join('/'))
    const post = allPages.find((p) => p.slug === slug)
    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
        const authorResults = allAuthors.find((p) => p.slug === author)
        return coreContent(authorResults as Authors)
    })
    if (!post) {
        return
    }

    const publishedAt = new Date(post.date).toISOString()
    const modifiedAt = new Date(post.lastmod || post.date).toISOString()
    const authors = authorDetails.map((author) => author.name)
    let imageList = [siteMetadata.socialBanner]
    if (post.images) {
        imageList = typeof post.images === 'string' ? [post.images] : post.images
    }
    const ogImages = imageList.map((img) => {
        return {
            url: img.includes('http') ? img : siteMetadata.siteUrl + img,
        }
    })

    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            siteName: siteMetadata.title,
            locale: 'en_US',
            type: 'article',
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            url: './',
            images: ogImages,
            authors: authors.length > 0 ? authors : [siteMetadata.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.summary,
            images: imageList,
        },
    }
}

export const generateStaticParams = async () => {
    const paths = allPages.map((p) => ({ slug: p.slug.split('/') }))

    return paths
}

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//     const pagePaths = allPages.map((page) => ({
//         params: { slug: page._id.replace('pages/', '').replace('.mdx', '').split('/') },
//     }));

//     return { paths: [...pagePaths], fallback: true };
// };

export default async function Page({ params }: { params: { slug: string[] } }) {
    const slug = decodeURI(params.slug.join('/'))
    // Filter out drafts in production
    const sortedCoreContents = allCoreContent(sortPosts(allPages))
    const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
    if (postIndex === -1) {
        return (
            <div className="mt-24 text-center">
                <PageTitle>
                    Under Construction{' '}
                    <span role="img" aria-label="roadwork sign">
                        🚧
                    </span>
                </PageTitle>
            </div>
        )
    }

    const prev = sortedCoreContents[postIndex + 1]
    const next = sortedCoreContents[postIndex - 1]
    const post = allPages.find((p) => p.slug === slug) as Pages
    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
        const authorResults = allAuthors.find((p) => p.slug === author)
        return coreContent(authorResults as Authors)
    })
    const mainContent = coreContent(post)
    const jsonLd = post.structuredData
    jsonLd['author'] = authorDetails.map((author) => {
        return {
            '@type': 'Person',
            name: author.name,
        }
    })

    const Layout = layouts[post.layout || defaultLayout]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ReportView slug={slug} />
            <Layout
                content={mainContent}
                authorDetails={authorDetails}
                toc={post.toc}
                next={next}
                prev={prev}
            >
                <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
            </Layout>
        </>
    )
}
