import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaDiscord } from 'react-icons/fa'

const DiscordPresence = ({ lanyard, onLoad }) => {
    // Make sure activities is an array before filtering
    const activities = lanyard?.data?.activities || []
    const mainActivity = activities.filter(
        (activity) => activity.type === 0 && activity.assets
    )[0]

    const hasMainActivity = !!mainActivity

    const [elapsedTime, setElapsedTime] = useState<string>(
        mainActivity && mainActivity.timestamps && mainActivity.timestamps.start
            ? getElapsedTime(mainActivity.timestamps.start)
            : ''
    )

    useEffect(() => {
        if (mainActivity && mainActivity.timestamps && mainActivity.timestamps.start) {
            const interval = setInterval(() => {
                setElapsedTime(getElapsedTime(mainActivity.timestamps.start))
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [mainActivity, mainActivity?.timestamps?.start])

    useEffect(() => {
        if (hasMainActivity && onLoad) {
            onLoad()
        }
    }, [hasMainActivity, onLoad])

    // Ensure we have user data before rendering
    if (!lanyard?.data?.discord_user) {
        return (
            <div className="relative w-full h-48 rounded-lg border border-border overflow-hidden animate-pulse bg-accent/10"></div>
        )
    }

    return (
        <div className="relative w-full rounded-lg border border-border overflow-hidden h-full">
            <div className="bg-tertiary/50 w-full h-16 rounded-t-lg flex-shrink-0" />
            <div className="absolute top-3 left-4">
                <div className="relative">
                    <Image
                        className="rounded-full w-16 h-16 border-2 border-background"
                        src={`https://api.lanyard.rest/${lanyard.data.discord_user.id}.png`}
                        alt="Discord Avatar"
                        width={64}
                        height={64}
                        unoptimized
                    />
                    {lanyard.data.discord_status === 'online' && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 flex items-center justify-center rounded-full bg-green-500 border-2 border-background" />
                    )}
                    {lanyard.data.discord_status === 'idle' && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-yellow-500 border-2 border-background" />
                    )}
                    {lanyard.data.discord_status === 'dnd' && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-red-500 border-2 border-background" />
                    )}
                    {lanyard.data.discord_status === 'offline' && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-gray-500 border-2 border-background" />
                    )}
                </div>
            </div>
            <div className="absolute right-3 top-3 z-[1] w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600">
                <FaDiscord size={24} className="text-white" />
            </div>
            <div className="p-4 pt-8 flex flex-col gap-2">
                <div className="flex flex-col">
                    <div className="text-sm font-medium">{lanyard.data.discord_user.display_name || lanyard.data.discord_user.username}</div>
                    <div className="text-xs text-muted-foreground">
                        @{lanyard.data.discord_user.username}
                    </div>
                </div>
                <div className="mt-2 p-3 rounded-lg bg-tertiary/50 leading-snug">
                    {hasMainActivity ? (
                        <div className="flex gap-3">
                            <div className="relative flex-shrink-0">
                                {mainActivity.assets && mainActivity.assets.large_image && mainActivity.application_id && (
                                    <Image
                                        src={`https://cdn.discordapp.com/app-assets/${mainActivity.application_id}/${mainActivity.assets.large_image}.png`}
                                        alt="Discord Activity"
                                        width={48}
                                        height={48}
                                        className="rounded-md"
                                        unoptimized
                                    />
                                )}
                                {mainActivity.assets && mainActivity.assets.small_image && mainActivity.application_id && (
                                    <Image
                                        src={`https://cdn.discordapp.com/app-assets/${mainActivity.application_id}/${mainActivity.assets.small_image}.png`}
                                        alt="Activity Icon"
                                        width={16}
                                        height={16}
                                        className="absolute -bottom-1 -right-1 rounded-full border border-background"
                                        unoptimized
                                    />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm font-medium line-clamp-1">
                                    {mainActivity.name}
                                </div>
                                {mainActivity.details && (
                                    <div className="text-xs text-muted-foreground line-clamp-1">
                                        {mainActivity.details}
                                    </div>
                                )}
                                {mainActivity.state && (
                                    <div className="text-xs text-muted-foreground line-clamp-1">
                                        {mainActivity.state}
                                    </div>
                                )}
                                {elapsedTime && (
                                    <div className="text-xs text-muted-foreground mt-1">
                                        {elapsedTime}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center text-sm text-muted-foreground py-2">
                            Not currently active
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function getElapsedTime(unixTimestamp: number): string {
    const createdAt = new Date(unixTimestamp)
    const now = new Date()
    let difference = now.getTime() - createdAt.getTime()

    const hours = Math.floor(difference / (1000 * 60 * 60))
    difference -= hours * (1000 * 60 * 60)

    const minutes = Math.floor(difference / (1000 * 60))
    difference -= minutes * (1000 * 60)

    const seconds = Math.floor(difference / 1000)

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')} elapsed`
}

export default DiscordPresence
