import PageTitle from "@/components/PageTitle";

export default function Home({ posts }) {
    return (
        <div className="divide-y divide-accent-foreground dark:divide-accent">
            <div className="mx-auto bento-md:-mx-[5vw] bento-lg:-mx-[20vw]">

                {/* Temp */}
                <div className="mt-24 text-center">
                    <PageTitle>
                        Under Construction{' '}
                        <span role="img" aria-label="roadwork sign">
                            🚧
                        </span>
                    </PageTitle>
                </div>

            </div>
        </div>
    )
}
