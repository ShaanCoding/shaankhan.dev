'use client'

import DiscordPresence from '@/components/integrations/DiscordPresence'
import SpotifyPresence from '@/components/integrations/SpotifyPresence'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { Skeleton } from '@/components/shadcn/skeleton'
import { Suspense, useRef, useState } from 'react'
import { useLanyard } from 'react-use-lanyard'
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei"
import { Group } from 'three'

interface Project {
    name: string;
    description: string;
    url: string;
    status: string;
    modelUrl?: string;
}

interface ModelProps {
    url: string;
    rotation?: number;
}

// Preload the model
useGLTF.preload('/models/linkscribe.glb')
useGLTF.preload('/models/steamprofiles.glb')

function Model({ url, rotation = 0 }: ModelProps) {
    const { scene } = useGLTF(url)
    const modelRef = useRef<Group>(null)

    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <group ref={modelRef}>
            <primitive object={scene} scale={1.5} />
        </group>
    )
}

const ProjectCard3D = ({ project }: { project: Project }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isModelError, setIsModelError] = useState<boolean>(false);

    return (
        <div className="border border-accent rounded-md bg-muted/30 hover:bg-muted/50 transition-colors duration-200 font-mono"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header */}
            <div className="p-2 flex flex-col border-b border-accent">
                <div className="flex items-center">
                    <span className="text-primary font-semibold truncate">$ cd ~/{project.name}</span>
                </div>
            </div>

            {/* Status Badge */}
            <div className="p-2">
                <span className={`self-start text-xs px-2 py-1 rounded ${project.status.includes('🔋') ? 'bg-green-500/20 text-green-500' :
                    project.status.includes('🚧') ? 'bg-yellow-500/20 text-yellow-500' :
                        'bg-red-500/20 text-red-500'
                    }`}>{project.status}</span>
            </div>

            {/* Description */}
            <div className="p-2 text-sm opacity-80">
                # {project.description}
            </div>

            {/* Model */}
            {project.modelUrl && !isModelError && (
                <div className="h-48 w-full relative">
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <color attach="background" args={["#111"]} />
                        <ambientLight intensity={0.3} />
                        <Suspense fallback={null}>
                            <Center>
                                <Model url={project.modelUrl} />
                            </Center>
                            <Environment preset="night" />
                        </Suspense>
                        <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} enableRotate={isHovered} />
                    </Canvas>

                    {/* Overlay gradient for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
                </div>
            )}

            {/* Open command */}
            <div className="p-2 border-t border-accent flex items-center cursor-pointer">
                <span className="text-muted-foreground mr-2">$</span>
                <Link
                    href={project.url}
                    className="text-primary hover:underline hover:text-primary/80 break-all"
                >
                    open {project.url.replace('https://', '')}
                </Link>
            </div>
        </div>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="border border-accent rounded-md p-4 bg-muted/30 hover:bg-muted/50 transition-colors duration-200 font-mono">
            <div className="flex flex-col gap-2 mb-2">
                <div className="flex items-center">
                    <span className="text-primary font-semibold truncate">$ cd ~/{project.name}</span>
                </div>
                <span className={`self-start text-xs px-2 py-1 rounded ${project.status.includes('🔋') ? 'bg-green-500/20 text-green-500' :
                    project.status.includes('🚧') ? 'bg-yellow-500/20 text-yellow-500' :
                        'bg-red-500/20 text-red-500'
                    }`}>{project.status}</span>
            </div>
            <p className="text-sm mb-3 opacity-80">
                # {project.description}
            </p>

            <div className="flex items-center">
                <span className="text-muted-foreground mr-2">$</span>
                <Link
                    href={project.url}
                    className="text-primary hover:underline hover:text-primary/80 break-all"
                >
                    open {project.url.replace('https://', '')}
                </Link>
            </div>
        </div>
    );
};

export default function Home({ posts }) {
    const lanyard = useLanyard({
        userId: '199662959964848128',
    })

    const [isDiscordLoaded, setDiscordLoaded] = useState(false)
    const [isSpotifyLoaded, setIsSpotifyLoaded] = useState(false)

    const startUps: Project[] = [
        {
            name: 'linkscribe.io',
            description: "To be announced soon",
            url: 'https://linkscribe.io',
            status: '🚧 Under Construction',
            modelUrl: '/models/linkscribe.glb',
        },
        {
            name: 'steamprofiles.design',
            description: "A programmatic way to generate animated steam artworks for your profile",
            url: 'https://steamprofiles.design',
            status: '⛔ Decommissioned & Read Only',
            modelUrl: '/models/steamprofiles.glb',
        },
    ]

    const openSourceProjects: Project[] = [
        {
            name: 'CodeGrind Bot',
            description: 'A simple discord bot to encourage leetcode problem solving',
            url: 'https://github.com/CodeGrind-Team/CodeGrind-Bot',
            status: '🔋 Live',
        },
        {
            name: 'Pomodoro Timer',
            description: 'A simple pomodoro timer to help you stay focused',
            url: 'https://github.com/ShaanCoding/Pomodoro-Timer',
            status: '🔋 Live',
        },
        {
            name: 'tracksplitter.com',
            description: 'A simple track splitter, to help split up mp3 files into multiple tracks using timestamps',
            url: 'https://tracksplitter.com',
            status: '🔋 Live',
        },
        {
            name: 'makeread.me',
            description: "A template-based README generator that allows you to create a README for your project in seconds",
            url: 'https://makeread.me',
            status: '🔋 Live',
        },
        {
            name: 'Sectrics',
            description: "A finite element analysis (FEA) tool for structural analysis",
            url: 'https://github.com/ShaanCoding/Sectrics',
            status: '⛔ No Longer Maintained',
        },
    ]

    return (
        <div className="divide-y divide-accent-foreground dark:divide-accent">
            <div className="mx-auto bento-md:-mx-[4vw] bento-lg:-mx-[16vw]">
                {/* Temp */}
                <div className="mt-24 text-center">
                    <PageTitle>
                        shaankhan.dev
                    </PageTitle>
                </div>

                <div className="w-full flex flex-col mt-4 gap-y-4 items-center justify-center">
                    <p className="my-4 text-center">
                        This site is currently under construction. In the meantime, you can check
                        out my other projects below.
                    </p>

                    <div className="w-full">
                        <h2 className="text-xl font-bold mb-4 font-mono">
                            <span className="text-primary">$</span> ls ./startups
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                            {/* Maths to make last element take up 2 columns */}
                            {/* Only if there are not divisible */}
                            {startUps.map((project, index) => {
                                if (startUps.length % 2 === 1 && index === startUps.length - 1) {
                                    return (
                                        <div className="lg:col-span-2" key={index}>
                                            <ProjectCard3D project={project} />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <ProjectCard3D key={index} project={project} />
                                    )
                                }
                            })}
                        </div>

                        <h2 className="text-xl font-bold mb-4 font-mono">
                            <span className="text-primary">$</span> ls ./open-source
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {openSourceProjects.map((project, index) => {
                                if (openSourceProjects.length % 2 === 1 && index === openSourceProjects.length - 1) {
                                    return (
                                        <div className="lg:col-span-2" key={index}>
                                            <ProjectCard project={project} />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <ProjectCard key={index} project={project} />
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4 font-mono">
                        <span className="text-primary">$</span> whoami --status
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            {lanyard.data && !lanyard.isValidating ? (
                                <DiscordPresence lanyard={lanyard.data} onLoad={() => setDiscordLoaded(true)} />
                            ) : (
                                <Skeleton className="w-full h-48 rounded-lg" />
                            )}
                        </div>
                        <div>
                            {lanyard.data && !lanyard.isValidating ? (
                                <SpotifyPresence
                                    lanyard={lanyard.data}
                                    onLoad={() => setIsSpotifyLoaded(true)}
                                />
                            ) : (
                                <Skeleton className="w-full h-full rounded-3xl z-[1]" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
