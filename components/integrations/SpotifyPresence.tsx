import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { set } from 'react-use-lanyard'

const SpotifyPresence = ({ lanyard, onLoad }) => {
    const setLastPlayed = async () => {
        try {
            await set({
                apiKey: process.env.NEXT_PUBLIC_LANYARD_KV_KEY!,
                userId: '199662959964848128',
                key: 'spotify_last_played',
                value: JSON.stringify(lanyard.data.spotify),
            })
        } catch (error) {
            console.error('Error setting KV pair:', error)
        }
    }

    useEffect(() => {
        if (
            lanyard.data.kv?.spotify_last_played &&
            JSON.parse(lanyard.data.kv.spotify_last_played) !== lanyard.data.spotify &&
            lanyard.data.listening_to_spotify
        ) {
            setLastPlayed()
        }
    }, [
        lanyard.data.spotify,
        lanyard.data.listening_to_spotify,
        lanyard.data.kv?.spotify_last_played,
    ])

    let displayData = lanyard.data.spotify
    if (!displayData && lanyard.data.kv?.spotify_last_played) {
        displayData = JSON.parse(lanyard.data.kv.spotify_last_played)
    }

    useEffect(() => {
        if (displayData && onLoad) {
            onLoad()
        }
    }, [displayData, onLoad])

    // Ensure we have Spotify data before rendering
    if (!displayData) {
        return (
            <div className="relative w-full h-48 rounded-lg border border-border overflow-hidden animate-pulse bg-accent/10 h-full"></div>
        )
    }

    const { song, artist, album, album_art_url, track_id } = displayData

    return (
        <div className="relative w-full rounded-lg border border-border overflow-hidden">
            <div className="bg-tertiary/50 w-full h-16 rounded-t-lg flex-shrink-0" />
            <div className="absolute top-3 left-4">
                <div className="relative">
                    <Image
                        src={album_art_url}
                        alt="Album art"
                        width={64}
                        height={64}
                        className="rounded-md border border-border"
                        unoptimized
                    />
                </div>
            </div>
            <div className="absolute right-3 top-3 z-[1] w-10 h-10 flex items-center justify-center rounded-full bg-green-600">
                <FaSpotify size={24} className="text-white" />
            </div>
            <div className="p-4 pt-8 flex flex-col gap-2">
                <div className="flex flex-col">
                    <div className="mt-8 flex items-center">
                        {lanyard.data.listening_to_spotify ? (
                            <span className="text-sm text-green-400 mb-1">Now playing...</span>
                        ) : (
                            <span className="text-sm text-green-400 mb-1">Last played...</span>
                        )}
                    </div>
                    <div className="text-md font-bold line-clamp-1">
                        {song}
                    </div>
                </div>
                <div className="mt-1 p-3 rounded-lg bg-tertiary/50 leading-snug">
                    <div className="flex flex-col">
                        <div className="text-sm line-clamp-1">
                            <span className="text-muted-foreground">Artist:</span> {artist}
                        </div>
                        <div className="text-sm line-clamp-1">
                            <span className="text-muted-foreground">Album:</span> {album}
                        </div>
                        <a
                            href={`https://open.spotify.com/track/${track_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-xs text-green-400 hover:underline"
                        >
                            Open in Spotify
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpotifyPresence
