

// "use client";

// import { motion } from "framer-motion";
// import {
//     Wallet,
//     GraduationCap,
//     CheckCircle2,
//     ArrowRight,
//     ChevronRight,
//     Sparkles,
//     Zap
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// // How It Works Section
// const HowItWorks = () => {
//     // Animation variants
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: { duration: 0.6, ease: "easeOut" }
//         }
//     };

//     const cardVariants = {
//         hidden: { y: 30, opacity: 0 },
//         visible: (custom: number) => ({
//             y: 0,
//             opacity: 1,
//             transition: {
//                 delay: 0.2 * custom,
//                 duration: 0.6,
//                 ease: [0.175, 0.885, 0.32, 1.275]
//             }
//         }),
//         hover: {
//             y: -8,
//             transition: {
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 15
//             }
//         }
//     };

//     const checkVariants = {
//         hidden: { scale: 0, opacity: 0 },
//         visible: (custom: number) => ({
//             scale: 1,
//             opacity: 1,
//             transition: {
//                 delay: 0.1 * custom,
//                 duration: 0.4,
//                 ease: "easeOut"
//             }
//         })
//     };

//     return (
//         <div className="relative py-20 overflow-hidden">
//             {/* Lighter background */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#EBF2FA] to-[#DCE6F3] -z-10" />

//             {/* Subtle background pattern with slightly increased opacity */}
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzY0NzQ4QiIgc3Ryb2tlLXdpZHRoPSIwLjUiPjxwYXRoIGQ9Ik0zNiAxOGgxOHYxOEgzNnpNMTggMzZoMTh2MThoLTE4ek0zNiAwaDZ2NmgtNnpNMCA0MGg2djZIMHpNMCAxNmg2djZIMHpNNDIgMGg2djZoLTZ6TTI0IDBoNnY2aC02ek02IDBoNnY2SDZ6TTYgMThoNnY2SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-[0.05] -z-10" />

//             {/* Brand color accents as subtle shapes */}
//             <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#6A3DE8]/5 rounded-full blur-[150px] opacity-10 -z-5" />
//             <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#00E5BF]/5 rounded-full blur-[150px] opacity-10 -z-5" />
//             <div className="absolute top-40 right-1/3 w-60 h-60 bg-[#F5CB5C]/5 rounded-full blur-[120px] opacity-10 -z-5" />
//             <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-[#00E676]/5 rounded-full blur-[100px] opacity-10 -z-5" />

//             <div className="container mx-auto px-6">
//                 <motion.div
//                     className="text-center mb-12"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: "-100px" }}
//                     variants={containerVariants}
//                 >
//                     <motion.div variants={itemVariants}>
//                         <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#F5CB5C]/20 to-[#00E676]/20 rounded-full text-[#0C183A] text-sm font-medium mb-3 shadow-sm">
//                             <Sparkles className="h-3.5 w-3.5 inline-block mr-1" />
//                             Three Simple Steps
//                         </span>
//                     </motion.div>
//                     <motion.h2
//                         className="text-3xl md:text-4xl font-bold mb-4 text-[#0C183A]"
//                         variants={itemVariants}
//                     >
//                         How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3DE8] to-[#00E5BF]">EduStake</span> Works
//                     </motion.h2>
//                     <motion.p
//                         className="text-lg text-[#334155] max-w-2xl mx-auto"
//                         variants={itemVariants}
//                     >
//                         Our platform combines education with staking to create a rewarding learning experience.
//                     </motion.p>
//                 </motion.div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-7"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: "-100px" }}
//                     variants={containerVariants}
//                 >
//                     <motion.div
//                         variants={cardVariants}
//                         custom={0}
//                         whileHover="hover"
//                     >
//                         <Card className="border border-[#F5CB5C]/20 shadow-lg bg-white/95 backdrop-blur-sm text-[#334155] h-full relative overflow-hidden group rounded-xl">
//                             {/* Enhanced gradient on hover */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-[#F5CB5C]/10 via-[#F5CB5C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                             {/* Enhanced top-right accent */}
//                             <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#F5CB5C]/10 to-transparent rounded-bl-full" />

//                             <CardHeader className="relative pb-3">
//                                 {/* Enhanced hover glow effect */}
//                                 <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#F5CB5C]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                                 <div className="flex justify-between items-start">
//                                     <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#F5CB5C]/15 to-[#F5CB5C]/5 flex items-center justify-center mb-4 border border-[#F5CB5C]/20 shadow-inner group-hover:shadow-[0_0_15px_rgba(245,203,92,0.2)] transition-shadow duration-300">
//                                         <Wallet className="h-7 w-7 text-[#F5CB5C]" />
//                                     </div>
//                                     <span className="text-lg font-bold text-[#CBD5E1] mr-1">01</span>
//                                 </div>

//                                 <CardTitle className="text-xl text-[#0C183A] group-hover:text-[#F5CB5C] transition-colors">
//                                     Stake Your EDU
//                                 </CardTitle>
//                                 <CardDescription className="text-[#64748B] group-hover:text-[#334155] transition-colors">
//                                     Deposit your EDU tokens in our smart-contract-secured staking pools.
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="pt-0">
//                                 <ul className="space-y-3">
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={0}
//                                     >
//                                         <div className="bg-[#F5CB5C]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#F5CB5C]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#F5CB5C]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Choose from multiple staking pools</span>
//                                     </motion.li>
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={1}
//                                     >
//                                         <div className="bg-[#F5CB5C]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#F5CB5C]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#F5CB5C]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Earn base APY from 10-15%</span>
//                                     </motion.li>
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={2}
//                                     >
//                                         <div className="bg-[#F5CB5C]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#F5CB5C]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#F5CB5C]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Lock periods from 30 to 120 days</span>
//                                     </motion.li>
//                                 </ul>

//                                 {/* Enhanced button-like hover element */}
//                                 <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                                     <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#F5CB5C]/20 to-[#F5CB5C]/10 flex items-center justify-center shadow-sm">
//                                         <ChevronRight className="h-5 w-5 text-[#F5CB5C]" />
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </motion.div>

//                     <motion.div
//                         variants={cardVariants}
//                         custom={1}
//                         whileHover="hover"
//                     >
//                         <Card className="border border-[#00E676]/20 shadow-lg bg-white/95 backdrop-blur-sm text-[#334155] h-full relative overflow-hidden group rounded-xl">
//                             {/* Enhanced gradient on hover */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-[#00E676]/10 via-[#00E676]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                             {/* Enhanced top-right accent */}
//                             <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#00E676]/10 to-transparent rounded-bl-full" />

//                             <CardHeader className="relative pb-3">
//                                 {/* Enhanced hover glow effect */}
//                                 <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#00E676]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                                 <div className="flex justify-between items-start">
//                                     <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#00E676]/15 to-[#00E676]/5 flex items-center justify-center mb-4 border border-[#00E676]/20 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,230,118,0.2)] transition-shadow duration-300">
//                                         <GraduationCap className="h-7 w-7 text-[#00E676]" />
//                                     </div>
//                                     <span className="text-lg font-bold text-[#CBD5E1] mr-1">02</span>
//                                 </div>

//                                 <CardTitle className="text-xl text-[#0C183A] group-hover:text-[#00E676] transition-colors">
//                                     Complete Courses
//                                 </CardTitle>
//                                 <CardDescription className="text-[#64748B] group-hover:text-[#334155] transition-colors">
//                                     Enhance your knowledge by taking educational courses on EDU Chain.
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="pt-0">
//                                 <ul className="space-y-3">
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={3}
//                                     >
//                                         <div className="bg-[#00E676]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#00E676]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#00E676]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Learn about blockchain & Web3</span>
//                                     </motion.li>
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={4}
//                                     >
//                                         <div className="bg-[#00E676]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#00E676]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#00E676]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Earn points for completed modules</span>
//                                     </motion.li>
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={5}
//                                     >
//                                         <div className="bg-[#00E676]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#00E676]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#00E676]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Unlock achievement badges</span>
//                                     </motion.li>
//                                 </ul>

//                                 {/* Enhanced button-like hover element */}
//                                 <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                                     <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#00E676]/20 to-[#00E676]/10 flex items-center justify-center shadow-sm">
//                                         <ChevronRight className="h-5 w-5 text-[#00E676]" />
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </motion.div>

//                     <motion.div
//                         variants={cardVariants}
//                         custom={2}
//                         whileHover="hover"
//                     >
//                         <Card className="border border-[#6A3DE8]/20 shadow-lg bg-white/95 backdrop-blur-sm text-[#334155] h-full relative overflow-hidden group rounded-xl">
//                             {/* Enhanced gradient on hover */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-[#6A3DE8]/10 via-[#6A3DE8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                             {/* Enhanced top-right accent */}
//                             <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#6A3DE8]/10 to-transparent rounded-bl-full" />

//                             <CardHeader className="relative pb-3">
//                                 {/* Enhanced hover glow effect */}
//                                 <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#6A3DE8]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                                 <div className="flex justify-between items-start">
//                                     <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#6A3DE8]/15 to-[#6A3DE8]/5 flex items-center justify-center mb-4 border border-[#6A3DE8]/20 shadow-inner group-hover:shadow-[0_0_15px_rgba(106,61,232,0.2)] transition-shadow duration-300">
//                                         <Zap className="h-7 w-7 text-[#6A3DE8]" />
//                                     </div>
//                                     <span className="text-lg font-bold text-[#CBD5E1] mr-1">03</span>
//                                 </div>

//                                 <CardTitle className="text-xl text-[#0C183A] group-hover:text-[#6A3DE8] transition-colors">
//                                     Boost Your Rewards
//                                 </CardTitle>
//                                 <CardDescription className="text-[#64748B] group-hover:text-[#334155] transition-colors">
//                                     Your educational achievements increase your staking rewards.
//                                 </CardDescription>
//                             </CardHeader>

//                             <CardContent className="pt-0">
//                                 <ul className="space-y-3">
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={6}
//                                     >
//                                         <div className="bg-[#6A3DE8]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#6A3DE8]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#6A3DE8]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Multipliers from 1.1x to 2x</span>
//                                     </motion.li>
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={7}
//                                     >
//                                         <div className="bg-[#6A3DE8]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#6A3DE8]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#6A3DE8]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Automatic reward calculation</span>
//                                     </motion.li>
//                                     <motion.li
//                                         className="flex items-start"
//                                         variants={checkVariants}
//                                         custom={8}
//                                     >
//                                         <div className="bg-[#6A3DE8]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#6A3DE8]/20 transition-colors duration-300">
//                                             <CheckCircle2 className="h-4 w-4 text-[#6A3DE8]" />
//                                         </div>
//                                         <span className="text-[#64748B] group-hover:text-[#334155] transition-colors">Track progress on leaderboards</span>
//                                     </motion.li>
//                                 </ul>

//                                 {/* Enhanced button-like hover element */}
//                                 <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                                     <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#6A3DE8]/20 to-[#6A3DE8]/10 flex items-center justify-center shadow-sm">
//                                         <ChevronRight className="h-5 w-5 text-[#6A3DE8]" />
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </motion.div>
//                 </motion.div>

//                 <motion.div
//                     className="mt-12 text-center"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     transition={{ duration: 0.6, delay: 0.6 }}
//                 >
//                     <Button
//                         className="bg-gradient-to-r from-[#6A3DE8] to-[#00E5BF] hover:opacity-90 text-white font-medium shadow-lg shadow-[#6A3DE8]/10 group rounded-full px-6"
//                         size="lg"
//                     >
//                         <span className="group-hover:mr-2 transition-all">Start Your Learning Journey</span>
//                         <motion.span
//                             initial={{ opacity: 0, x: -10 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.3, delay: 0.1 }}
//                             className="opacity-0 group-hover:opacity-100"
//                         >
//                             <ArrowRight className="h-4 w-4 inline ml-1" />
//                         </motion.span>
//                     </Button>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default HowItWorks;

"use client";

import { motion } from "framer-motion";
import {
    Wallet,
    GraduationCap,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Sparkles,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// How It Works Section
const HowItWorks = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2 * custom,
                duration: 0.6,
                ease: [0.175, 0.885, 0.32, 1.275]
            }
        }),
        hover: {
            y: -8,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    const checkVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.1 * custom,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="relative py-20 overflow-hidden">
            {/* Dark background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080F1D] to-[#0D1524] -z-10" />

            {/* Subtle background pattern with slightly increased opacity */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiPjxwYXRoIGQ9Ik0zNiAxOGgxOHYxOEgzNnpNMTggMzZoMTh2MThoLTE4ek0zNiAwaDZ2NmgtNnpNMCA0MGg2djZIMHpNMCAxNmg2djZIMHpNNDIgMGg2djZoLTZ6TTI0IDBoNnY2aC02ek02IDBoNnY2SDZ6TTYgMThoNnY2SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-[0.03] -z-10" />

            {/* Brand color accents as subtle shapes */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#6A3DE8]/5 rounded-full blur-[150px] opacity-20 -z-5" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#00E5BF]/5 rounded-full blur-[150px] opacity-20 -z-5" />
            <div className="absolute top-40 right-1/3 w-60 h-60 bg-[#F5CB5C]/5 rounded-full blur-[120px] opacity-20 -z-5" />
            <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-[#00E676]/5 rounded-full blur-[100px] opacity-20 -z-5" />

            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#F5CB5C]/10 to-[#00E676]/10 rounded-full text-[#F5CB5C] text-sm font-medium mb-3 shadow-sm">
                            <Sparkles className="h-3.5 w-3.5 inline-block mr-1" />
                            Three Simple Steps
                        </span>
                    </motion.div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-white"
                        variants={itemVariants}
                    >
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5CB5C] to-[#00E676]">EduStake</span> Works
                    </motion.h2>
                    <motion.p
                        className="text-lg text-white/70 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Our platform combines education with staking to create a rewarding learning experience.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-7"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={cardVariants}
                        custom={0}
                        whileHover="hover"
                    >
                        <Card className="border-0 shadow-xl bg-gradient-to-br from-[#111827]/90 to-[#0F172A]/90 backdrop-blur-sm text-white relative overflow-hidden h-full group rounded-xl">
                            {/* Enhanced gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F5CB5C]/10 via-[#F5CB5C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Enhanced top-right accent */}
                            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#F5CB5C]/10 to-transparent rounded-bl-full opacity-70" />

                            <CardHeader className="relative pb-3">
                                {/* Enhanced hover glow effect */}
                                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#F5CB5C]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex justify-between items-start">
                                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#F5CB5C]/15 to-[#F5CB5C]/5 flex items-center justify-center mb-4 border border-[#F5CB5C]/20 shadow-inner group-hover:shadow-[0_0_15px_rgba(245,203,92,0.2)] transition-shadow duration-300">
                                        <Wallet className="h-7 w-7 text-[#F5CB5C]" />
                                    </div>
                                    <span className="text-lg font-bold text-white/20 mr-1">01</span>
                                </div>

                                <CardTitle className="text-xl text-white group-hover:text-[#F5CB5C] transition-colors">
                                    Stake Your EDU
                                </CardTitle>
                                <CardDescription className="text-white/70 group-hover:text-white/80 transition-colors">
                                    Deposit your EDU tokens in our smart-contract-secured staking pools.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <ul className="space-y-3">
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={0}
                                    >
                                        <div className="bg-[#F5CB5C]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#F5CB5C]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#F5CB5C]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Choose from multiple staking pools</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={1}
                                    >
                                        <div className="bg-[#F5CB5C]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#F5CB5C]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#F5CB5C]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Earn base APY from 10-15%</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={2}
                                    >
                                        <div className="bg-[#F5CB5C]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#F5CB5C]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#F5CB5C]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Lock periods from 30 to 120 days</span>
                                    </motion.li>
                                </ul>

                                {/* Enhanced button-like hover element */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#F5CB5C]/20 to-[#F5CB5C]/10 flex items-center justify-center shadow-sm">
                                        <ChevronRight className="h-5 w-5 text-[#F5CB5C]" />
                                    </div>
                                </div>
                            </CardContent>

                            {/* Edge highlights */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </Card>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        custom={1}
                        whileHover="hover"
                    >
                        <Card className="border-0 shadow-xl bg-gradient-to-br from-[#111827]/90 to-[#0F172A]/90 backdrop-blur-sm text-white relative overflow-hidden h-full group rounded-xl">
                            {/* Enhanced gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00E676]/10 via-[#00E676]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Enhanced top-right accent */}
                            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#00E676]/10 to-transparent rounded-bl-full opacity-70" />

                            <CardHeader className="relative pb-3">
                                {/* Enhanced hover glow effect */}
                                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#00E676]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex justify-between items-start">
                                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#00E676]/15 to-[#00E676]/5 flex items-center justify-center mb-4 border border-[#00E676]/20 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,230,118,0.2)] transition-shadow duration-300">
                                        <GraduationCap className="h-7 w-7 text-[#00E676]" />
                                    </div>
                                    <span className="text-lg font-bold text-white/20 mr-1">02</span>
                                </div>

                                <CardTitle className="text-xl text-white group-hover:text-[#00E676] transition-colors">
                                    Complete Courses
                                </CardTitle>
                                <CardDescription className="text-white/70 group-hover:text-white/80 transition-colors">
                                    Enhance your knowledge by taking educational courses on EDU Chain.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <ul className="space-y-3">
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={3}
                                    >
                                        <div className="bg-[#00E676]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#00E676]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#00E676]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Learn about blockchain & Web3</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={4}
                                    >
                                        <div className="bg-[#00E676]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#00E676]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#00E676]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Earn points for completed modules</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={5}
                                    >
                                        <div className="bg-[#00E676]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#00E676]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#00E676]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Unlock achievement badges</span>
                                    </motion.li>
                                </ul>

                                {/* Enhanced button-like hover element */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#00E676]/20 to-[#00E676]/10 flex items-center justify-center shadow-sm">
                                        <ChevronRight className="h-5 w-5 text-[#00E676]" />
                                    </div>
                                </div>
                            </CardContent>

                            {/* Edge highlights */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </Card>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        custom={2}
                        whileHover="hover"
                    >
                        <Card className="border-0 shadow-xl bg-gradient-to-br from-[#111827]/90 to-[#0F172A]/90 backdrop-blur-sm text-white relative overflow-hidden h-full group rounded-xl">
                            {/* Enhanced gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6A3DE8]/10 via-[#6A3DE8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Enhanced top-right accent */}
                            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#6A3DE8]/10 to-transparent rounded-bl-full opacity-70" />

                            <CardHeader className="relative pb-3">
                                {/* Enhanced hover glow effect */}
                                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#6A3DE8]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex justify-between items-start">
                                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#6A3DE8]/15 to-[#6A3DE8]/5 flex items-center justify-center mb-4 border border-[#6A3DE8]/20 shadow-inner group-hover:shadow-[0_0_15px_rgba(106,61,232,0.2)] transition-shadow duration-300">
                                        <Zap className="h-7 w-7 text-[#6A3DE8]" />
                                    </div>
                                    <span className="text-lg font-bold text-white/20 mr-1">03</span>
                                </div>

                                <CardTitle className="text-xl text-white group-hover:text-[#6A3DE8] transition-colors">
                                    Boost Your Rewards
                                </CardTitle>
                                <CardDescription className="text-white/70 group-hover:text-white/80 transition-colors">
                                    Your educational achievements increase your staking rewards.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <ul className="space-y-3">
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={6}
                                    >
                                        <div className="bg-[#6A3DE8]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#6A3DE8]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#6A3DE8]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Multipliers from 1.1x to 2x</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={7}
                                    >
                                        <div className="bg-[#6A3DE8]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#6A3DE8]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#6A3DE8]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Automatic reward calculation</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        variants={checkVariants}
                                        custom={8}
                                    >
                                        <div className="bg-[#6A3DE8]/10 rounded-full p-1 mr-2 mt-0.5 shrink-0 group-hover:bg-[#6A3DE8]/20 transition-colors duration-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#6A3DE8]" />
                                        </div>
                                        <span className="text-white/70 group-hover:text-white/90 transition-colors">Track progress on leaderboards</span>
                                    </motion.li>
                                </ul>

                                {/* Enhanced button-like hover element */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#6A3DE8]/20 to-[#6A3DE8]/10 flex items-center justify-center shadow-sm">
                                        <ChevronRight className="h-5 w-5 text-[#6A3DE8]" />
                                    </div>
                                </div>
                            </CardContent>

                            {/* Edge highlights */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </Card>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Button
                        className="bg-gradient-to-r from-[#F5CB5C] to-[#00E676] hover:opacity-90 text-[#0F172A] font-medium shadow-xl shadow-[#F5CB5C]/10 group rounded-full px-6"
                        size="lg"
                    >
                        <span className="group-hover:mr-2 transition-all">Start Your Learning Journey</span>
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="opacity-0 group-hover:opacity-100"
                        >
                            <ArrowRight className="h-4 w-4 inline ml-1" />
                        </motion.span>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default HowItWorks;