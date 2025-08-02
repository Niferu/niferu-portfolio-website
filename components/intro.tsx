"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"
import Typed from "react-typed"
import { motion } from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { FaChessKnight } from "react-icons/fa6"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <section className={"max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]"} ref={ref} id="home">
            <div className="flex items-center justify-center py-[1rem]">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                    <Image
                        className="w-[9rem] h-[9rem] object-fill rounded-full shadow-xl border-lotr dark:border-darky/80 border-[0.05rem] self-center"
                        src="/niferu.jpg"
                        alt="Niferu"
                        height="200"
                        width="200"
                        quality="95"
                        priority={true}
                    />
                </motion.div>
            </div>

            <motion.p
                className="text-center text-lotr dark:text-zinc-50 py-[2rem] !leading-[1.5] text-2xl sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello, I&apos;m Patryk, a{" "}
                <span className="text-darklord dark:text-main underline decoration-2 underline-offset-2">blockchain and backend developer</span> with extensive
                full-stack experience and vast
                <span className="block ml-[0.5rem]">
                    knowledge in fields like
                    <Typed
                        className="ml-[0.5rem] text-darklord/80 dark:text-main/80"
                        strings={["Trading", "Finance", "Chess", "Gaming"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                        // showCursor={false}
                    />
                </span>
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-[2rem]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    className="group flex items-center gap-2 px-[1.5rem] py-[1.1rem] font-bold text-darklord/80 hover:text-darklord dark:text-main/75
                             dark:hover:text-main borderDevil dark:hover:border-main bg-white/40 dark:bg-black/80 rounded-full focus:scale-110 hover:scale-110
                             hover:bg-white dark:hover:bg-black dark:hover:bg-opacity-95 active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px]
                               shadow-btnShadow dark:shadow-sunA backdrop-blur-[0.1rem] hover:border-darklord/90"
                    href="#contact"
                    onClick={() => {
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Hire Me <BsArrowRight className="opacity-60 group-hover:translate-x-[0.3rem] transition group-hover:opacity-90" />
                </Link>
                <a
                    className="group flex items-center gap-2 px-[1.5rem] py-[1.1rem] font-bold text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                               borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-110
                               hover:bg-white dark:hover:bg-darkyil active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                               border-darklord/20 hover:border-darklord/50"
                    href="/CV.pdf"
                    download
                >
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition group-hover:opacity-90" />
                </a>
                <a
                    className="flex items-center gap-2 p-[1.15rem] text-lg text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                               borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-[1.2]
                               hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                               border-darklord/20 hover:border-darklord/50"
                    href="https://www.linkedin.com/in/patryk-wargacki-946401190/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="flex items-center gap-2 p-[1.012rem] text-[1.4rem] text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                               borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-[1.2]
                               hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                               border-darklord/20 hover:border-darklord/50"
                    href="https://github.com/Niferu"
                    target="_blank"
                >
                    <BsGithub />
                </a>
                <a
                    className="flex items-center gap-2 p-[1.15rem] text-lg text-darklord/80 hover:text-darklord dark:text-main/75 dark:hover:text-main
                               borderDevil dark:hover:border-main bg-white/40 dark:bg-black/50 rounded-full focus:scale-110 hover:scale-[1.2]
                               hover:bg-white dark:hover:bg-darkyil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px] backdrop-blur-[0.1rem]
                               border-darklord/20 hover:border-darklord/50"
                    href="https://lichess.org/@/AmNiferu"
                    target="_blank"
                >
                    <FaChessKnight />
                </a>
            </motion.div>
        </section>
    )
}
