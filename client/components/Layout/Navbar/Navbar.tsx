"use client";

import { useState, useEffect } from "react";
import { Menu, BookOpen, Users, BarChart, Layers, Sparkles, BookMarked, Disc } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import WalletButton from "@/components/Shared/WalletButton";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll effects for navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled past threshold
            if (currentScrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Hide/show navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <motion.nav
                className={`navbar-bg fixed w-full top-0 z-50 ${scrolled
                    ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
                    : "bg-gradient-to-r from-[#091032] via-[#172554] to-[#134E4A]"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo and Brand */}
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Logo />
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            <motion.div
                                className="flex items-center space-x-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2
                                }}
                            >
                                <NavLink href="/dashboard">Dashboard</NavLink>
                                <NavLink href="/stake">Stake</NavLink>
                                <NavLink href="/learn">Learn</NavLink>
                                <NavLink href="/leaderboard">Leaderboard</NavLink>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="nav-link text-white/80 hover:text-white hover:bg-white/10">
                                            Resources
                                            <Layers className="ml-1 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="bg-gradient-to-br from-[#0C1122] to-[#162240] text-white border-slate-700 backdrop-blur-lg p-2 w-56 animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-5 data-[side=left]:slide-in-from-right-5 data-[side=right]:slide-in-from-left-5 data-[side=top]:slide-in-from-bottom-5"
                                    >
                                        <DropdownMenuItem className="focus:bg-white/10 rounded-md transition-colors duration-200">
                                            <a href="https://edu-chain.com" className="flex w-full items-center py-1">
                                                <BookOpen className="mr-2 h-4 w-4 text-[#FFD700]" />
                                                <span>EDU Chain Docs</span>
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="focus:bg-white/10 rounded-md transition-colors duration-200">
                                            <a href="/community" className="flex w-full items-center py-1">
                                                <Users className="mr-2 h-4 w-4 text-[#50C878]" />
                                                <span>Community</span>
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="bg-slate-700" />
                                        <DropdownMenuItem className="focus:bg-white/10 rounded-md transition-colors duration-200">
                                            <a href="/analytics" className="flex w-full items-center py-1">
                                                <BarChart className="mr-2 h-4 w-4 text-[#6A3DE8]" />
                                                <span>Analytics</span>
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="focus:bg-white/10 rounded-md transition-colors duration-200">
                                            <a href="/resources" className="flex w-full items-center py-1">
                                                <BookMarked className="mr-2 h-4 w-4 text-[#00E5BF]" />
                                                <span>Resource Center</span>
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="bg-slate-700" />
                                        <div className="px-2 py-2 mt-1">
                                            <div className="flex items-center justify-between bg-gradient-to-r from-[#0056E0]/20 to-[#00E5BF]/20 p-2 rounded-md">
                                                <div className="flex items-center">
                                                    <Sparkles className="h-4 w-4 text-[#FFD700] mr-2" />
                                                    <span className="text-xs">Ecosystem Explorer</span>
                                                </div>
                                                <span className="px-1.5 py-0.5 bg-[#FFD700]/20 text-[#FFD700] text-xs rounded-sm">New</span>
                                            </div>
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </motion.div>
                        </div>

                        {/* Wallet Connect Button - Desktop */}
                        <motion.div
                            className="hidden lg:block"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <WalletButton className="shadow-glow" />
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.div
                            className="lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/10"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Animated accent line with gradient */}
                <motion.div
                    className="h-[2px] w-full bg-gradient-to-r from-[#FFD700] via-[#50C878] to-[#6A3DE8]"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                        scaleX: scrolled ? 1 : 0,
                        opacity: scrolled ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                />

                {/* Floating indicators - only visible when not scrolled */}
                <AnimatePresence>
                    {!scrolled && (
                        <>
                            <motion.div
                                className="absolute -bottom-1 left-1/4 size-2 rounded-full bg-[#FFD700]"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 0.7 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-2 left-1/2 size-3 rounded-full bg-[#50C878]"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 0.5 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-1 left-3/4 size-2 rounded-full bg-[#6A3DE8]"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 0.7 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile Menu with Framer Motion */}
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
}