"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants, useMotionValue, useTransform } from "framer-motion";
import {
    Shield,
    BookOpen,
    Wallet,
    GraduationCap,
    Lock,
    Eye,
    Fingerprint,
    Key,
    CheckCircle,
    Check,
    FileCheck,
    ShieldCheck,
    LockKeyhole,
    FileCode,
    SearchCode,
    Code,
    BadgeCheck,
    Settings,
    Orbit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Security Section with advanced animations and visual effects
const SecuritySection = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const controls = useAnimation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse movement effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Animation variants
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const titleVariants: Variants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.17, 0.67, 0.83, 0.67]
            }
        }
    };

    const cardVariants: Variants = {
        hidden: (custom: number) => ({
            y: 50,
            opacity: 0,
            scale: 0.9,
            rotateY: custom % 2 === 0 ? 10 : -10
        }),
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2 + custom * 0.1,
                duration: 0.8
            }
        }),
        hover: {
            y: -15,
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 15
            }
        },
        tap: {
            scale: 0.98,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const glowVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (custom: number) => ({
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.2, 0.8],
            transition: {
                duration: 4,
                times: [0, 0.5, 1],
                delay: custom * 0.5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        })
    };

    const securityItems = [
        {
            title: "Audited Contracts",
            description: "All our smart contracts have been audited by leading security firms to ensure your funds are safe.",
            icon: <Shield className="h-6 w-6" />,
            color: "from-[#FFD700] to-[#50C878]",
            glowColor: "from-[#FFD700]/30 to-[#50C878]/40",
            secondaryIcon: <FileCheck className="h-5 w-5 absolute bottom-2 right-2 opacity-50" />,
            stats: ["3 Audits", "100% Coverage", "0 Critical Issues"],
            motion: {
                animate: {
                    rotateZ: [0, 5, 0, -5, 0],
                    transition: { repeat: Infinity, duration: 10, ease: "linear" }
                }
            }
        },
        {
            title: "Transparent System",
            description: "All staking operations and educational rewards are recorded on-chain for complete transparency.",
            icon: <BookOpen className="h-6 w-6" />,
            color: "from-[#6A3DE8] to-[#00E5BF]",
            glowColor: "from-[#6A3DE8]/30 to-[#00E5BF]/40",
            secondaryIcon: <Eye className="h-5 w-5 absolute bottom-2 right-2 opacity-50" />,
            stats: ["Real-time Updates", "Verified Transactions", "Public Ledger"],
            motion: {
                animate: {
                    y: [0, -5, 0, 5, 0],
                    transition: { repeat: Infinity, duration: 8, ease: "easeInOut" }
                }
            }
        },
        {
            title: "Self-Custody",
            description: "Connect your own wallet and maintain control of your keys. No need to deposit funds to a centralized entity.",
            icon: <Wallet className="h-6 w-6" />,
            color: "from-[#50C878] to-[#FFD700]",
            glowColor: "from-[#50C878]/30 to-[#FFD700]/40",
            secondaryIcon: <Key className="h-5 w-5 absolute bottom-2 right-2 opacity-50" />,
            stats: ["Full Control", "Non-custodial", "Connect Any Wallet"],
            motion: {
                animate: {
                    scale: [1, 1.05, 1, 0.97, 1],
                    transition: { repeat: Infinity, duration: 12, ease: "easeInOut" }
                }
            }
        },
        {
            title: "Verified Learning",
            description: "Educational achievements are verified on-chain through the EDU Chain's OCID (Open Campus ID) system.",
            icon: <GraduationCap className="h-6 w-6" />,
            color: "from-[#00E5BF] to-[#6A3DE8]",
            glowColor: "from-[#00E5BF]/30 to-[#6A3DE8]/40",
            secondaryIcon: <BadgeCheck className="h-5 w-5 absolute bottom-2 right-2 opacity-50" />,
            stats: ["Tamper-proof", "Instant Verification", "Decentralized ID"],
            motion: {
                animate: {
                    x: [0, 5, 0, -5, 0],
                    transition: { repeat: Infinity, duration: 9, ease: "easeInOut" }
                }
            }
        }
    ];

    // Particle system for background
    const particles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5
    }));

    // Hexagon grid for background
    const hexagons = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        size: Math.random() * 80 + 40,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.07 + 0.02,
        rotate: Math.random() * 30
    }));

    return (
        <motion.div
            className="relative py-24 overflow-hidden"
            ref={containerRef}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {/* Background gradient transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#091429] via-[#050A21] to-[#0C183A] -z-10" />

            {/* Particle system */}
            <div className="absolute inset-0 -z-5">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-white/20"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`
                        }}
                        animate={{
                            y: ["0%", "-100%"],
                            opacity: [0, 0.5, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Hexagon grid */}
            <div className="absolute inset-0 -z-5">
                {hexagons.map((hex) => (
                    <div
                        key={hex.id}
                        className="absolute"
                        style={{
                            width: hex.size,
                            height: hex.size,
                            left: `${hex.x}%`,
                            top: `${hex.y}%`,
                            opacity: hex.opacity,
                            transform: `rotate(${hex.rotate}deg)`
                        }}
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <polygon
                                points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25"
                                fill="none"
                                stroke="white"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>
                ))}
            </div>

            {/* Animated lines connecting sections */}
            <div className="absolute inset-0 -z-5">
                <motion.div
                    className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/30 to-transparent h-full left-1/4"
                    animate={{
                        scaleY: [0, 1, 0.5, 0.8, 0],
                        opacity: [0, 0.3, 0.5, 0.3, 0],
                        top: ["0%", "100%"]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#50C878]/30 to-transparent h-full left-2/4"
                    animate={{
                        scaleY: [0, 0.5, 1, 0.5, 0],
                        opacity: [0, 0.5, 0.8, 0.5, 0],
                        top: ["0%", "100%"]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 5
                    }}
                />
                <motion.div
                    className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#6A3DE8]/30 to-transparent h-full left-3/4"
                    animate={{
                        scaleY: [0, 0.8, 0.4, 1, 0],
                        opacity: [0, 0.3, 0.5, 0.3, 0],
                        top: ["0%", "100%"]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 8
                    }}
                />
            </div>

            {/* Floating glowing orbs */}
            <motion.div
                className="absolute top-20 left-[15%] w-60 h-60 rounded-full bg-[#FFD700]/5 blur-3xl -z-5"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.div
                className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full bg-[#50C878]/5 blur-3xl -z-5"
                animate={{
                    y: [0, 30, 0],
                    opacity: [0.2, 0.3, 0.2],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", delay: 5 }}
            />

            <motion.div
                className="absolute -z-5 w-screen h-screen pointer-events-none"
                style={{
                    background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.03), transparent 80%)`,
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={titleVariants}
                        className="inline-block"
                    >
                        <div className="mb-2 inline-block">
                            <motion.div
                                className="relative inline-flex items-center px-4 py-1 bg-gradient-to-r from-[#FFD700]/10 to-[#6A3DE8]/10 rounded-full"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <ShieldCheck className="h-4 w-4 text-[#50C878] mr-2" />
                                <span className="text-[#FFD700] text-sm font-medium">Military-Grade Protection</span>
                                <motion.span
                                    className="absolute -inset-px rounded-full border border-[#FFD700]/20"
                                    animate={{
                                        boxShadow: ["0 0 0px #FFD700", "0 0 8px #FFD700", "0 0 0px #FFD700"],
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                        </div>

                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4 text-white"
                            variants={titleVariants}
                        >
                            <span className="relative">
                                Built for
                                <motion.span
                                    className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#50C878] ml-2"
                                    animate={{
                                        color: [
                                            "rgba(255, 215, 0, 1)",
                                            "rgba(106, 61, 232, 1)",
                                            "rgba(80, 200, 120, 1)",
                                            "rgba(0, 229, 191, 1)",
                                            "rgba(255, 215, 0, 1)"
                                        ]
                                    }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                >
                                    Security
                                </motion.span> and
                                <motion.span
                                    className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#6A3DE8] to-[#00E5BF] ml-2"
                                    animate={{
                                        color: [
                                            "rgba(106, 61, 232, 1)",
                                            "rgba(0, 229, 191, 1)",
                                            "rgba(255, 215, 0, 1)",
                                            "rgba(80, 200, 120, 1)",
                                            "rgba(106, 61, 232, 1)"
                                        ]
                                    }}
                                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                                >
                                    Trust
                                </motion.span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                />
                            </span>
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        className="text-lg text-white/70 max-w-2xl mx-auto"
                        variants={titleVariants}
                    >
                        EduStake is built on EDU Chain with security and transparency as core principles,
                        <br className="hidden md:block" /> ensuring your assets and educational achievements remain safe and verifiable.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {securityItems.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onHoverStart={() => setActiveCard(index)}
                            onHoverEnd={() => setActiveCard(null)}
                            className="perspective-1000"
                        >
                            <Card className="border-0 bg-transparent overflow-hidden h-full">
                                <div className="relative h-full">
                                    {/* Card background with gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/95 -z-10 rounded-xl backdrop-blur-sm" />

                                    {/* Animated border */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl overflow-hidden"
                                        initial={{ opacity: 0 }}
                                        animate={activeCard === index ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="absolute inset-px rounded-xl bg-slate-900"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 to-slate-900/0">
                                            <motion.div
                                                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                animate={{
                                                    backgroundPosition: ["0% 0%", "100% 0%"],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                            />
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                animate={{
                                                    backgroundPosition: ["100% 0%", "0% 0%"],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Animated glow effect */}
                                    <motion.div
                                        className={`absolute -inset-4 bg-gradient-to-br ${item.glowColor} rounded-xl blur-xl -z-10`}
                                        variants={glowVariants}
                                        initial="hidden"
                                        animate={activeCard === index ? "visible" : "hidden"}
                                        custom={index}
                                    />

                                    <CardHeader className="p-6">
                                        <div className="flex justify-between items-start">
                                            <motion.div
                                                className={`h-12 w-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg border border-white/10 relative overflow-hidden`}
                                                {...item.motion}
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
                                                    initial={{ opacity: 0, rotate: 0 }}
                                                    animate={{
                                                        opacity: [0, 0.5, 0],
                                                        rotate: 360
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        delay: index * 0.5
                                                    }}
                                                />
                                                <motion.div className="text-white">
                                                    {item.icon}
                                                </motion.div>
                                            </motion.div>

                                            {/* Rotating cyber security elements */}
                                            <motion.div
                                                className="opacity-20"
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{
                                                    duration: 20,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            >
                                                <Orbit className="h-6 w-6 text-white/30" />
                                            </motion.div>
                                        </div>
                                        <CardTitle className="text-lg text-white group-hover:text-[#FFD700] transition-colors">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="p-6 pt-0">
                                        <p className="text-white/70 text-sm mb-4">
                                            {item.description}
                                        </p>

                                        {/* Only show stats when hovered */}
                                        <motion.div
                                            className="space-y-2"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={activeCard === index ? {
                                                opacity: 1,
                                                height: 'auto',
                                                transition: { duration: 0.3, delay: 0.1 }
                                            } : {
                                                opacity: 0,
                                                height: 0,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {item.stats.map((stat, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-center"
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={activeCard === index ? {
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: { delay: 0.1 + (i * 0.1) }
                                                    } : {
                                                        x: -10,
                                                        opacity: 0
                                                    }}
                                                >
                                                    <Check className="h-4 w-4 text-[#50C878] mr-2" />
                                                    <span className="text-sm text-white/80">{stat}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </CardContent>

                                    {/* Secondary icon */}
                                    <motion.div
                                        className="absolute bottom-3 right-3 opacity-0"
                                        animate={activeCard === index ? {
                                            opacity: 0.3,
                                            rotate: [0, 15, 0, -15, 0],
                                            scale: [1, 1.1, 1]
                                        } : {
                                            opacity: 0
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: activeCard === index ? Infinity : 0
                                        }}
                                    >
                                        <div className="text-white/30">
                                            {item.secondaryIcon}
                                        </div>
                                    </motion.div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Encryption animation line */}
                <motion.div
                    className="mt-16 relative h-[1px] w-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 0%"]
                        }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#FFD700] w-4 h-4 rounded-full"
                        animate={{
                            x: ["0%", "100%"],
                            scale: [1, 1.5, 1],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    />
                </motion.div>

                {/* Additional security highlight */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <div className="inline-block bg-gradient-to-r from-[#0C183A] to-[#0F172A] p-6 rounded-xl border border-white/5 shadow-lg relative overflow-hidden backdrop-blur-sm">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <pattern id="securityPattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                                    <rect width="1" height="1" fill="white" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#securityPattern)" />
                            </svg>
                        </div>

                        <motion.div
                            className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10"
                        >
                            <div className="flex items-center gap-4">
                                <motion.div
                                    className="h-12 w-12 rounded-full bg-gradient-to-r from-[#FFD700]/20 to-[#50C878]/20 flex items-center justify-center relative"
                                    animate={{
                                        boxShadow: [
                                            "0 0 0px rgba(255, 215, 0, 0.3)",
                                            "0 0 20px rgba(255, 215, 0, 0.5)",
                                            "0 0 0px rgba(255, 215, 0, 0.3)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    >
                                        <LockKeyhole className="h-6 w-6 text-[#FFD700]" />
                                    </motion.div>
                                </motion.div>

                                <div className="text-left">
                                    <p className="font-bold text-white text-lg md:text-xl">Multi-Layer Security</p>
                                    <p className="text-white/70">End-to-end encryption with multi-signature validation</p>
                                </div>
                            </div>

                            <motion.div
                                className="h-12 hidden md:block"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 0.3, scaleX: 1 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                            >
                                <div className="w-[1px] h-full bg-white/20" />
                            </motion.div>

                            <div className="flex items-center gap-4">
                                <motion.div
                                    className="h-12 w-12 rounded-full bg-gradient-to-r from-[#6A3DE8]/20 to-[#00E5BF]/20 flex items-center justify-center relative"
                                    animate={{
                                        boxShadow: [
                                            "0 0 0px rgba(106, 61, 232, 0.3)",
                                            "0 0 20px rgba(106, 61, 232, 0.5)",
                                            "0 0 0px rgba(106, 61, 232, 0.3)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    >
                                        <SearchCode className="h-6 w-6 text-[#6A3DE8]" />
                                    </motion.div>
                                </motion.div>

                                <div className="text-left">
                                    <p className="font-bold text-white text-lg md:text-xl">Open Source Verification</p>
                                    <p className="text-white/70">Transparent code available for community review</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom decoration */}
                        <motion.div
                            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                        >
                            <motion.div
                                className="h-6 w-6 rounded-full bg-[#50C878]/20 flex items-center justify-center"
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Settings className="h-3 w-3 text-[#50C878]" />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Advanced security metrics */}
                <motion.div
                    className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div
                        className="px-6"
                        variants={titleVariants}
                        custom={0}
                    >
                        <motion.div
                            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#50C878]"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            100%
                        </motion.div>
                        <p className="text-white/60 text-sm">Uptime SLA</p>
                    </motion.div>

                    <motion.div
                        className="px-6"
                        variants={titleVariants}
                        custom={1}
                    >
                        <motion.div
                            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#50C878] to-[#6A3DE8]"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        >
                            Zero
                        </motion.div>
                        <p className="text-white/60 text-sm">Security Breaches</p>
                    </motion.div>

                    <motion.div
                        className="px-6"
                        variants={titleVariants}
                        custom={2}
                    >
                        <motion.div
                            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6A3DE8] to-[#00E5BF]"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        >
                            24/7
                        </motion.div>
                        <p className="text-white/60 text-sm">Monitoring</p>
                    </motion.div>

                    <motion.div
                        className="px-6"
                        variants={titleVariants}
                        custom={3}
                    >
                        <motion.div
                            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5BF] to-[#FFD700]"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                        >
                            8+
                        </motion.div>
                        <p className="text-white/60 text-sm">Security Partners</p>
                    </motion.div>
                </motion.div>

                {/* Security commitments */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <Button className="bg-gradient-to-r from-[#FFD700] to-[#50C878] hover:opacity-90 text-slate-900 font-medium shadow-lg py-6 px-8 group relative overflow-hidden">
                        <span className="relative z-10">View Security Audit Reports</span>
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: ["100%", "-100%"] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />
                        <motion.span
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#50C878]"
                            animate={{
                                opacity: [0, 0.8, 0],
                                scaleX: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        />
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SecuritySection;