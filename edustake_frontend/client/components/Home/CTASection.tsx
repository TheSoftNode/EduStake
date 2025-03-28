"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {
    BookOpen,
    Users,
    ExternalLink,
    ArrowRight,
    Sparkles,
    Rocket,
    GraduationCap,
    BarChart,
    Zap,
    Star,
    Award,
    BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

// CTA Section
const CTASection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
    const controls = useAnimation();

    // Handle mouse tracking for interactive elements
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const element = sectionRef.current as HTMLElement | null;

            if (element) {
                const rect = element.getBoundingClientRect();
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Trigger animations when section is in view
    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
        }
    };

    const buttonVariants: Variants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3, ease: "easeOut" }
        },
        tap: {
            scale: 0.98,
            transition: { duration: 0.1 }
        }
    };

    const linkVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6 + (custom * 0.1),
                duration: 0.5
            }
        }),
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 }
        }
    };

    const glowVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, delay: 0.5 }
        }
    };

    // Floating objects for visual interest
    const floatingObjects = [
        { icon: <GraduationCap className="h-6 w-6 text-[#FFD700]/80" />, x: "20%", y: "20%", delay: 0 },
        { icon: <BarChart className="h-5 w-5 text-[#50C878]/80" />, x: "80%", y: "15%", delay: 0.3 },
        { icon: <Award className="h-7 w-7 text-[#6A3DE8]/80" />, x: "15%", y: "75%", delay: 0.1 },
        { icon: <Zap className="h-5 w-5 text-[#00E5BF]/80" />, x: "85%", y: "75%", delay: 0.5 },
        { icon: <Star className="h-4 w-4 text-[#FFD700]/80" />, x: "65%", y: "85%", delay: 0.2 },
        { icon: <BadgeCheck className="h-4 w-4 text-[#50C878]/80" />, x: "35%", y: "85%", delay: 0.4 },
    ];

    return (
        <motion.div
            ref={sectionRef}
            className="relative py-28 overflow-hidden"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0C183A] to-[#091429] -z-20" />

            {/* Animated background gradient that follows mouse */}
            <motion.div
                className="absolute inset-0 -z-10"
                style={{
                    background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.1), rgba(106, 61, 232, 0.15), transparent)`,
                }}
                variants={glowVariants}
            />

            {/* Background pattern */}
            <div className="absolute inset-0 -z-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.05" />
                            <stop offset="50%" stopColor="#50C878" stopOpacity="0.03" />
                            <stop offset="100%" stopColor="#6A3DE8" stopOpacity="0.05" />
                        </linearGradient>
                        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#ctaGradient)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridPattern)" />
                </svg>
            </div>

            {/* Floating animated objects */}
            {floatingObjects.map((obj, index) => (
                <motion.div
                    key={index}
                    className="absolute opacity-0"
                    style={{
                        left: obj.x,
                        top: obj.y,
                        zIndex: -5
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        y: [0, -40, -80],
                        rotate: [0, Math.random() * 90 - 45]
                    }}
                    transition={{
                        duration: 10 + Math.random() * 5,
                        delay: obj.delay,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {obj.icon}
                </motion.div>
            ))}

            {/* Animated glow effects */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#FFD700]/5 to-[#6A3DE8]/5 blur-3xl -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#50C878]/5 to-[#00E5BF]/5 blur-3xl -z-10"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 5 }}
            />

            {/* Content container */}
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    variants={itemVariants}
                    className="inline-block mb-4"
                >
                    <motion.div
                        className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-[#FFD700]/10 to-[#6A3DE8]/10 rounded-full mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Rocket className="h-4 w-4 text-[#FFD700] mr-2" />
                        <span className="text-[#FFD700] text-sm font-medium">Start Your Journey</span>
                        <motion.div
                            className="ml-2 h-1.5 w-1.5 rounded-full bg-[#50C878]"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        />
                    </motion.div>
                </motion.div>

                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
                    variants={itemVariants}
                >
                    Ready to <span className="relative">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#50C878]">
                            Start Earning
                        </span>
                        <motion.span
                            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FFD700]/20 to-[#50C878]/20 blur-sm -z-10"
                            animate={{
                                opacity: [0.3, 0.7, 0.3],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "mirror"
                            }}
                        />
                    </span> While <span className="relative">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6A3DE8] to-[#00E5BF]">
                            Learning
                        </span>
                        <motion.span
                            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#6A3DE8]/20 to-[#00E5BF]/20 blur-sm -z-10"
                            animate={{
                                opacity: [0.3, 0.7, 0.3],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: 1.5
                            }}
                        />
                    </span>?
                </motion.h2>

                <motion.p
                    className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    Join EduStake today and transform your educational journey into valuable rewards
                    while mastering blockchain and Web3 technologies.
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center gap-5"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        custom={0}
                    >
                        <Button
                            size="lg"
                            className="relative bg-gradient-to-r from-[#FFD700] to-[#50C878] hover:opacity-90 text-slate-900 font-medium px-8 py-6 overflow-hidden group"
                        >
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -z-10"
                                initial={{ x: "-100%" }}
                                animate={{ x: ["100%", "-100%"] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 5
                                }}
                            />
                            <span className="mr-2">Get Started Now</span>
                            <motion.span
                                animate={{
                                    x: [0, 5, 0],
                                    opacity: [1, 1, 1]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 2.5
                                }}
                            >
                                <ArrowRight className="h-5 w-5 inline" />
                            </motion.span>
                            <motion.div
                                className="absolute -top-1 -right-1 h-6 w-6"
                                animate={{
                                    rotate: 360
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <Sparkles className="h-3 w-3 text-slate-900/30" />
                            </motion.div>
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        custom={1}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:border-white/40 px-8 py-6 group"
                        >
                            <span>Learn More</span>
                            <motion.span
                                className="opacity-0 scale-0 -ml-2 duration-300 transition-all group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2"
                            >
                                <ArrowRight className="h-5 w-5 inline" />
                            </motion.span>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Animated separator */}
                <motion.div
                    className="w-full max-w-md mx-auto h-[1px] my-12 relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                            backgroundPosition: ["200% center", "-200% center"],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-8 items-center"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={linkVariants}
                        whileHover="hover"
                        custom={0}
                    >
                        <Link href="#" className="text-white/70 hover:text-[#FFD700] flex items-center transition-colors">
                            <div className="relative">
                                <BookOpen className="h-5 w-5 mr-2" />
                                <motion.div
                                    className="absolute -inset-1 rounded-full bg-[#FFD700]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0, 0.2, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                />
                            </div>
                            <span>Documentation</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={linkVariants}
                        whileHover="hover"
                        custom={1}
                    >
                        <Link href="#" className="text-white/70 hover:text-[#50C878] flex items-center transition-colors">
                            <div className="relative">
                                <Users className="h-5 w-5 mr-2" />
                                <motion.div
                                    className="absolute -inset-1 rounded-full bg-[#50C878]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0, 0.2, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 0.3
                                    }}
                                />
                            </div>
                            <span>Community</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={linkVariants}
                        whileHover="hover"
                        custom={2}
                    >
                        <Link href="#" className="text-white/70 hover:text-[#6A3DE8] flex items-center transition-colors">
                            <div className="relative">
                                <ExternalLink className="h-5 w-5 mr-2" />
                                <motion.div
                                    className="absolute -inset-1 rounded-full bg-[#6A3DE8]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0, 0.2, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 0.6
                                    }}
                                />
                            </div>
                            <span>EDU Chain</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Decorative bottom wave */}
                <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden -z-10">
                    <svg
                        viewBox="0 0 1440 320"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-0"
                        preserveAspectRatio="none"
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <path
                            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            fill="url(#ctaBottomGradient)"
                        />
                        <defs>
                            <linearGradient id="ctaBottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0C183A" stopOpacity="0.05" />
                                <stop offset="50%" stopColor="#050A21" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#0C183A" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

export default CTASection;