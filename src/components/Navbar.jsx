import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="z-infinte relative">
            <motion.div
                className={clsx(
                    "fixed top-0 left-1/2 max-w-96 h-[4.5rem] backdrop-blur-lg rounded-none shadow-lg shadow-black/[0.1] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full transition-colors duration-300 bg-white/10 border border-white/10",
                    {
                        "bg-white/30 border border-white/20": scrolled,
                    }
                )}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={clsx(
                                "flex w-full items-center justify-center px-3 py-3 hover:text-gray-400 transition",
                                {
                                    "text-gray-950": activeSection === "Home",
                                    "text-white": activeSection !== "Home",
                                }
                            )}
                            to="#home"
                            onClick={() => {
                                setActiveSection("Home");
                            }}
                        >
                            Home
                            {activeSection === "Home" && (
                                <motion.span
                                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                ></motion.span>
                            )}
                        </Link>
                    </motion.li>

                    <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={clsx(
                                "flex w-full items-center justify-center px-3 py-3 hover:text-gray-400 transition",
                                {
                                    "text-gray-950": activeSection === "About",
                                    "text-white": activeSection !== "About",
                                }
                            )}
                            to="#about"
                            onClick={() => {
                                setActiveSection("About");
                            }}
                        >
                            About
                            {activeSection === "About" && (
                                <motion.span
                                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                ></motion.span>
                            )}
                        </Link>
                    </motion.li>

                    <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={clsx(
                                "flex w-full items-center justify-center px-3 py-3 hover:text-gray-400 transition",
                                {
                                    "text-gray-950": activeSection === "Services",
                                    "text-white": activeSection !== "Services",
                                }
                            )}
                            to="#services"
                            onClick={() => {
                                setActiveSection("Services");
                            }}
                        >
                            Services
                            {activeSection === "Services" && (
                                <motion.span
                                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                ></motion.span>
                            )}
                        </Link>
                    </motion.li>

                    <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={clsx(
                                "flex w-full items-center justify-center px-3 py-3 hover:text-gray-400 transition",
                                {
                                    "text-gray-950": activeSection === "Contact",
                                    "text-white": activeSection !== "Contact",
                                }
                            )}
                            to="#contact"
                            onClick={() => {
                                setActiveSection("Contact");
                            }}
                        >
                            Contact
                            {activeSection === "Contact" && (
                                <motion.span
                                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                ></motion.span>
                            )}
                        </Link>
                    </motion.li>
                </ul>
            </nav>
        </header>
    );
}
