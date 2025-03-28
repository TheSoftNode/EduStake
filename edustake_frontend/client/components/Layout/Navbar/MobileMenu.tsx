"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronRight, BookOpen, Wallet, GraduationCap, Trophy, Users, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import WalletButton from "@/components/Shared/WalletButton";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const menuItems = [
        { name: "Dashboard", href: "/dashboard", icon: <Wallet className="h-5 w-5" />, color: "from-[#0056E0]/20 to-[#00E5BF]/20" },
        { name: "Stake", href: "/stake", icon: <Zap className="h-5 w-5" />, color: "from-[#FFD700]/20 to-[#50C878]/20" },
        { name: "Learn", href: "/learn", icon: <GraduationCap className="h-5 w-5" />, color: "from-[#6A3DE8]/20 to-[#0056E0]/20" },
        { name: "Leaderboard", href: "/leaderboard", icon: <Trophy className="h-5 w-5" />, color: "from-[#50C878]/20 to-[#FFD700]/20" },
    ];

    const resourceItems = [
        { name: "EDU Chain Docs", href: "https://edu-chain.com", icon: <BookOpen className="h-5 w-5" />, color: "from-[#FFD700]/20 to-[#6A3DE8]/20" },
        { name: "Community", href: "/community", icon: <Users className="h-5 w-5" />, color: "from-[#50C878]/20 to-[#00E5BF]/20" },
    ];

    // Animation variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3, delay: 0.1 }
        }
    };

    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 250
            }
        },
        exit: {
            x: "100%",
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 300
            }
        }
    };

    const menuItemVariants = {
        hidden: {
            x: 50,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.1 + custom * 0.05,
                duration: 0.4,
                ease: "easeOut"
            }
        }),
        exit: (custom: number) => ({
            x: 50,
            opacity: 0,
            transition: {
                delay: custom * 0.02,
                duration: 0.2,
                ease: "easeIn"
            }
        })
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] lg:hidden overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
                        onClick={onClose}
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />

                    {/* Mobile menu panel */}
                    <motion.div
                        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-[#0C1122] to-[#162240] text-white shadow-xl overflow-hidden"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="relative h-full flex flex-col">
                            {/* Menu header with close button */}
                            <motion.div
                                className="flex items-center justify-between px-6 py-4 border-b border-slate-700"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <h2 className="text-xl font-bold">Menu</h2>
                                <button
                                    type="button"
                                    onClick={() => {
                                        console.log("Close button clicked");
                                        onClose();
                                    }}
                                    className="p-2 rounded-full hover:bg-white/10 text-white"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </motion.div>

                            {/* Background graphic elements */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#6A3DE8]/5 to-[#00E5BF]/5 blur-xl" />
                            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#FFD700]/5 to-[#50C878]/5 blur-xl" />

                            {/* Navigation section */}
                            <div className="flex-1 overflow-y-auto py-6 px-6">
                                <nav className="space-y-6">
                                    <div className="space-y-1">
                                        {menuItems.map((item, index) => (
                                            <motion.div
                                                key={item.name}
                                                custom={index}
                                                variants={menuItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                                                    onClick={onClose}
                                                >
                                                    <span className={`bg-gradient-to-br ${item.color} p-2 rounded-md mr-3`}>
                                                        {item.icon}
                                                    </span>
                                                    <span className="font-medium">{item.name}</span>
                                                    <ChevronRight className="ml-auto h-5 w-5 text-slate-400" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        className="pt-6 border-t border-slate-700"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.4 }}
                                    >
                                        <h3 className="text-sm font-semibold text-slate-400 px-4 mb-3">RESOURCES</h3>
                                        <div className="space-y-1">
                                            {resourceItems.map((item, index) => (
                                                <motion.div
                                                    key={item.name}
                                                    custom={index + menuItems.length}
                                                    variants={menuItemVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                                                        onClick={onClose}
                                                    >
                                                        <span className={`bg-gradient-to-br ${item.color} p-2 rounded-md mr-3`}>
                                                            {item.icon}
                                                        </span>
                                                        <span className="font-medium">{item.name}</span>
                                                        <ChevronRight className="ml-auto h-5 w-5 text-slate-400" />
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="mt-4 p-4 rounded-lg bg-gradient-to-br from-[#0056E0]/10 to-[#00E5BF]/10 border border-white/5"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6, duration: 0.4 }}
                                    >
                                        <div className="flex items-center mb-2">
                                            <Sparkles className="h-5 w-5 text-[#FFD700] mr-2" />
                                            <h3 className="font-medium">Boost Your Rewards</h3>
                                        </div>
                                        <p className="text-sm text-slate-300 mb-3">
                                            Complete educational courses to increase your staking multipliers.
                                        </p>
                                        <Button
                                            className="w-full bg-gradient-to-r from-[#FFD700] to-[#50C878] hover:opacity-90 text-slate-900 font-medium"
                                            size="sm"
                                        >
                                            Start Learning
                                        </Button>
                                    </motion.div>
                                </nav>
                            </div>

                            {/* Wallet button section */}
                            <motion.div
                                className="px-6 py-4 mt-auto border-t border-slate-700 bg-slate-900/30"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <WalletButton mobile />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}