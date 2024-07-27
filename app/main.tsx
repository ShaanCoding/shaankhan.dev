import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'

export default function Home({ posts }) {
    return (
        <div className="divide-y divide-accent-foreground dark:divide-accent">
            <div className="mx-auto bento-md:-mx-[5vw] bento-lg:-mx-[20vw]">
                {/* Temp */}
                <div className="mt-24 text-center">
                    <PageTitle>
                        Site Under Construction{' '}
                        <span role="img" aria-label="roadwork sign">
                            🚧
                        </span>
                    </PageTitle>
                </div>

                <div className="w-full flex flex-col mt-4 gap-y-4 items-center justify-center">
                    <p className="my-4 max-w-xl text-center">
                        This site is currently under construction. In the meantime, you can check
                        out my other projects below.
                    </p>

                    <div>
                        <Link
                            className="text-primary hover:brightness-125 dark:hover:brightness-125"
                            href={'https://makeread.me'}
                        >
                            makeread.me
                        </Link>
                        <span> - 🔋 Live</span>
                    </div>
                    <div>
                        <Link
                            className="text-primary hover:brightness-125 dark:hover:brightness-125"
                            href={'https://github.com/ShaanCoding/Pomodoro-Timer'}
                        >
                            Pomodoro Timer
                        </Link>
                        <span> - 🔋 Live</span>
                    </div>
                    <div>
                        <Link
                            className="text-primary hover:brightness-125 dark:hover:brightness-125"
                            href={'https://tracksplitter.com'}
                        >
                            tracksplitter.com
                        </Link>
                        <span> - 🚧 Under Construction</span>
                    </div>
                    <div>
                        <Link
                            className="text-primary hover:brightness-125 dark:hover:brightness-125"
                            href={'https://steamprofiles.design'}
                        >
                            steamprofiles.design
                        </Link>
                        <span> - ⛔ Decommissioned & Read Only</span>
                    </div>
                    <div>
                        <Link
                            className="text-primary hover:brightness-125 dark:hover:brightness-125"
                            href={'https://github.com/ShaanCoding/Sectrics'}
                        >
                            Sectrics
                        </Link>
                        <span> - ⛔ No Longer Maintained</span>
                    </div>

                    <p className="my-4 max-w-xl text-center">
                        I'm also contributing to, the following open-source projects:
                    </p>

                    <div>
                        <Link
                            className="text-primary hover:brightness-125 dark:hover:brightness-125"
                            href={'https://github.com/CodeGrind-Team/CodeGrind-Bot'}
                        >
                            CodeGrind Bot
                        </Link>
                        <span> - 🔋 Live</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
