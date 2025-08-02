import React from "react"
import ain from "@/public/projects/ain.jpg"
import drm from "@/public/projects/drm.jpg"
import vdr from "@/public/projects/vdr.jpg"
import memtize from "@/public/projects/memtize.jpg"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import { SiSolidity } from "react-icons/si"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const

export const projectsData = [
    {
        title: "Memtize",
        description:
            "An engine written in Solidity that automates the asset listing process on decentralized exchanges, ensuring seamless and efficient creation of liquidity pools, including protection from rug pulls.",
        tags: ["Solidity", "Foundry", "Remix", "Makefile", "Uniswap"],
        imageUrl: memtize,
        href: "https://github.com/Niferu/memtize-engine",
    },
    {
        title: "Digital Rights Maykr",
        description:
            "Platform, features an on-chain storage system that ensures the safekeeping of valuable creative works. It issues unique copyright certificates to users under ERC4671. With the ability to lend certificated art to other parties.",
        tags: ["Solidity", "TypeScript", "Hardhat", "React", "Next.js", "Tailwind"],
        imageUrl: drm,
        href: "https://digital-rights-maykr.vercel.app/",
    },
    {
        title: "Virtual Dream Raiser",
        description:
            "Fund raising platform offering a decentralized and fully automated ecosystem where anyone can raise funds for anything. This platform supports charitable organizations and verified users! Otherwise it is all based on mutual trust.",
        tags: ["Solidity", "Foundry", "React", "Next.js", "TypeScript", "Tailwind"],
        imageUrl: vdr,
        href: "https://virtual-dream-raiser.vercel.app/",
    },
    {
        title: "Abstract Impulse NFT",
        description:
            "NFT marketplace designed for artists. It empowers private art creators to have a tailor-made NFT marketplace and maximizes sale profits by posting an auction in a decentralized and automated way, thanks to Chainlink.",
        tags: ["Solidity", "JavaScript", "Hardhat", "Graph", "React", "Next.js"],
        imageUrl: ain,
        href: "https://abstract-impulse-nft.vercel.app/",
    },
] as const

export const skillsData = [
    {
        title: "Solidity",
        imageUrl: "/icons/solidity.png",
        href: "https://docs.soliditylang.org",
        width: 55,
    },
    {
        title: "Rust",
        imageUrl: "/icons/rust.png",
        href: "https://www.rust-lang.org/",
        width: 53,
    },
    {
        title: "Python",
        imageUrl: "/icons/python.svg",
        href: "https://www.python.org",
        width: 50,
    },
    {
        title: "JavaScript",
        imageUrl: "/icons/js.svg",
        href: "https://www.javascript.com",
        width: 40,
    },
    {
        title: "TypeScript",
        imageUrl: "/icons/ts.svg",
        href: "https://www.typescriptlang.org",
        width: 40,
    },
    {
        title: "MQL5",
        imageUrl: "/icons/mql.png",
        href: "https://www.mql5.com",
        width: 67,
    },
    {
        title: "Java",
        imageUrl: "/icons/java.svg",
        href: "https://www.java.com",
        width: 40,
    },
    {
        title: "MySQL",
        imageUrl: "/icons/mysql.png",
        href: "https://www.mysql.com/",
        width: 60,
    },
    {
        title: "HTML",
        imageUrl: "/icons/html.svg",
        href: "https://www.w3.org/html/",
        width: 40,
    },
    {
        title: "CSS",
        imageUrl: "/icons/css.svg",
        href: "https://www.w3schools.com/css/",
        width: 40,
    },
    {
        title: "Tailwind",
        imageUrl: "/icons/tailwind.svg",
        href: "https://tailwindcss.com/",
        width: 40,
    },
    {
        title: "Framer Motion",
        imageUrl: "/icons/framer.svg",
        href: "https://www.framer.com/motion/",
        width: 40,
    },
    {
        title: "NextJs",
        imageUrl: "/icons/next.png",
        href: "https://nextjs.org",
        width: 55,
    },
    {
        title: "React",
        imageUrl: "/icons/react.svg",
        href: "https://reactjs.org",
        width: 40,
    },
    {
        title: "GraphQL",
        imageUrl: "/icons/graph.png",
        href: "https://graphql.org/",
        width: 40,
    },
    {
        title: "Apollo",
        imageUrl: "/icons/apollo.png",
        href: "https://www.apollographql.com/docs/react/",
        width: 40,
    },
    {
        title: "Foundry",
        imageUrl: "/icons/foundry.png",
        href: "https://github.com/foundry-rs",
        width: 43,
    },
    {
        title: "Hardhat",
        imageUrl: "/icons/hardhat.png",
        href: "https://hardhat.org/",
        width: 40,
    },
    {
        title: "Brownie",
        imageUrl: "/icons/brownie.svg",
        href: "https://eth-brownie.readthedocs.io/en/stable/",
        width: 40,
    },
    {
        title: "Git",
        imageUrl: "/icons/git.svg",
        href: "https://git-scm.com",
        width: 40,
    },
    {
        title: "Bash",
        imageUrl: "/icons/bash.png",
        href: "https://www.gnu.org/software/bash/manual/bash.html",
        width: 40,
    },
    {
        title: "PowerShell",
        imageUrl: "/icons/powershell.svg",
        href: "https://learn.microsoft.com",
        width: 50,
    },
    {
        title: "Makefile",
        imageUrl: "/icons/makefile.png",
        href: "https://makefiletutorial.com/",
        width: 40,
    },
] as const

export const experienceData = [
    {
        title: "Education",
        location: "Cracow University of Economics",
        description:
            "I graduated after 3 years of studying Finance and Accounting with a specialization in Financial Markets. I then continued my studies for the next 2 years, focusing on Investment Advisory specialization.",
        icon: React.createElement(LuGraduationCap),
        date: "2013-2018",
    },
    {
        title: "Derivatives Specialist",
        location: "State Street Bank",
        description:
            "Immediately after my graduation, I found a job as a derivatives specialist. I reconciled and processed transactions for institutional clients funds.",
        icon: React.createElement(CgWorkAlt),
        date: "2016-2020",
    },
    {
        title: "Senior Specialist Operations Department",
        location: "Brown Brothers Harriman",
        description:
            "As a Senior Operations Specialist I was working on fund mergers, client onboardings and transfers of securities into custody for clients over whole globe.",
        icon: React.createElement(CgWorkAlt),
        date: "2020 - 2024",
    },
    {
        title: "Freelance Full-Stack Developer",
        location: "Krakow, Poland",
        description:
            "As a freelance full-stack developer, I build Web 3.0 applications from start to finish, as well as trading bots and indicators for the Forex market. My tech stack includes Solidity, Rust, Python, TypeScript, MQL5, React, Next.js, and more.",
        icon: React.createElement(FaReact),
        date: "2020 - 2024",
    },
    {
        title: "Senior Blockchain And Backend Engineer",
        location: "Pieces.Market",
        description:
            "As a Senior Blockchain and Backend Engineer, I leverage my expertise in Solidity, Node.js, and MySQL to develop and optimize smart contracts, implement cross-chain functionality, design scalable backend systems, and seamlessly integrate blockchain with databases, APIs, and the frontend, contributing to its development.",
        icon: React.createElement(SiSolidity),
        date: "2024 - present",
    },
] as const
