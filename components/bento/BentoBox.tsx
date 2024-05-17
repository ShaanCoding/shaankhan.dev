'use client'

import { lgLayout, mdLayout, smLayout } from '@/scripts/utils/bento-layouts'
import React, { useEffect, useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { useLanyard } from 'react-use-lanyard'

import Image from '../Image'
import { Skeleton } from '../shadcn/skeleton'
import DiscordPresence from './DiscordPresence'
import ExternalLink from './ExternalLink'
import GithubCalendar from './GithubCalendar'
import SpotifyPresence from './SpotifyPresence'

const ResponsiveGridLayout = WidthProvider(Responsive, { measureBeforeMount: true })

const BentoBox = ({ posts }) => {
    const lanyard = useLanyard({
        userId: '199662959964848128',
    })

    const [rowHeight, setRowHeight] = useState(280)

    const [isDiscordLoaded, setDiscordLoaded] = useState(false)
    const [isSpotifyLoaded, setIsSpotifyLoaded] = useState(false)

    const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleWidthChange = (width) => {
        if (width <= 500) {
            // LOL
            const container = document.querySelector('.react-grid-layout')
            if (container) {
                const containerWidth = container.clientWidth
                const rowHeight = containerWidth / 2 - 32
                setRowHeight(rowHeight)
            }
        } else if (width <= 1100) {
            setRowHeight(180)
        } else {
            setRowHeight(280)
        }
    }

    const handleDragStart = (element) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        document.querySelectorAll('.react-grid-item').forEach((item) => {
            ; (item as HTMLElement).style.zIndex = '1'
        })

        element.style.zIndex = '10'
    }

    const handleDragStop = (element) => {
        timeoutRef.current = setTimeout(() => {
            element.style.zIndex = '1'
        }, 500)
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <ResponsiveGridLayout
            className="mx-auto max-w-[375px] bento-md:max-w-[800px] bento-lg:max-w-[1200px]"
            layouts={{ lg: lgLayout, md: mdLayout, sm: smLayout }}
            // I don't know why but if I don't subtract 1 everything shits itself
            breakpoints={{ lg: 1199, md: 799, sm: 374 }}
            cols={{ lg: 4, md: 4, sm: 2 }}
            rowHeight={rowHeight}
            isDraggable={false}
            isResizable={false}
            onWidthChange={handleWidthChange}
            isBounded
            margin={[16, 16]}
            // useCSSTransforms={false}
            onDragStart={(layout, oldItem, newItem, placeholder, e, element) =>
                handleDragStart(element)
            }
            onDragStop={(layout, oldItem, newItem, placeholder, e, element) =>
                handleDragStop(element)
            }
        >
            <div key="intro" className="aspect-square">
                <Image
                    src="/static/images/bento/bento-intro-silhouette.svg"
                    alt="Bento Intro Silhouette"
                    fill
                    className={`hidden bento-md:block rounded-3xl object-cover transition-opacity duration-300`}
                    skeletonClassName="rounded-3xl"
                    noRelative
                    unoptimized
                    priority
                />
                <Image
                    src="/static/images/bento/bento-intro.svg"
                    alt="Bento Intro"
                    fill
                    className={`hidden bento-md:block rounded-3xl object-cover transition-opacity duration-300`}
                    skeletonClassName="rounded-3xl"
                    noRelative
                    unoptimized
                    priority
                />
                <Image
                    src="/static/images/bento/bento-intro-square-silhouette.svg"
                    alt="Bento Intro Silhouette"
                    fill
                    className={`block bento-md:hidden rounded-3xl object-cover transition-opacity duration-300`}
                    skeletonClassName="rounded-3xl"
                    noRelative
                    unoptimized
                    priority
                />
                <Image
                    src="/static/images/bento/bento-intro-square.svg"
                    alt="Bento Intro"
                    fill
                    className={`block bento-md:hidden rounded-3xl object-cover transition-opacity duration-300`}
                    skeletonClassName="rounded-3xl"
                    noRelative
                    unoptimized
                    priority
                />
            </div>
            <div key="github" className="group">
                <div className="relative flex h-full w-full items-center justify-center rounded-lg">
                    <FaGithub className="absolute z-[1] text-primary w-1/2 h-1/2 bento-md:w-24 bento-md:h-24" />
                    <ExternalLink href="https://github.com/ShaanCoding" />
                </div>
            </div>
            <div key="image-1">
                <Image
                    src="/static/images/bento/bento-image-1.svg"
                    alt="Bento Box 1"
                    fill
                    noRelative
                    className="rounded-3xl object-cover"
                    skeletonClassName="rounded-3xl"
                    unoptimized
                    priority
                />
            </div>
            <div key="discord">
                {lanyard.data && !lanyard.isValidating ? (
                    <DiscordPresence lanyard={lanyard.data} onLoad={() => setDiscordLoaded(true)} />
                ) : (
                    <Skeleton className="w-full h-full rounded-3xl" />
                )}
            </div>
            <div key="latest-post" className="group">
                <Image
                    src={posts[0].images[0]}
                    alt={posts[0].title}
                    width={0}
                    height={0}
                    className="m-2 w-[80%] rounded-2xl border border-border"
                    skeletonClassName="rounded-3xl"
                    noRelative
                    unoptimized
                />
                <ExternalLink href={posts[0].path} newTab={false} />
            </div>
            <div key="image-2">
                <Image
                    src="/static/images/bento/bento-image-2.svg"
                    alt="Bento Box 2"
                    fill
                    className="rounded-3xl object-cover"
                    skeletonClassName="rounded-3xl"
                    noRelative
                    unoptimized
                    priority
                />
            </div>
            <div
                key="about-ctfs"
                className="group bg-[url('/static/images/bento/bento-about-ctfs-bg.svg')] bg-cover bg-center">
            </div>
            <div key="twitter" className="group">
                <div className="relative flex h-full w-full items-center justify-center rounded-lg">
                    <FaTwitter className="absolute z-[1] text-primary w-1/2 h-1/2 bento-md:w-24 bento-md:h-24" />
                    <ExternalLink href="https://twitter.com/ShaanCoding" />
                </div>
            </div>
            <div key="spotify" className="group">
                {lanyard.data && !lanyard.isValidating ? (
                    <SpotifyPresence
                        lanyard={lanyard.data}
                        onLoad={() => setIsSpotifyLoaded(true)}
                    />
                ) : (
                    <Skeleton className="w-full h-full rounded-3xl z-[1]" />
                )}
            </div>
            <div key="tech">
                <Image
                    src="/static/images/bento/bento-technologies.svg"
                    alt="Bento Technologies"
                    fill
                    className="rounded-3xl object-cover"
                    skeletonClassName="rounded-3xl"
                    noRelative
                    unoptimized
                />
            </div>
            <div
                key="contributions"
                className="group flex items-center justify-center"
            >
                <GithubCalendar
                    username="shaancoding"
                    hideColorLegend
                    hideTotalCount
                    blockMargin={6}
                    blockSize={20}
                    blockRadius={7}
                />
            </div>
        </ResponsiveGridLayout>
    )
}

export default BentoBox
