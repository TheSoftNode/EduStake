"use client";

import { motion, Variants } from "framer-motion";
import {
    BookOpen,
    CheckCircle2,
    ArrowRight,
    Star,
    Award,
    BookMarked,
    TrendingUp,
    Zap,
    Sparkles,
    BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Learning Section
const LearningSection = () => {
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
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

    const moduleVariants: Variants = {
        hidden: { x: -20, opacity: 0 },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3 + (custom * 0.15),
                duration: 0.5,
                ease: "easeOut"
            }
        }),
        hover: {
            x: 5,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            transition: {
                duration: 0.3
            }
        }
    };

    const progressVariants: Variants = {
        hidden: { width: 0 },
        visible: {
            width: "40%",
            transition: {
                delay: 0.8,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const checklistVariants: Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.4 + (custom * 0.1),
                duration: 0.5
            }
        }),
        hover: {
            x: 5,
            transition: {
                duration: 0.2
            }
        }
    };

    const glowVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0.3, 0.6, 0.3],
            transition: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="relative py-24 overflow-hidden">
            {/* Background gradient transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/95 to-[#091429] -z-10" />

            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-[#FFD700]/5 blur-3xl"
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#50C878]/5 blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Content container */}
            <div className="container mx-auto px-6">
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Course Preview Panel */}
                    <motion.div
                        className="md:w-1/2 md:order-2"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            {/* Glow effect */}
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-br from-[#FFD700]/10 to-[#6A3DE8]/10 rounded-2xl blur-xl"
                                variants={glowVariants}
                                initial="hidden"
                                animate="visible"
                            />

                            <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-white/10 overflow-hidden">
                                {/* Top edge highlight */}
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                {/* Course header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#6A3DE8]/20 flex items-center justify-center shadow-lg border border-white/10">
                                        <BookOpen className="h-6 w-6 text-[#FFD700]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Blockchain Fundamentals</h3>
                                        <p className="text-sm text-white/60">Beginner Course • 2 hours</p>
                                    </div>
                                </div>

                                {/* Course modules */}
                                <div className="space-y-3 mb-6">
                                    <motion.div
                                        className="p-3 rounded-md border border-white/5 flex items-center gap-3 cursor-pointer"
                                        variants={moduleVariants}
                                        custom={0}
                                        whileHover="hover"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#50C878]/30 to-[#50C878]/10 text-white flex items-center justify-center text-sm font-medium shadow-inner border border-white/10">
                                            1
                                        </div>
                                        <div>
                                            <p className="font-medium text-white/90">Introduction to Blockchain</p>
                                            <p className="text-sm text-white/50">20 min • Completed</p>
                                        </div>
                                        <CheckCircle2 className="h-5 w-5 text-[#50C878] ml-auto" />
                                    </motion.div>

                                    <motion.div
                                        className="p-3 rounded-md bg-[#6A3DE8]/10 border border-[#6A3DE8]/20 flex items-center gap-3 cursor-pointer"
                                        variants={moduleVariants}
                                        custom={1}
                                        whileHover="hover"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#6A3DE8]/40 to-[#6A3DE8]/20 text-white flex items-center justify-center text-sm font-medium shadow-inner border border-white/10">
                                            2
                                        </div>
                                        <div>
                                            <p className="font-medium text-white/90">Consensus Mechanisms</p>
                                            <p className="text-sm text-white/50">30 min • In Progress</p>
                                        </div>
                                        <div className="ml-auto px-2 py-1 rounded-full bg-gradient-to-r from-[#6A3DE8]/20 to-[#6A3DE8]/10 text-[#6A3DE8] text-xs font-medium border border-[#6A3DE8]/20">
                                            Current
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="p-3 rounded-md border border-white/5 flex items-center gap-3 cursor-pointer"
                                        variants={moduleVariants}
                                        custom={2}
                                        whileHover="hover"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-white/10 text-white/50 flex items-center justify-center text-sm font-medium border border-white/10">
                                            3
                                        </div>
                                        <div>
                                            <p className="font-medium text-white/70">Smart Contracts Explained</p>
                                            <p className="text-sm text-white/50">35 min • Not Started</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Course progress */}
                                <div className="mt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-white/70">Course Progress</span>
                                        <span className="text-sm text-white/70">40%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            className="bg-gradient-to-r from-[#FFD700] to-[#6A3DE8] h-2 rounded-full"
                                            style={{ width: 0 }}
                                            variants={progressVariants}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <div className="text-sm text-white/60">
                                            <span>Reward: </span>
                                            <span className="font-medium">
                                                <span className="text-[#FFD700]">100 Points</span> + <span className="text-[#50C878]">1.2x Boost</span>
                                            </span>
                                        </div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-[#6A3DE8] to-[#6A3DE8]/80 hover:opacity-90 text-white"
                                            >
                                                Continue Learning
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-3 right-3">
                                    <motion.div
                                        className="text-[#FFD700]"
                                        animate={{
                                            rotate: [0, 180],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                    >
                                        <Star className="h-5 w-5 opacity-20" />
                                    </motion.div>
                                </div>
                                <div className="absolute bottom-3 left-3">
                                    <motion.div
                                        className="text-[#50C878]"
                                        animate={{
                                            rotate: [0, -180],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 25,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                    >
                                        <BadgeCheck className="h-4 w-4 opacity-20" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Text Section */}
                    <motion.div
                        className="md:w-1/2 md:order-1"
                        variants={itemVariants}
                    >
                        <motion.span
                            className="inline-block px-3 py-1 bg-gradient-to-r from-[#FFD700]/10 to-[#6A3DE8]/10 rounded-full text-[#FFD700] text-sm font-medium mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <BookMarked className="h-3.5 w-3.5 inline-block mr-1" />
                            Educational Content
                        </motion.span>

                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4 text-white"
                            variants={itemVariants}
                        >
                            Enhance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#50C878]">Knowledge</span>,
                            Boost Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3DE8] to-[#6A3DE8]">Rewards</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-white/70 mb-8"
                            variants={itemVariants}
                        >
                            Our educational platform offers a wide range of courses designed to help you understand blockchain technology, DeFi, and the EDU Chain ecosystem.
                        </motion.p>

                        <ul className="space-y-5 mb-8">
                            <motion.li
                                className="flex items-start group"
                                variants={checklistVariants}
                                custom={0}
                                whileHover="hover"
                            >
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 flex items-center justify-center mt-0.5 mr-3 shadow-sm">
                                    <Clock className="h-3.5 w-3.5 text-[#FFD700]" />
                                </div>
                                <div>
                                    <p className="font-medium text-white group-hover:text-[#FFD700] transition-colors">Learn at your own pace</p>
                                    <p className="text-white/60 text-sm">Courses are structured into bite-sized modules that fit your schedule</p>
                                </div>
                            </motion.li>

                            <motion.li
                                className="flex items-start group"
                                variants={checklistVariants}
                                custom={1}
                                whileHover="hover"
                            >
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#50C878]/20 to-[#50C878]/5 flex items-center justify-center mt-0.5 mr-3 shadow-sm">
                                    <Award className="h-3.5 w-3.5 text-[#50C878]" />
                                </div>
                                <div>
                                    <p className="font-medium text-white group-hover:text-[#50C878] transition-colors">Earn points and badges</p>
                                    <p className="text-white/60 text-sm">Track your progress and showcase your achievements on the leaderboard</p>
                                </div>
                            </motion.li>

                            <motion.li
                                className="flex items-start group"
                                variants={checklistVariants}
                                custom={2}
                                whileHover="hover"
                            >
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#6A3DE8]/20 to-[#6A3DE8]/5 flex items-center justify-center mt-0.5 mr-3 shadow-sm">
                                    <TrendingUp className="h-3.5 w-3.5 text-[#6A3DE8]" />
                                </div>
                                <div>
                                    <p className="font-medium text-white group-hover:text-[#6A3DE8] transition-colors">Boost your staking rewards</p>
                                    <p className="text-white/60 text-sm">Each completed course unlocks multipliers for your staked tokens</p>
                                </div>
                            </motion.li>

                            <motion.li
                                className="flex items-start group"
                                variants={checklistVariants}
                                custom={3}
                                whileHover="hover"
                            >
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#00E5BF]/20 to-[#00E5BF]/5 flex items-center justify-center mt-0.5 mr-3 shadow-sm">
                                    <Zap className="h-3.5 w-3.5 text-[#00E5BF]" />
                                </div>
                                <div>
                                    <p className="font-medium text-white group-hover:text-[#00E5BF] transition-colors">Join learning paths</p>
                                    <p className="text-white/60 text-sm">Structured series of courses designed to master specific skills</p>
                                </div>
                            </motion.li>
                        </ul>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Button
                                className="bg-gradient-to-r from-[#FFD700] to-[#50C878] hover:opacity-90 text-slate-900 font-medium shadow-md shadow-[#50C878]/10 group"
                                size="lg"
                            >
                                <span>Explore Courses</span>
                                <motion.span
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut"
                                    }}
                                >
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </motion.span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

// Custom Clock icon
const Clock = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

export default LearningSection;