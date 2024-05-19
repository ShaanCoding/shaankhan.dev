const commercialProjects = [
    {
        "title": "steamprofiles.design",
        "tags": ["Web Development", "Startup / SaaS"],
        "description": "No longer publicly accessible, after failing product-market fit. This application was built to help Steam users create beautiful and unique profiles, with a focus on customization and user experience. It was designed to be a one-stop solution for all Steam profile needs, offering a wide range of features and tools to enhance user profiles. The project was developed using React, Next.js, and Firebase, and was monetized through a pay-per-order model. The application was shut down due to a lack of user engagement and interest.",
        "imgSrc": "/static/projects/images/steamprofiles.png",  // Placeholder path, please replace it with the actual if available.
        "href": ""
    }
]

const contributedProjects = [
    {
        "title": "CodeGrind Bot",
        "tags": [ "Discord Bot", "Python", "MongoDB"],
        "description": "A Discord bot for LeetCode enthusiasts, built with discord.py. It tracks coding stats for daily, weekly, and all-time periods using the LeetCode API. Open-source and community-driven, it promotes friendly competition and continuous skill progression.",
        "imgSrc": "/static/projects/images/codegrind-bot.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    }
]


const closedSourceProjects = [
    {
        "title": "Youtube Album Splitter",
        "tags": ["Web Development", "FFmpeg"],
        "description": "This uses FFmpeg to divide lengthy music playlists on YouTube, turning them into separate .mp3 files for convenience and easy access.",
        "imgSrc": "/static/projects/images/youtube-album-splitter.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "ElytraFlight",
        "tags": ["Archived", "Minecraft", "Modding"],
        "description": "This quality-of-life Minecraft mod eases gameplay by automatically switching between your elytra and chestplate when you double-jump or equip fireworks.",
        "imgSrc": "/static/projects/images/elytraflight.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "WFC Minecraft",
        "tags": ["Archived", "Minecraft", "Algorithm"],
        "description": "This integration of wave function collapse algorithm into Minecraft helps in algorithmically producing new and adaptable structures within the game.",
        "imgSrc": "/static/projects/images/wfc-minecraft.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "CSGO NZT",
        "tags": ["Archived", "CSGO", "Cybersecurity"],
        "description": "A proof-of-concept CSGO multi-hack using C++ and uncommon read-process-memory & write-process-memory detection vectors. Done in part of a cybersecurity research and audit paper.",
        "imgSrc": "/static/projects/images/csgo-nzt.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Automated Instagram Meme Scheduler",
        "tags": ["Archived", "Instagram", "Automation"],
        "description": "This Instagram bot automatically sources memes from popular subreddits for meme pages, with the added feature of planning posts and engagement activities.",
        "imgSrc": "/static/projects/images/instagram-meme-scheduler.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Gumtree Car Deals Sniping Tool",
        "tags": ["Archived", "Gumtree", "Automation", "Neural Networks"],
        "description": "This platform is designed as an efficient sniper bot that sifts through every post on Gumtree Cars in search of 'too good to be true' car deals that are typically gone quickly, eliminating the need to manually filter out spam posts or damaged cars. Using a combination of neural networks and searches, it set parameters and analyzes reasons for unusually low pricing, making the hunt for great car deals seamless and effective.",
        "imgSrc": "/static/projects/images/gumtree-car-sniper.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "CSGO Neural Network Aimbot",
        "tags": ["Archived", "CSGO", "AI", "Neural Networks"],
        "description": "This project is a Counter-Strike: Global Offensive (CSGO) aimbot, developed with a neural network utilizing the Intel Neural Compute Stick 2.0 and enhanced with OpenCV & OpenVINO.",
        "imgSrc": "/static/projects/images/csgo-neural-aimbot.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    }
]

const openSourceProjects = [
    {
        "title": "ReadME Generator",
        "tags": ["Web Development", "JavaScript"],
        "description": "An innovative ReadME Generator designed to jumpstart your projects with ease and efficiency!",
        "imgSrc": "/static/projects/images/readme-generator.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "IoT Bay",
        "tags": ["Web Development", "E-commerce", "IoT"],
        "description": "IoT Bay operates as a dedicated online store, providing a vast variety of IoT (Internet of Things) devices and solutions across sectors like smart homes, healthcare, agriculture, and industry automation. Our aim is to create a seamless shopping experience for IoT aficionados, corporations, and individual consumers by delivering a user-friendly, feature-packed digital marketplace.",
        "imgSrc": "/static/projects/images/iot-bay.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "UTS FEIT Bot",
        "tags": ["Web Development", "Discord Bot"],
        "description": "A dedicated Discord bot offering subject outlines and other useful resources to the UTS student community, catering to over 5,000 students.",
        "imgSrc": "/static/projects/images/uts-feit-bot.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Foodstagram",
        "tags": ["Web Development", "Mobile App", "Social Media"],
        "description": "Foodstagram is a unique app that mirrors the functionalities of Instagram but centers around food. It enables the sharing of photos and videos of meals, exploring food from global users, searching specific dishes, and discovering nearby restaurants and cafes. Ideal for food enthusiasts or anyone seeking a novel way to share culinary experiences with others.",
        "imgSrc": "/static/projects/images/foodstagram.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Start Page",
        "tags": ["Web Development"],
        "description": "A straightforward, user-friendly start page developed for my web browser.",
        "imgSrc": "/static/projects/images/start-page.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "ExoGif",
        "tags": ["Software Development", "C#"],
        "description": "ExoGif, a straightforward screen-recording application developed in C#, incorporates AnimatedGIF and the WindowsCodeAPI-Shell & Core libraries. Conceived as an alternative to Gyazo, this software stores recordings exclusively on local storage.",
        "imgSrc": "/static/projects/images/exogif.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Pomodoro Timer",
        "tags": ["Software Development", "C#", "WPF"],
        "description": "Developed as a study-aid tool, this simplistic yet efficient Pomodoro timer is built on C# and WPF.",
        "imgSrc": "/static/projects/images/pomodoro-timer.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Vocal",
        "tags": ["Software Development", "C#", "FFmpeg"],
        "description": "A compact, yet sophisticated Youtube music streaming bot, honed in C# and enhanced with FFmpeg. Vocal delves into complex image manipulation, advanced OAuth 2.0 API calls, multi-threading and memory management.",
        "imgSrc": "/static/projects/images/vocal.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Windrose MC",
        "tags": ["Archived", "Web Development", "Minecraft"],
        "description": "The frontend website developed specifically for a Minecraft server.",
        "imgSrc": "/static/projects/images/windrose-mc.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "C Banking Application with Encryption",
        "tags": ["Archived", "Software Development", "C", "Encryption"],
        "description": "This banking application, written in C, integrates encryption and compression features using self-developed Huffman and RSA encryption methods.",
        "imgSrc": "/static/projects/images/c-banking.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "XKCDownloader",
        "tags": ["Archived", "Software Development", "C#"],
        "description": "A fully automated XKCD comic downloader, designed in C# through WPF.",
        "imgSrc": "/static/projects/images/xkcd-downloader.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "4SChan",
        "tags": ["Archived", "Software Development", "C#"],
        "description": "A convenient 4chan thread image downloader, developed in C# using NewtonSoft, WindowsCodeAPI-Shell and Core. It's designed for mass downloading of image threads from 4chan, perfect for collating desktop wallpaper dumps.",
        "imgSrc": "/static/projects/images/4s-chan.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Shaan Coding Website",
        "tags": ["Archived", "Web Development"],
        "description": "This is my personal website, created and archived in 2019.",
        "imgSrc": "/static/projects/images/shaan-coding-website.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "SkyCiv Hackathon",
        "tags": ["Archived", "Software Development", "Java", "OCR"],
        "description": "This OCR tool developed for the SkyCiv-Hackathon-2021 enables students to scan bridge structures, which are then automatically imported into SkyCiv via its API. Winner of the 2021 SkyCiv Structural Engineering API Hackathon 2021.",
        "imgSrc": "/static/projects/images/skyciv-hackathon.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Summarized",
        "tags": ["Archived", "Software Development", "Java"],
        "description": "Save time and optimize work-life balance with Summarized, a tool designed to streamline your video recordings into easily digestible study aids. This application extracts the essence from your uploaded lecture videos, generating concise notes, keyword lists, and ANKI-style flashcards for efficient study sessions.",
        "imgSrc": "/static/projects/images/summarized.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "React Devon Crawford Website",
        "tags": ["Archived", "Web Development", "React"],
        "description": "A website developed using React.js, designed and delivered paying homage to the digital style of Devon Crawford.",
        "imgSrc": "/static/projects/images/react-devon-crawford.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "React Oculi",
        "tags": ["Archived", "Web Development", "React"],
        "description": "A speed programming challenge of a Dribble UI/UX design, developed using React.js.",
        "imgSrc": "/static/projects/images/react-oculi.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Cryptocurrency Price Tracker",
        "tags": ["Archived", "Web Development", "React"],
        "description": "An efficient cryptocurrency price tracker developed using React, designed for immediate updates on cryptocurrency values.",
        "imgSrc": "/static/projects/images/cryptocurrency-price-tracker.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "React Diary",
        "tags": ["Archived", "Web Development", "React"],
        "description": "A digital diary application, developed using React, to document daily thoughts and experiences.",
        "imgSrc": "/static/projects/images/react-diary.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Expense Tracker",
        "tags": ["Archived", "Web Development", "React", "TypeScript"],
        "description": "A user-friendly expense tracker developed with TypeScript in the React framework.",
        "imgSrc": "/static/projects/images/expense-tracker.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "TypeD",
        "tags": ["Archived", "Web Development", "React"],
        "description": "A dynamic typing game engineered using React, designed to offer an engaging and interactive user experience.",
        "imgSrc": "/static/projects/images/typed.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Managr",
        "tags": ["Archived", "Web Development", "React"],
        "description": "A task management application developed using the React framework, offering an organized approach to handle your to-do lists.",
        "imgSrc": "/static/projects/images/managr.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "MemorY",
        "tags": ["Archived", "Web Development", "React"],
        "description": "MemorY is a user-friendly flashcard application, developed using React and TypeScript to offer a straightforward method for reinforcing memory of certain concepts or topics.",
        "imgSrc": "/static/projects/images/memory.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Muust",
        "tags": ["Archived", "Web Development", "React", "TypeScript"],
        "description": "A straightforward to-do list application, developed using TypeScript.",
        "imgSrc": "/static/projects/images/muust.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "TestimonialJS",
        "tags": ["Archived", "Web Development", "JavaScript"],
        "description": "TestimonialJS is a dynamic JavaScript-based testimonial viewer, allowing easy and interactive display of feedback and reviews.",
        "imgSrc": "/static/projects/images/testimonial-js.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "JS Quiz",
        "tags": ["Archived", "Web Development", "JavaScript"],
        "description": "A compact quiz program developed in JavaScript, designed for lightweight and smooth performance.",
        "imgSrc": "/static/projects/images/js-quiz.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Tarot Birth",
        "tags": ["Archived", "Web Development", "JavaScript"],
        "description": "A straightforward tarot birth card calculator, developed using JavaScript for easy and accurate calculations.",
        "imgSrc": "/static/projects/images/tarot-birth.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Harmonics",
        "tags": ["Archived", "Web Development", "JavaScript"],
        "description": "Harmonics is a cutting-edge networking tool for musicians, artists, and producers, functioning much like Tinder with its swipe-left/right mechanics that facilitate making connections effortlessly.",
        "imgSrc": "/static/projects/images/harmonics.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "CombinePDF",
        "tags": ["Archived", "Software Development", "Java", "PDF"],
        "description": "The CombinePDF is a Java-based, minimalistic tool that efficiently merges PDF files, developed using the MVC architecture in JavaFX.",
        "imgSrc": "/static/projects/images/combine-pdf.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Sudoku",
        "tags": ["Archived", "Software Development", "Java"],
        "description": "This is a version of the classic Sudoku game, designed using Java and the Model-View-Controller (MVC) architectural pattern.",
        "imgSrc": "/static/projects/images/sudoku.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Tic Tac Toe",
        "tags": ["Archived", "Software Development", "Java"],
        "description": "A classic two-player tic-tac-toe game designed for user-friendly and engaging gameplay.",
        "imgSrc": "/static/projects/images/tic-tac-toe.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Library System",
        "tags": ["Archived", "Software Development", "Java"],
        "description": "An all-inclusive library management system developed in Java following the MVC architectural pattern. Designed as a practical tool to deepen my knowledge of Java and MVC principles, this real-time system allows for concurrent window operation and instant updates. Enhanced with numerous user-friendly features, it lets librarians efficiently manage, sort, and track their book inventory.",
        "imgSrc": "/static/projects/images/library-system.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Terrain Generation",
        "tags": ["Archived", "Software Development", "Java"],
        "description": "A Java-based infinite procedural map generator created with the Processing 3+ framework. This project served as a practical exploration of Perlin Noise application and an introduction to map generation techniques.",
        "imgSrc": "/static/projects/images/terrain-generation.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Markkd",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "A basic WAM calculator developed in C# utilizing WPF and the MVVM design pattern. The project was initiated to gain a deeper understanding of the MVVM architectural model, alongside the implementation of INotifyPropertyChanged and ICommand interfaces.",
        "imgSrc": "/static/projects/images/markkd.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "A Star Pathfinding",
        "tags": ["Archived", "Software Development", "C#"],
        "description": "This tool, written in C#, showcases the A-Star pathfinding algorithm in action, providing helpful visualization of the process.",
        "imgSrc": "/static/projects/images/a-star-pathfinding.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Mandelbrot Fractals",
        "tags": ["Archived", "Software Development", "C#"],
        "description": "A straightforward Mandelbrot fractal generator made in C#, utilizing WindowsCodeAPI-Shell and Core libraries. Developed with a focus on deep diving into recursive functions involving complex numbers and portraying the emergence of natural patterns.",
        "imgSrc": "/static/projects/images/mandelbrot-fractals.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Tekh",
        "tags": ["Archived", "Software Development", "Discord Bot", "C#"],
        "description": "A versatile discord bot developed exclusively for the UTS FEIT discord server.",
        "imgSrc": "/static/projects/images/tekh.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Identicons",
        "tags": ["Archived", "Software Development", "C#"],
        "description": "A fundamental identicon generator application built in C# employing the WindowsCodeAPI-Shell and Core libraries. Crafted as part of a coding exploration into cryptography, more specifically visualizing hashed and salted strings.",
        "imgSrc": "/static/projects/images/identicons.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "BMI Calculator",
        "tags": ["Archived", "Software Development", "Java", "Android"],
        "description": "A practical BMI calculator designed as a medium to enhance my proficiency in utilizing Java with Android. It allows for quick and accurate Body Mass Index computations.",
        "imgSrc": "/static/projects/images/bmi-calculator.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Mathletics Live Bot",
        "tags": ["Archived", "Software Development", "Python"],
        "description": "A playful Python-built Mathletics Live Bot, enhanced with Selenium, which can autonomously navigate through level 4 mathletics. Beyond level 4, its capacity to handle complex problems is limited. The bot served as a tool for advancing Python skills and was inspired by an inside joke among friends.",
        "imgSrc": "/static/projects/images/mathletics-live-bot.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Cloudly",
        "tags": ["Archived", "Software Development", "Java"],
        "description": "A lightweight Java-built weather application designed as a means to delve deeper into Java's GUI capabilities. The app also showcases my experimentation with open tokenless APIs and various data collection instruments.",
        "imgSrc": "/static/projects/images/cloudly.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Linear Algebra Library",
        "tags": ["Archived", "Software Development", "Java"],
        "description": "This is a comprehensive library designed to deal with common Linear Algebra computations and operations, built to help me get familiarised with the Java programming language, for Programming 1.",
        "imgSrc": "/static/projects/images/linear-algebra-library.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Memely",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "A personalized meme generator built in WPF, harnessing image manipulation techniques for effective and watermark-free meme creation. Primarily serving as a skill development tool in image manipulation and a swift, offline solution for meme generation.",
        "imgSrc": "/static/projects/images/memely.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "SpammD",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "An innovative chat spammer application, SpammD, developed using WPF. Not only does it allow for seamless operation of graphic functions across multiple threads, but it also presents a refined model for chat spamming applications.",
        "imgSrc": "/static/projects/images/spammd.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "superChat",
        "tags": ["Archived", "Software Development", "C#"],
        "description": "A straightforward P2P LAN communication application that allows users to join a specific IP and exchange messages via a compact and non-demanding chat interface. The application requires no additional libraries to operate enabling seamless communication.",
        "imgSrc": "/static/projects/images/superchat.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Scientific Calculator",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "A lightweight scientific calculator developed in C# applying WPF, aimed to function as an easy-to-use calculating tool. It incorporates reverse polish notation and the shunting yard algorithm. Serving as an advanced version of the Boolean expression solver, it employs the same core logic.",
        "imgSrc": "/static/projects/images/scientific-calculator.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "reCON",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "Designed for developers, reCON is an automated application that simplifies the process of bulk-editing colors for icons and user interface elements. It eliminates the monotonous task of individually editing each image, enabling users to modify all images in a folder with a single color specification at the click of a button.",
        "imgSrc": "/static/projects/images/recon.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "ImageToASCII",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "A straightforward Image-to-ASCII art converter, developed in C# with WPF to enhance skills in image manipulation. This program transforms standard images into unique ASCII artwork.",
        "imgSrc": "/static/projects/images/image-to-ascii.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "IconDrive",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "A handy, custom USB icon installer, developed in C# applying the WPF framework. It assists users with customizing USB icons while also serving as an avenue to refine my skills in WPF, with an emphasis on stylizing.",
        "imgSrc": "/static/projects/images/icon-drive.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Boolean Algebra Expression Solver",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "An intuitive Boolean algebra expression solver crafted in C# with WPF framework, designed to hone my skills in WPF and familiarise with the shunting yard algorithm and reverse polish notation. This utility accepts a Boolean expression and delivers the appropriate truth table.",
        "imgSrc": "/static/projects/images/boolean-algebra-solver.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Frequence",
        "tags": ["Archived", "Software Development", "C#", "WPF"],
        "description": "Frequence is a user-friendly ambience sound generator, designed with C# using WPF. With the objective of facilitating focused study, it creates white noise in the background. While this app is a personal clone of Noisli for offline use, it's also available for public use.",
        "imgSrc": "/static/projects/images/frequence.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Sectrics",
        "tags": ["Archived", "Software Development", "Java"],
        "description": "Sectrics is an application designed to calculate forces, being tensile or compressive, in each member of a truss using the Finite Element Method. While this creation was part of my HSC course's major project in Australia, it's not intended for real-world structural analysis and its misuse/malfunction is not our responsibility. This was my first and most extensive project, demanding post-graduate level knowledge in civil engineering and linear algebra.",
        "imgSrc": "/static/projects/images/sectrics.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "GitHub Follow Bot",
        "tags": ["Archived", "Software Development", "Python"],
        "description": "A simplistic bot designed for GitHub that enables mass-following of users listed in the githubUsers.txt file. This tool was built with the intention of fostering mutual follow-backs, potentially boosting one's own follower count. Please note that any repercussions from its use are solely the user's responsibility.",
        "imgSrc": "/static/projects/images/github-follow-bot.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    },
    {
        "title": "Master Mind Application",
        "tags": ["Archived", "Software Development", "C#"],
        "description": "Master Mind is an interactive game requiring users to solve a code utilizing as few combinations as possible. Marking my first venture into C# programming, this software was my Year 11 HSC Major project.",
        "imgSrc": "/static/projects/images/master-mind.png", // Placeholder path, please replace it with the actual if available.
        "href": ""
    }
]

const projectsData = [
    {
        title: 'shaankhan.dev',
        tags: ['Web Development', 'Next.js', 'TypeScript', 'Tailwind'],
        description:
            'Built with Next.js, TypeScript, Tailwind CSS, and deployed through Vercel, this bleeding-edge website is both an information security blog and a personal website for my cybersecurity shenanigans and web development ramblings.',
        imgSrc: '/static/projects/images/shaankhan.dev.png',
        href: 'https://github.com/ShaanCoding/shaankhan.dev/',
    },
    ...commercialProjects,
    ...contributedProjects,
    ...closedSourceProjects,
    ...openSourceProjects
]

export default projectsData
