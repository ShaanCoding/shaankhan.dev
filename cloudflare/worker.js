/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const internalHostname = 'https://blog.shaankhan.dev'
const externalHostname = 'https://shaankhan.dev'

const redirectMap = new Map([
    ['/sprint-0/', '/blog/developers-playbook-for-sprint-zero-2023'],
    [
        '/ultimate-guide-to-uts-undergraduate-it-degrees/',
        '/blog/ultimate-guide-to-uts-undergraduate-it-degrees',
    ],
    ['/the-last-bug/', '/blog/the-final-bug-2023'],
    [
        '/navigating-asynchronous-code-with-javascript-promises/',
        '/blog/navigating-asynchronous-code-with-javascript-promises-2023',
    ],
    ['/ode-to-the-jira-board-developer/', '/blog/ode-to-the-jira-board-developer-2022'],
    [
        '/sleep-sleep-apnea-and-software-engineering/',
        '/blog/sleep-sleep-apnea-and-software-engineering-2022',
    ],
    [
        '/choose-your-side-projects-wisely-the-importance-of-high-impact-useful-projects-in-your-resume/',
        '/blog/choose-your-side-projects-wisely-the-importance-of-high-impact-useful-projects-in-your-resume-2022',
    ],
    ['/youtube-album-splitter/', '/blog/deploying-youtube-album-splitter-2022'],
    [
        '/how-to-maximize-your-time-at/',
        '/blog/how-to-maximize-your-time-at-university-to-break-into-tech-2022',
    ],
    ['/wfh-ergonomics/', '/blog/working-from-home-and-ergonomics'],
    [
        '/how-uts-progsoc-hosted-the-2022-uts-programming-competition-with-wisetech-global/',
        '/blog/how-uts-progsoc-hosted-the-2022-uts-programming-competition-with-wisetech-global',
    ],
    ['/syncshack2021/', '/blog/syncs-hackathon-2021'],
    [
        '/exploring-quake-3s-fast-inverse-square-root/',
        '/blog/exploring-quake-3s-fast-inverse-square-root',
    ],
    [
        '/nsw-police-force-cybercrime-think-tank/',
        '/blog/nsw-police-force-cybercrime-think-tank-2021',
    ],
    ['/bsides-cybersecurity-conference/', '/blog/bsides-cybersecurity-conference-2021'],
    ['/founding-the-uts-cloud-society/', '/blog/founding-the-uts-cloud-society-2020'],
    [
        '/implementing-wave-function-collapse-binary-space-partitioning-for-procedural-dungeon-generation/',
        '/blog/wfc-and-bsp-for-procedural-dungeons-2021',
    ],
    ['/uts-progsoc-2020-agm/', '/blog/uts-progsoc-2020-agm'],
    ['/trunk-based-development-vs-git-flow/', '/blog/trunk-based-development-vs-gitflow'],
    ['/uts-progsoc-progcomp-2020/', '/blog/uts-progsoc-progcomp-2020'],
    ['/uts-techsoc-big-project-2020/', '/blog/uts-techsoc-big-project-2020'],
    ['/google-kickstart-2020-round-f/', '/blog/google-kickstart-2020-round-f'],
    ['/downunderctf-2020-captcha-the-flag/', '/blog/down-under-ctf-2020'],
    ['/syncs-hackathon-2020-harmonics/', '/blog/syncs-hackathon-2020'],
    ['/how-identicons-work/', '/blog/identicon-generator'],
    ['/coding-a-boolean-algebra-expression-solver/', '/blog/boolean-algebra-expression-solver'],
    ['/how-i-went-from-0-to-50-github-followers-in-under-a-week/', '/blog/zero-to-fifty-github'],
    [
        '/my-introduction-to-csharp-or-how-i-had-to-build-a-gui-game-as-my-hello-world/',
        '/blog/mastermind-game',
    ],
    ['/csgo-neural-network-aimbot/', '/blog/csgo-neural-network-aimbot'],
    ['/gumtree-sniper-bot/', '/blog/gumtree-sniper-bot'],
    ['/commercial-development/', '/projects'],
    ['/closed-source-development/', '/projects'],
    ['/open-source-development/', '/projects'],
])

async function handleRequest(request) {
    const requestURL = new URL(request.url)
    const path = requestURL.pathname
    const location = redirectMap.get(path)

    if (location) {
        const redirectURL = externalHostname + location
        return Response.redirect(redirectURL, 301)
    }
    // If request not in map, return the new site
    return Response.redirect(externalHostname, 301)
}

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request))
})
