"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import {
    Globe,
    MessageSquare,
    FileText,
    HelpCircle,
    ChevronRight,
    Shield,
    Book,
    Lock,
    Command,
    ArrowUpRight
} from "lucide-react";

import { FaTwitter, FaTelegram, FaGithub } from "react-icons/fa6"
import { Button } from "@/components/ui/button";
import Logo from "../Navbar/Logo";

// Footer Component
const Footer = () => {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, amount: 0.1 });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const linkVariants: Variants = {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        },
        hover: {
            x: 3,
            color: "#ffffff",
            transition: { duration: 0.2 }
        }
    };

    const footerLinks = [
        {
            title: "Platform",
            links: [
                { name: "Dashboard", href: "/dashboard", icon: <Command className="h-3.5 w-3.5" /> },
                { name: "Staking Pools", href: "/stake", icon: <Lock className="h-3.5 w-3.5" /> },
                { name: "Learning Center", href: "/learn", icon: <Book className="h-3.5 w-3.5" /> },
                { name: "Leaderboard", href: "/leaderboard", icon: <Shield className="h-3.5 w-3.5" /> }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "/docs", icon: <FileText className="h-3.5 w-3.5" /> },
                { name: "Tutorials", href: "/tutorials", icon: <Book className="h-3.5 w-3.5" /> },
                { name: "FAQ", href: "/help", icon: <HelpCircle className="h-3.5 w-3.5" /> },
                { name: "Support", href: "/support", icon: <MessageSquare className="h-3.5 w-3.5" /> }
            ]
        },
        {
            title: "Community",
            links: [
                { name: "Discord", href: "#", icon: <MessageSquare className="h-3.5 w-3.5" /> },
                { name: "Twitter", href: "#", icon: <FaTwitter className="h-3.5 w-3.5" /> },
                { name: "Telegram", href: "#", icon: <FaTelegram className="h-3.5 w-3.5" /> },
                { name: "Blog", href: "#", icon: <Globe className="h-3.5 w-3.5" /> }
            ]
        }
    ];

    const legalLinks = [
        { name: "Terms", href: "/terms" },
        { name: "Privacy", href: "privacy" },
    ];

    return (
        <footer
            ref={footerRef}
            className="relative bg-gradient-to-b from-[#050A21] to-[#0C1022] text-white overflow-hidden"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Hexagon grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%">
                        <pattern id="hexagonPattern" width="50" height="43.4" patternUnits="userSpaceOnUse">
                            <path d="M25,0 L50,14.3 L50,37.7 L25,52 L0,37.7 L0,14.3 Z" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
                    </svg>
                </div>

                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050A21] to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C1022] to-transparent opacity-80" />
            </div>

            {/* Content container */}
            <div className="container mx-auto px-6 py-16 relative z-10">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Brand section */}
                    <motion.div variants={itemVariants}>
                        <div className="flex items-end">
                            <Logo size="small" />
                        </div>
                        <p className="text-white/60 text-sm mt-4 max-w-xs">
                            Learn, stake, and earn rewards on the EDU Chain ecosystem. The future of decentralized education is here.
                        </p>

                        <div className="mt-6 flex items-center">
                            <Link
                                href="#"
                                className="inline-flex items-center text-sm text-[#FFD700]/80 hover:text-[#FFD700] transition-colors group"
                            >
                                <span>Join EDU Chain</span>
                                <motion.span
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
                                >
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </motion.span>
                            </Link>
                        </div>

                        <div className="mt-6 flex space-x-4">
                            {[FaTwitter, FaTelegram, FaGithub, Globe].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors relative group"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <Icon className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
                                    {hoveredIndex === i && (
                                        <motion.div
                                            className="absolute -inset-0.5 rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                background: `linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(106, 61, 232, 0.2), rgba(80, 200, 120, 0.2), rgba(0, 229, 191, 0.2))`,
                                                backgroundSize: '300% 300%',
                                                animation: 'gradientAnimation 3s ease infinite',
                                                zIndex: -1
                                            }}
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Link sections */}
                    {footerLinks.map((section, sectionIndex) => (
                        <motion.div key={section.title} variants={itemVariants}>
                            <h4 className="font-medium mb-4 text-white/90 relative inline-block">
                                {section.title}
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#6A3DE8] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.3 + (sectionIndex * 0.15) }}
                                />
                            </h4>
                            <ul className="space-y-2.5">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li key={link.name} variants={itemVariants}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center"
                                        >
                                            <motion.div
                                                className="text-white/60 transition-colors flex items-center"
                                                variants={linkVariants}
                                                whileHover="hover"
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                custom={linkIndex * 0.1}
                                            >
                                                <span className="flex items-center text-[#50C878]/70 group-hover:text-[#50C878] mr-1.5 transition-colors">
                                                    {link.icon}
                                                </span>
                                                <span className="text-sm group-hover:text-white/90">{link.name}</span>
                                                <motion.span
                                                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    animate={{
                                                        x: [0, 2, 0],
                                                        opacity: [0, 1, 0]
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        repeatDelay: 2
                                                    }}
                                                >
                                                    <ChevronRight className="h-3 w-3" />
                                                </motion.span>
                                            </motion.div>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Newsletter subscription (new addition) */}
                <motion.div
                    className="mt-12 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>
                        <div className="md:col-span-2">
                            <h4 className="text-white font-semibold mb-2">Stay up to date</h4>
                            <p className="text-white/60 text-sm">Subscribe to our newsletter for the latest updates on new courses, staking pools, and rewards.</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#50C878]/30 focus:border-[#50C878]/50"
                                />
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FFD700]/20 via-[#50C878]/20 to-[#6A3DE8]/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                            <Button className="bg-gradient-to-r from-[#50C878] to-[#00E5BF] hover:opacity-90 text-slate-900 font-medium">
                                Subscribe
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom section with copyright */}
                <motion.div
                    className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.p className="text-white/60 text-sm" variants={itemVariants}>
                        &copy; {new Date().getFullYear()} EduStake. All rights reserved.
                    </motion.p>
                    <motion.div className="flex space-x-6 mt-4 md:mt-0" variants={itemVariants}>
                        {legalLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/60 hover:text-white text-sm transition-colors relative group"
                            >
                                <span>{link.name}</span>
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                />
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Decorative line */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-transparent via-[#6A3DE8]/50 to-transparent"
                        animate={{
                            backgroundPosition: ["200% 0%", "-200% 0%"],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;