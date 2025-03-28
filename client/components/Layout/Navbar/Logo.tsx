"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo({ size = "default" }: { size?: "default" | "small" | "large" }) {
    const logoRef = useRef<HTMLDivElement>(null);

    // Size classes based on prop
    const sizeClasses = {
        small: "h-8 w-8",
        default: "h-10 w-10",
        large: "h-12 w-12"
    };

    // Animation variants
    const svgVariants = {
        hidden: { rotate: -5, opacity: 0 },
        visible: {
            rotate: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    const particleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (custom: number) => ({
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [-2, -8, -2],
            transition: {
                duration: 3,
                repeat: Infinity,
                delay: custom * 0.2,
                ease: "easeInOut"
            }
        })
    };

    return (
        <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
                ref={logoRef}
                className={`relative ${sizeClasses[size || "default"]}`}
                initial="hidden"
                animate="visible"
                variants={svgVariants}
                whileHover={{ scale: 1.05 }}
            >
                <svg
                    viewBox="0 0 60 60"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Gradient definitions */}
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0056E0" />
                            <stop offset="50%" stopColor="#6A3DE8" /> {/* Light indigo */}
                            <stop offset="100%" stopColor="#00E5BF" />
                        </linearGradient>
                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" /> {/* Yellow */}
                            <stop offset="100%" stopColor="#50C878" /> {/* Green */}
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="1" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            <feFlood floodColor="#FFD700" floodOpacity="0.3" result="color" />
                            <feComposite in="color" in2="SourceGraphic" operator="in" />
                        </filter>
                    </defs>

                    {/* Hexagon base with gradient */}
                    <motion.path
                        id="hexagon"
                        d="M30 4L53.5 17.5V44.5L30 58L6.5 44.5V17.5L30 4Z"
                        fill="url(#logoGradient)"
                        stroke="white"
                        strokeWidth="1.5"
                        variants={pathVariants}
                        filter="url(#glow)"
                    />

                    {/* Accent line */}
                    <motion.path
                        d="M20 30H40"
                        stroke="url(#textGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 1, 0.7],
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: 1
                            }
                        }}
                    />

                    {/* Particles */}
                    <motion.circle className="particle" cx="15" cy="20" r="1.5" fill="#FFD700" variants={particleVariants} custom={0} />
                    <motion.circle className="particle" cx="45" cy="20" r="1.5" fill="#50C878" variants={particleVariants} custom={1} />
                    <motion.circle className="particle" cx="30" cy="15" r="1.5" fill="#6A3DE8" variants={particleVariants} custom={2} />
                    <motion.circle className="particle" cx="20" cy="40" r="1.5" fill="#FFD700" variants={particleVariants} custom={3} />
                    <motion.circle className="particle" cx="40" cy="40" r="1.5" fill="#50C878" variants={particleVariants} custom={4} />

                    {/* E letter */}
                    <motion.text
                        id="e-text"
                        x="30"
                        y="38"
                        fontSize="24"
                        fontWeight="bold"
                        fill="url(#textGradient)"
                        textAnchor="middle"
                        filter="url(#innerGlow)"
                        variants={textVariants}
                    >
                        E
                    </motion.text>
                </svg>
            </motion.div>

            <motion.span
                className="text-white font-bold text-xl"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#50C878]"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    Edu
                </motion.span>
                <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5BF] to-[#6A3DE8]"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                >
                    Stake
                </motion.span>
            </motion.span>
        </Link>
    );
}