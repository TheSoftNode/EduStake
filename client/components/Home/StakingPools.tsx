// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import {
//     Sparkles,
//     ChevronRight,
//     ArrowRight,
//     Clock,
//     BadgeDollarSign,
//     Lock,
//     BarChart,
//     Zap
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // Staking Pools Section
// const StakingPools = () => {
//     const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//     const [activeTab, setActiveTab] = useState("all");

//     // Animation variants
//     const containerVariants: Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//                 delayChildren: 0.1
//             }
//         }
//     };

//     const itemVariants: Variants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: { duration: 0.6, ease: "easeOut" }
//         }
//     };

//     const cardContainerVariants: Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1,
//                 delayChildren: 0.3
//             }
//         }
//     };

//     const cardVariants: Variants = {
//         hidden: (custom: number) => ({
//             y: 50,
//             opacity: 0,
//             rotateY: custom % 2 === 0 ? -5 : 5,
//             rotateX: 5
//         }),
//         visible: (custom: number) => ({
//             y: 0,
//             opacity: 1,
//             rotateY: 0,
//             rotateX: 0,
//             transition: {
//                 type: "spring",
//                 damping: 20,
//                 stiffness: 150,
//                 delay: 0.1 * custom,
//                 duration: 0.6
//             }
//         }),
//         hover: {
//             y: -10,
//             scale: 1.02,
//             transition: {
//                 type: "spring",
//                 damping: 10,
//                 stiffness: 200
//             }
//         }
//     };

//     const statsVariants: Variants = {
//         hidden: { y: 15, opacity: 0 },
//         visible: (custom: number) => ({
//             y: 0,
//             opacity: 1,
//             transition: {
//                 delay: 0.2 + (custom * 0.1),
//                 duration: 0.4,
//                 ease: "easeOut"
//             }
//         })
//     };

//     const pulseAnimation: Variants = {
//         initial: { opacity: 0.7, scale: 1 },
//         animate: {
//             opacity: [0.7, 1, 0.7],
//             scale: [1, 1.05, 1],
//             transition: {
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatType: "mirror"
//             }
//         }
//     };

//     const glowVariants: Variants = {
//         initial: { opacity: 0, scale: 0.5 },
//         animate: (custom: number) => ({
//             opacity: [0, 0.7, 0],
//             scale: [0.5, 1.2, 0.5],
//             transition: {
//                 duration: 3,
//                 delay: custom * 0.3,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//             }
//         })
//     };

//     const tabTransition: Variants = {
//         initial: { opacity: 0, y: 20 },
//         animate: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.5 }
//         },
//         exit: {
//             opacity: 0,
//             y: -20,
//             transition: { duration: 0.3 }
//         }
//     };

//     // Custom colors for each level
//     const levelColors = {
//         "Beginner": {
//             bg: "bg-[#50C878]/10",
//             text: "text-[#50C878]",
//             glow: "from-[#50C878]/20 to-[#FFD700]/10"
//         },
//         "Intermediate": {
//             bg: "bg-[#6A3DE8]/10",
//             text: "text-[#6A3DE8]",
//             glow: "from-[#6A3DE8]/20 to-[#00E5BF]/10"
//         },
//         "Advanced": {
//             bg: "bg-[#FFD700]/10",
//             text: "text-[#FFD700]",
//             glow: "from-[#FFD700]/20 to-[#50C878]/10"
//         },
//         "Specialized": {
//             bg: "bg-[#00E5BF]/10",
//             text: "text-[#00E5BF]",
//             glow: "from-[#00E5BF]/20 to-[#6A3DE8]/10"
//         }
//     };

//     // Pool data
//     const poolsData = [
//         {
//             title: "Learn & Earn Basic",
//             description: "Perfect for beginners starting their journey",
//             level: "Beginner",
//             apy: "10-12%",
//             lockPeriod: "30 days",
//             minStake: "100 EDU",
//             maxBoost: "1.2x",
//             course: "Blockchain 101",
//             boostEffect: "1.2x boost on rewards"
//         },
//         {
//             title: "DeFi Scholar",
//             description: "For those interested in DeFi concepts",
//             level: "Intermediate",
//             apy: "12-15%",
//             lockPeriod: "60 days",
//             minStake: "250 EDU",
//             maxBoost: "1.5x",
//             course: "DeFi Fundamentals",
//             boostEffect: "1.5x boost on rewards"
//         },
//         {
//             title: "EDU Chain Champions",
//             description: "Our premium pool for dedicated learners",
//             level: "Advanced",
//             apy: "15-18%",
//             lockPeriod: "90 days",
//             minStake: "500 EDU",
//             maxBoost: "2x",
//             course: "EDU Chain Mastery",
//             boostEffect: "2x boost on rewards"
//         }
//     ];

//     // Additional tab-specific pool data
//     const beginnerPools = [
//         {
//             title: "Learn & Earn Basic",
//             description: "Perfect for beginners starting their journey",
//             level: "Beginner",
//             apy: "10-12%",
//             lockPeriod: "30 days",
//             minStake: "100 EDU",
//             maxBoost: "1.2x",
//             course: "Blockchain 101",
//             boostEffect: "1.2x boost on rewards"
//         },
//         {
//             title: "Starter Pool",
//             description: "Entry-level rewards with minimal commitment",
//             level: "Beginner",
//             apy: "8-10%",
//             lockPeriod: "15 days",
//             minStake: "50 EDU",
//             maxBoost: "1.1x",
//             course: "Crypto Basics",
//             boostEffect: "1.1x boost on rewards"
//         }
//     ];

//     const advancedPools = [
//         {
//             title: "EDU Chain Champions",
//             description: "Our premium pool for dedicated learners",
//             level: "Advanced",
//             apy: "15-18%",
//             lockPeriod: "90 days",
//             minStake: "500 EDU",
//             maxBoost: "2x",
//             course: "EDU Chain Mastery",
//             boostEffect: "2x boost on rewards"
//         },
//         {
//             title: "Pro Staker Elite",
//             description: "Maximum rewards for committed educators",
//             level: "Advanced",
//             apy: "18-22%",
//             lockPeriod: "120 days",
//             minStake: "1000 EDU",
//             maxBoost: "2.5x",
//             course: "Advanced Blockchain Architecture",
//             boostEffect: "2.5x boost on rewards"
//         }
//     ];

//     const specializedPools = [
//         {
//             title: "DeFi Developer Pool",
//             description: "For smart contract developers",
//             level: "Specialized",
//             apy: "16-20%",
//             lockPeriod: "60 days",
//             minStake: "350 EDU",
//             maxBoost: "1.8x",
//             course: "Smart Contract Development",
//             boostEffect: "1.8x boost on rewards"
//         },
//         {
//             title: "Blockchain Analyst Pool",
//             description: "For data and market analysts",
//             level: "Specialized",
//             apy: "14-18%",
//             lockPeriod: "45 days",
//             minStake: "300 EDU",
//             maxBoost: "1.7x",
//             course: "On-Chain Analytics",
//             boostEffect: "1.7x boost on rewards"
//         }
//     ];

//     const handleTabChange = (value: string) => {
//         setActiveTab(value);
//     };

//     // Function to render pool cards based on the pool data
//     const renderPoolCards = (pools: typeof poolsData) => (
//         <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-5"
//             variants={cardContainerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//         >
//             {pools.map((pool, index) => (
//                 <motion.div
//                     key={index}
//                     custom={index}
//                     variants={cardVariants}
//                     whileHover="hover"
//                     onHoverStart={() => setHoveredCard(index)}
//                     onHoverEnd={() => setHoveredCard(null)}
//                     className="perspective-1000"
//                 >
//                     <Card className="border border-[#6A3DE8]/10 shadow-lg bg-white/90 backdrop-blur-sm text-[#1E293B] relative overflow-hidden h-full transform-gpu transition-all duration-200">
//                         {/* Background subtle gradient effect */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F7F9FE] -z-10" />
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6A3DE8]/5 to-transparent rounded-bl-full opacity-70" />

//                         {/* Animated glow effect on hover */}
//                         {hoveredCard === index && (
//                             <>
//                                 <motion.div
//                                     className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${levelColors[pool.level as keyof typeof levelColors].glow} blur-3xl -z-5 opacity-0`}
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 0.2 }}
//                                     exit={{ opacity: 0 }}
//                                     transition={{ duration: 0.5 }}
//                                 />
//                                 <motion.div
//                                     className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br ${levelColors[pool.level as keyof typeof levelColors].glow} blur-3xl -z-5 opacity-0`}
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 0.2 }}
//                                     exit={{ opacity: 0 }}
//                                     transition={{ duration: 0.5 }}
//                                 />
//                             </>
//                         )}

//                         <CardHeader>
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <CardTitle className="text-[#1E293B] group-hover:text-[#6A3DE8] transition-colors">
//                                         {pool.title}
//                                     </CardTitle>
//                                     <CardDescription className="mt-1 text-[#64748B]">
//                                         {pool.description}
//                                     </CardDescription>
//                                 </div>
//                                 <div className={`px-2 py-1 ${levelColors[pool.level as keyof typeof levelColors].bg} ${levelColors[pool.level as keyof typeof levelColors].text} rounded-full text-xs font-medium`}>
//                                     {pool.level}
//                                 </div>
//                             </div>
//                         </CardHeader>

//                         <CardContent>
//                             <motion.div
//                                 className="grid grid-cols-2 gap-4 mb-4"
//                                 variants={containerVariants}
//                             >
//                                 <motion.div variants={statsVariants} custom={0}>
//                                     <p className="text-sm text-[#64748B]">Base APY</p>
//                                     <div className="flex items-center">
//                                         <p className="text-xl font-bold text-[#1E293B]">{pool.apy}</p>
//                                         <BarChart className="h-4 w-4 ml-1 text-[#FFD700]" />
//                                     </div>
//                                 </motion.div>

//                                 <motion.div variants={statsVariants} custom={1}>
//                                     <p className="text-sm text-[#64748B]">Lock Period</p>
//                                     <div className="flex items-center">
//                                         <p className="text-xl font-bold text-[#1E293B]">{pool.lockPeriod}</p>
//                                         <Clock className="h-4 w-4 ml-1 text-[#6A3DE8]" />
//                                     </div>
//                                 </motion.div>

//                                 <motion.div variants={statsVariants} custom={2}>
//                                     <p className="text-sm text-[#64748B]">Min Stake</p>
//                                     <p className="text-xl font-bold text-[#1E293B]">{pool.minStake}</p>
//                                 </motion.div>

//                                 <motion.div variants={statsVariants} custom={3}>
//                                     <p className="text-sm text-[#64748B]">Max Boost</p>
//                                     <p className="text-xl font-bold text-[#50C878]">{pool.maxBoost}</p>
//                                 </motion.div>
//                             </motion.div>

//                             <motion.div
//                                 className="p-3 rounded-md bg-[#F8FAFC] relative overflow-hidden border border-[#6A3DE8]/10"
//                                 style={{
//                                     background: `linear-gradient(to right, rgba(106,61,232,0.05), rgba(0,229,191,0.05))`
//                                 }}
//                                 variants={pulseAnimation}
//                                 initial="initial"
//                                 animate="animate"
//                             >
//                                 <div className="flex items-center mb-1">
//                                     <Sparkles className={`h-4 w-4 ${levelColors[pool.level as keyof typeof levelColors].text} mr-2`} />
//                                     <p className="text-sm font-medium text-[#1E293B]">Education Boost</p>
//                                 </div>
//                                 <p className="text-xs text-[#64748B]">
//                                     Complete "<span className="text-[#6A3DE8]">{pool.course}</span>" course to earn a <span className="text-[#50C878]">{pool.maxBoost}</span> boost on rewards
//                                 </p>

//                                 {/* Animated glows */}
//                                 <motion.div
//                                     className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#FFD700]/30 blur-md"
//                                     variants={glowVariants}
//                                     custom={0}
//                                     initial="initial"
//                                     animate="animate"
//                                 />
//                                 <motion.div
//                                     className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#50C878]/30 blur-md"
//                                     variants={glowVariants}
//                                     custom={1}
//                                     initial="initial"
//                                     animate="animate"
//                                 />
//                             </motion.div>
//                         </CardContent>

//                         <CardFooter>
//                             <motion.div
//                                 className="w-full"
//                                 whileHover={{ scale: 1.03 }}
//                                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                             >
//                                 <Button
//                                     className="w-full bg-gradient-to-r from-[#6A3DE8] to-[#00E5BF] hover:opacity-90 text-white font-medium group"
//                                 >
//                                     <span className="mr-1">Stake Now</span>
//                                     <motion.span
//                                         initial={{ x: 0 }}
//                                         animate={hoveredCard === index ? { x: 4 } : { x: 0 }}
//                                         transition={{ type: "spring", stiffness: 300 }}
//                                     >
//                                         <ArrowRight className="h-4 w-4 inline ml-1" />
//                                     </motion.span>
//                                 </Button>
//                             </motion.div>
//                         </CardFooter>

//                         {/* Subtle edge highlights */}
//                         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6A3DE8]/10 to-transparent" />
//                         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6A3DE8]/5 to-transparent" />
//                     </Card>
//                 </motion.div>
//             ))}
//         </motion.div>
//     );

//     return (
//         <div className="relative py-20 overflow-hidden">
//             {/* Light bluish-gray background for contrast but still elegant */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F7] -z-10" />

//             {/* Subtle dot pattern overlay */}
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IiM2QTNERTgiIGZpbGwtb3BhY2l0eT0iMC4yIiAvPjwvZz48L3N2Zz4=')] opacity-[0.4] -z-10" />

//             {/* Animated background elements */}
//             <div className="absolute inset-0 -z-5">
//                 <div className="absolute top-0 left-0 w-full h-full">
//                     <motion.div
//                         className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#FFD700]/5 to-transparent blur-3xl"
//                         animate={{
//                             y: [0, 30, 0],
//                             opacity: [0.2, 0.3, 0.2],
//                             scale: [1, 1.1, 1]
//                         }}
//                         transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
//                     />
//                     <motion.div
//                         className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#50C878]/5 to-transparent blur-3xl"
//                         animate={{
//                             y: [0, -30, 0],
//                             opacity: [0.2, 0.3, 0.2],
//                             scale: [1, 1.1, 1]
//                         }}
//                         transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
//                     />
//                     <motion.div
//                         className="absolute top-1/3 right-1/5 w-64 h-64 rounded-full bg-gradient-to-r from-[#6A3DE8]/5 to-transparent blur-3xl"
//                         animate={{
//                             x: [0, -20, 0],
//                             opacity: [0.2, 0.3, 0.2],
//                             scale: [1, 1.05, 1]
//                         }}
//                         transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
//                     />
//                 </div>
//             </div>

//             <div className="container mx-auto px-6">
//                 <motion.div
//                     className="text-center mb-10"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: "-100px" }}
//                     variants={containerVariants}
//                 >
//                     <motion.div variants={itemVariants}>
//                         <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#6A3DE8]/20 to-[#FFD700]/20 rounded-full text-[#6A3DE8] text-sm font-medium mb-3">
//                             <BadgeDollarSign className="h-3.5 w-3.5 inline-block mr-1" />
//                             Flexible Options
//                         </span>
//                     </motion.div>
//                     <motion.h2
//                         className="text-3xl md:text-4xl font-bold mb-4 text-[#1E293B]"
//                         variants={itemVariants}
//                     >
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3DE8] to-[#00E5BF]">Staking</span> Pools
//                     </motion.h2>
//                     <motion.p
//                         className="text-lg text-[#334155] max-w-2xl mx-auto"
//                         variants={itemVariants}
//                     >
//                         Choose from our variety of staking pools, each designed to reward different educational achievements.
//                     </motion.p>
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: "-100px" }}
//                     variants={containerVariants}
//                 >
//                     <Tabs
//                         defaultValue="all"
//                         className="w-full"
//                         onValueChange={handleTabChange}
//                     >
//                         <motion.div
//                             className="flex justify-center mb-8"
//                             variants={itemVariants}
//                         >
//                             <TabsList className="bg-white/80 backdrop-blur-sm border border-[#6A3DE8]/10 shadow-lg p-1">
//                                 <TabsTrigger
//                                     value="all"
//                                     className={`${activeTab === "all" ? "text-white bg-gradient-to-r from-[#6A3DE8] to-[#00E5BF] font-medium" : "text-[#334155]"}`}
//                                 >
//                                     All Pools
//                                 </TabsTrigger>
//                                 <TabsTrigger
//                                     value="beginner"
//                                     className={`${activeTab === "beginner" ? "text-white bg-gradient-to-r from-[#50C878] to-[#6A3DE8] font-medium" : "text-[#334155]"}`}
//                                 >
//                                     Beginner
//                                 </TabsTrigger>
//                                 <TabsTrigger
//                                     value="advanced"
//                                     className={`${activeTab === "advanced" ? "text-white bg-gradient-to-r from-[#6A3DE8] to-[#FFD700] font-medium" : "text-[#334155]"}`}
//                                 >
//                                     Advanced
//                                 </TabsTrigger>
//                                 <TabsTrigger
//                                     value="specialized"
//                                     className={`${activeTab === "specialized" ? "text-white bg-gradient-to-r from-[#FFD700] to-[#00E5BF] font-medium" : "text-[#334155]"}`}
//                                 >
//                                     Specialized
//                                 </TabsTrigger>
//                             </TabsList>
//                         </motion.div>

//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={activeTab}
//                                 initial="initial"
//                                 animate="animate"
//                                 exit="exit"
//                                 variants={tabTransition}
//                             >
//                                 <TabsContent value="all" className="space-y-8 mt-0">
//                                     {renderPoolCards(poolsData)}

//                                     <motion.div
//                                         className="text-center"
//                                         variants={itemVariants}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ delay: 0.5 }}
//                                     >
//                                         <Button
//                                             variant="outline"
//                                             className="border-[#6A3DE8]/30 bg-white/50 backdrop-blur-sm text-[#1E293B] hover:bg-[#6A3DE8]/10 hover:text-[#6A3DE8] hover:border-[#6A3DE8]/50 group"
//                                         >
//                                             <span>View All Staking Pools</span>
//                                             <motion.span
//                                                 initial={{ x: 0 }}
//                                                 whileHover={{ x: 4 }}
//                                                 transition={{ type: "spring", stiffness: 200 }}
//                                             >
//                                                 <ChevronRight className="ml-1 h-4 w-4 group-hover:text-[#6A3DE8]" />
//                                             </motion.span>
//                                         </Button>
//                                     </motion.div>
//                                 </TabsContent>

//                                 <TabsContent value="beginner" className="space-y-8 mt-0">
//                                     {renderPoolCards(beginnerPools)}

//                                     <motion.div
//                                         className="text-center"
//                                         variants={itemVariants}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ delay: 0.5 }}
//                                     >
//                                         <Button
//                                             variant="outline"
//                                             className="border-[#50C878]/30 bg-white/50 backdrop-blur-sm text-[#1E293B] hover:bg-[#50C878]/10 hover:text-[#50C878] hover:border-[#50C878]/50 group"
//                                         >
//                                             <span>View All Beginner Pools</span>
//                                             <motion.span
//                                                 initial={{ x: 0 }}
//                                                 whileHover={{ x: 4 }}
//                                                 transition={{ type: "spring", stiffness: 200 }}
//                                             >
//                                                 <ChevronRight className="ml-1 h-4 w-4 group-hover:text-[#50C878]" />
//                                             </motion.span>
//                                         </Button>
//                                     </motion.div>
//                                 </TabsContent>

//                                 <TabsContent value="advanced" className="space-y-8 mt-0">
//                                     {renderPoolCards(advancedPools)}

//                                     <motion.div
//                                         className="text-center"
//                                         variants={itemVariants}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ delay: 0.5 }}
//                                     >
//                                         <Button
//                                             variant="outline"
//                                             className="border-[#FFD700]/30 bg-white/50 backdrop-blur-sm text-[#1E293B] hover:bg-[#FFD700]/10 hover:text-[#FFD700] hover:border-[#FFD700]/50 group"
//                                         >
//                                             <span>View All Advanced Pools</span>
//                                             <motion.span
//                                                 initial={{ x: 0 }}
//                                                 whileHover={{ x: 4 }}
//                                                 transition={{ type: "spring", stiffness: 200 }}
//                                             >
//                                                 <ChevronRight className="ml-1 h-4 w-4 group-hover:text-[#FFD700]" />
//                                             </motion.span>
//                                         </Button>
//                                     </motion.div>
//                                 </TabsContent>

//                                 <TabsContent value="specialized" className="space-y-8 mt-0">
//                                     {renderPoolCards(specializedPools)}

//                                     <motion.div
//                                         className="text-center"
//                                         variants={itemVariants}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ delay: 0.5 }}
//                                     >
//                                         <Button
//                                             variant="outline"
//                                             className="border-[#00E5BF]/30 bg-white/50 backdrop-blur-sm text-[#1E293B] hover:bg-[#00E5BF]/10 hover:text-[#00E5BF] hover:border-[#00E5BF]/50 group"
//                                         >
//                                             <span>View All Specialized Pools</span>
//                                             <motion.span
//                                                 initial={{ x: 0 }}
//                                                 whileHover={{ x: 4 }}
//                                                 transition={{ type: "spring", stiffness: 200 }}
//                                             >
//                                                 <ChevronRight className="ml-1 h-4 w-4 group-hover:text-[#00E5BF]" />
//                                             </motion.span>
//                                         </Button>
//                                     </motion.div>
//                                 </TabsContent>
//                             </motion.div>
//                         </AnimatePresence>
//                     </Tabs>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default StakingPools;

"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    Sparkles,
    ChevronRight,
    ArrowRight,
    Clock,
    BadgeDollarSign,
    Lock,
    BarChart,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Staking Pools Section
const StakingPools = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState("all");

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const cardContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants: Variants = {
        hidden: (custom: number) => ({
            y: 50,
            opacity: 0,
            rotateY: custom % 2 === 0 ? -5 : 5,
            rotateX: 5
        }),
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            rotateY: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 150,
                delay: 0.1 * custom,
                duration: 0.6
            }
        }),
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 200
            }
        }
    };

    const statsVariants: Variants = {
        hidden: { y: 15, opacity: 0 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2 + (custom * 0.1),
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    const pulseAnimation: Variants = {
        initial: { opacity: 0.7, scale: 1 },
        animate: {
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.05, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    };

    const glowVariants: Variants = {
        initial: { opacity: 0, scale: 0.5 },
        animate: (custom: number) => ({
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.2, 0.5],
            transition: {
                duration: 3,
                delay: custom * 0.3,
                repeat: Infinity,
                repeatType: "reverse"
            }
        })
    };

    const tabTransition: Variants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 }
        }
    };

    // Custom colors for each level
    const levelColors = {
        "Beginner": {
            bg: "bg-[#50C878]/10",
            text: "text-[#50C878]",
            glow: "from-[#50C878]/20 to-[#FFD700]/10"
        },
        "Intermediate": {
            bg: "bg-[#6A3DE8]/10",
            text: "text-[#6A3DE8]",
            glow: "from-[#6A3DE8]/20 to-[#00E5BF]/10"
        },
        "Advanced": {
            bg: "bg-[#FFD700]/10",
            text: "text-[#FFD700]",
            glow: "from-[#FFD700]/20 to-[#50C878]/10"
        },
        "Specialized": {
            bg: "bg-[#00E5BF]/10",
            text: "text-[#00E5BF]",
            glow: "from-[#00E5BF]/20 to-[#6A3DE8]/10"
        }
    };

    // Pool data
    const poolsData = [
        {
            title: "Learn & Earn Basic",
            description: "Perfect for beginners starting their journey",
            level: "Beginner",
            apy: "10-12%",
            lockPeriod: "30 days",
            minStake: "100 EDU",
            maxBoost: "1.2x",
            course: "Blockchain 101",
            boostEffect: "1.2x boost on rewards"
        },
        {
            title: "DeFi Scholar",
            description: "For those interested in DeFi concepts",
            level: "Intermediate",
            apy: "12-15%",
            lockPeriod: "60 days",
            minStake: "250 EDU",
            maxBoost: "1.5x",
            course: "DeFi Fundamentals",
            boostEffect: "1.5x boost on rewards"
        },
        {
            title: "EDU Chain Champions",
            description: "Our premium pool for dedicated learners",
            level: "Advanced",
            apy: "15-18%",
            lockPeriod: "90 days",
            minStake: "500 EDU",
            maxBoost: "2x",
            course: "EDU Chain Mastery",
            boostEffect: "2x boost on rewards"
        }
    ];

    // Additional tab-specific pool data
    const beginnerPools = [
        {
            title: "Learn & Earn Basic",
            description: "Perfect for beginners starting their journey",
            level: "Beginner",
            apy: "10-12%",
            lockPeriod: "30 days",
            minStake: "100 EDU",
            maxBoost: "1.2x",
            course: "Blockchain 101",
            boostEffect: "1.2x boost on rewards"
        },
        {
            title: "Starter Pool",
            description: "Entry-level rewards with minimal commitment",
            level: "Beginner",
            apy: "8-10%",
            lockPeriod: "15 days",
            minStake: "50 EDU",
            maxBoost: "1.1x",
            course: "Crypto Basics",
            boostEffect: "1.1x boost on rewards"
        }
    ];

    const advancedPools = [
        {
            title: "EDU Chain Champions",
            description: "Our premium pool for dedicated learners",
            level: "Advanced",
            apy: "15-18%",
            lockPeriod: "90 days",
            minStake: "500 EDU",
            maxBoost: "2x",
            course: "EDU Chain Mastery",
            boostEffect: "2x boost on rewards"
        },
        {
            title: "Pro Staker Elite",
            description: "Maximum rewards for committed educators",
            level: "Advanced",
            apy: "18-22%",
            lockPeriod: "120 days",
            minStake: "1000 EDU",
            maxBoost: "2.5x",
            course: "Advanced Blockchain Architecture",
            boostEffect: "2.5x boost on rewards"
        }
    ];

    const specializedPools = [
        {
            title: "DeFi Developer Pool",
            description: "For smart contract developers",
            level: "Specialized",
            apy: "16-20%",
            lockPeriod: "60 days",
            minStake: "350 EDU",
            maxBoost: "1.8x",
            course: "Smart Contract Development",
            boostEffect: "1.8x boost on rewards"
        },
        {
            title: "Blockchain Analyst Pool",
            description: "For data and market analysts",
            level: "Specialized",
            apy: "14-18%",
            lockPeriod: "45 days",
            minStake: "300 EDU",
            maxBoost: "1.7x",
            course: "On-Chain Analytics",
            boostEffect: "1.7x boost on rewards"
        }
    ];

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    // Function to render pool cards based on the pool data
    const renderPoolCards = (pools: typeof poolsData) => (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {pools.map((pool, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    whileHover="hover"
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="perspective-1000"
                >
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-[#111827]/90 to-[#0F172A]/90 backdrop-blur-sm text-white relative overflow-hidden h-full transform-gpu transition-all duration-200">
                        {/* Background subtle gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/95 to-[#0C1424]/95 -z-10" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6A3DE8]/10 to-transparent rounded-bl-full opacity-70" />

                        {/* Animated glow effect on hover */}
                        {hoveredCard === index && (
                            <>
                                <motion.div
                                    className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${levelColors[pool.level as keyof typeof levelColors].glow} blur-3xl -z-5 opacity-0`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br ${levelColors[pool.level as keyof typeof levelColors].glow} blur-3xl -z-5 opacity-0`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </>
                        )}

                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-white group-hover:text-[#FFD700] transition-colors">
                                        {pool.title}
                                    </CardTitle>
                                    <CardDescription className="mt-1 text-white/70">
                                        {pool.description}
                                    </CardDescription>
                                </div>
                                <div className={`px-2 py-1 ${levelColors[pool.level as keyof typeof levelColors].bg} ${levelColors[pool.level as keyof typeof levelColors].text} rounded-full text-xs font-medium`}>
                                    {pool.level}
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent>
                            <motion.div
                                className="grid grid-cols-2 gap-4 mb-4"
                                variants={containerVariants}
                            >
                                <motion.div variants={statsVariants} custom={0}>
                                    <p className="text-sm text-white/60">Base APY</p>
                                    <div className="flex items-center">
                                        <p className="text-xl font-bold text-white">{pool.apy}</p>
                                        <BarChart className="h-4 w-4 ml-1 text-[#FFD700]" />
                                    </div>
                                </motion.div>

                                <motion.div variants={statsVariants} custom={1}>
                                    <p className="text-sm text-white/60">Lock Period</p>
                                    <div className="flex items-center">
                                        <p className="text-xl font-bold text-white">{pool.lockPeriod}</p>
                                        <Clock className="h-4 w-4 ml-1 text-[#6A3DE8]" />
                                    </div>
                                </motion.div>

                                <motion.div variants={statsVariants} custom={2}>
                                    <p className="text-sm text-white/60">Min Stake</p>
                                    <p className="text-xl font-bold text-white">{pool.minStake}</p>
                                </motion.div>

                                <motion.div variants={statsVariants} custom={3}>
                                    <p className="text-sm text-white/60">Max Boost</p>
                                    <p className="text-xl font-bold text-[#50C878]">{pool.maxBoost}</p>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="p-3 rounded-md backdrop-blur-md relative overflow-hidden border border-white/10"
                                style={{
                                    background: `linear-gradient(to right, rgba(106,61,232,0.05), rgba(0,229,191,0.05))`
                                }}
                                variants={pulseAnimation}
                                initial="initial"
                                animate="animate"
                            >
                                <div className="flex items-center mb-1">
                                    <Sparkles className={`h-4 w-4 ${levelColors[pool.level as keyof typeof levelColors].text} mr-2`} />
                                    <p className="text-sm font-medium text-white/90">Education Boost</p>
                                </div>
                                <p className="text-xs text-white/70">
                                    Complete "<span className="text-[#6A3DE8]">{pool.course}</span>" course to earn a <span className="text-[#50C878]">{pool.maxBoost}</span> boost on rewards
                                </p>

                                {/* Animated glows */}
                                <motion.div
                                    className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#FFD700]/30 blur-md"
                                    variants={glowVariants}
                                    custom={0}
                                    initial="initial"
                                    animate="animate"
                                />
                                <motion.div
                                    className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#50C878]/30 blur-md"
                                    variants={glowVariants}
                                    custom={1}
                                    initial="initial"
                                    animate="animate"
                                />
                            </motion.div>
                        </CardContent>

                        <CardFooter>
                            <motion.div
                                className="w-full"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Button
                                    className="w-full bg-gradient-to-r from-[#FFD700] to-[#50C878] hover:opacity-90 text-slate-900 font-medium group"
                                >
                                    <span className="mr-1">Stake Now</span>
                                    <motion.span
                                        initial={{ x: 0 }}
                                        animate={hoveredCard === index ? { x: 4 } : { x: 0 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <ArrowRight className="h-4 w-4 inline ml-1" />
                                    </motion.span>
                                </Button>
                            </motion.div>
                        </CardFooter>

                        {/* Edge highlights */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <div className="relative py-20 overflow-hidden">
            {/* Premium dark background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080F1D] to-[#0D1524] -z-10" />

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiPjxwYXRoIGQ9Ik0zNiAxOGgxOHYxOEgzNnpNMTggMzZoMTh2MThoLTE4ek0zNiAwaDZ2NmgtNnpNMCA0MGg2djZIMHpNMCAxNmg2djZIMHpNNDIgMGg2djZoLTZ6TTI0IDBoNnY2aC02ek02IDBoNnY2SDZ6TTYgMThoNnY2SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-[0.03] -z-10" />

            {/* Animated background elements */}
            <div className="absolute inset-0 -z-5">
                <div className="absolute top-0 left-0 w-full h-full">
                    <motion.div
                        className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#FFD700]/5 to-transparent blur-3xl"
                        animate={{
                            y: [0, 30, 0],
                            opacity: [0.2, 0.3, 0.2],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.div
                        className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#50C878]/5 to-transparent blur-3xl"
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.3, 0.2],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/5 w-64 h-64 rounded-full bg-gradient-to-r from-[#6A3DE8]/5 to-transparent blur-3xl"
                        animate={{
                            x: [0, -20, 0],
                            opacity: [0.2, 0.3, 0.2],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                    />
                </div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#FFD700]/10 to-[#6A3DE8]/10 rounded-full text-[#FFD700] text-sm font-medium mb-3">
                            <BadgeDollarSign className="h-3.5 w-3.5 inline-block mr-1" />
                            Flexible Options
                        </span>
                    </motion.div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-white"
                        variants={itemVariants}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#50C878]">Staking</span> Pools
                    </motion.h2>
                    <motion.p
                        className="text-lg text-white/70 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Choose from our variety of staking pools, each designed to reward different educational achievements.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <Tabs
                        defaultValue="all"
                        className="w-full"
                        onValueChange={handleTabChange}
                    >
                        <motion.div
                            className="flex justify-center mb-8"
                            variants={itemVariants}
                        >
                            <TabsList className="bg-[#111827]/50 backdrop-blur-sm border border-white/10 shadow-lg p-1">
                                <TabsTrigger
                                    value="all"
                                    className={`${activeTab === "all" ? "text-white bg-gradient-to-r from-[#FFD700]/20 to-[#50C878]/20 backdrop-blur-sm font-medium" : "text-white/60"}`}
                                >
                                    All Pools
                                </TabsTrigger>
                                <TabsTrigger
                                    value="beginner"
                                    className={`${activeTab === "beginner" ? "text-white bg-gradient-to-r from-[#50C878]/20 to-[#6A3DE8]/20 backdrop-blur-sm font-medium" : "text-white/60"}`}
                                >
                                    Beginner
                                </TabsTrigger>
                                <TabsTrigger
                                    value="advanced"
                                    className={`${activeTab === "advanced" ? "text-white bg-gradient-to-r from-[#6A3DE8]/20 to-[#FFD700]/20 backdrop-blur-sm font-medium" : "text-white/60"}`}
                                >
                                    Advanced
                                </TabsTrigger>
                                <TabsTrigger
                                    value="specialized"
                                    className={`${activeTab === "specialized" ? "text-white bg-gradient-to-r from-[#FFD700]/20 to-[#00E5BF]/20 backdrop-blur-sm font-medium" : "text-white/60"}`}
                                >
                                    Specialized
                                </TabsTrigger>
                            </TabsList>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={tabTransition}
                            >
                                <TabsContent value="all" className="space-y-8 mt-0">
                                    {renderPoolCards(poolsData)}

                                    <motion.div
                                        className="text-center"
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-[#FFD700] hover:border-[#FFD700]/50 group"
                                        >
                                            <span>View All Staking Pools</span>
                                            <motion.span
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 4 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                            >
                                                <ChevronRight className="ml-1 h-4 w-4 group-hover:text-[#FFD700]" />
                                            </motion.span>
                                        </Button>
                                    </motion.div>
                                </TabsContent>

                                <TabsContent value="beginner" className="space-y-8 mt-0">
                                    {renderPoolCards(beginnerPools)}

                                    <motion.div
                                        className="text-center"
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-[#50C878] hover:border-[#50C878]/50 group"
                                        >
                                            <span>View All Beginner Pools</span>
                                            <motion.span
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 4 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                            >
                                                <ChevronRight className="ml-1 h-4 w-4 group-hover:text-[#50C878]" />
                                            </motion.span>
                                        </Button>
                                    </motion.div>
                                </TabsContent>

                                <TabsContent value="advanced" className="space-y-8 mt-0">
                                    {renderPoolCards(advancedPools)}

                                    <motion.div
                                        className="text-center"
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-[#FFD700] hover:border-[#FFD700]/50 group"
                                        >
                                            <span>View All Advanced Pools</span>
                                            <motion.span
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 4 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                            >
                                                <ChevronRight className="ml-1 h-4 w-4 group-hover:text-[#FFD700]" />
                                            </motion.span>
                                        </Button>
                                    </motion.div>
                                </TabsContent>

                                <TabsContent value="specialized" className="space-y-8 mt-0">
                                    {renderPoolCards(specializedPools)}

                                    <motion.div
                                        className="text-center"
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-[#00E5BF] hover:border-[#00E5BF]/50 group"
                                        >
                                            <span>View All Specialized Pools</span>
                                            <motion.span
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 4 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                            >
                                                <ChevronRight className="ml-1 h-4 w-4 group-hover:text-[#00E5BF]" />
                                            </motion.span>
                                        </Button>
                                    </motion.div>
                                </TabsContent>
                            </motion.div>
                        </AnimatePresence>
                    </Tabs>
                </motion.div>
            </div>
        </div>
    );
};

export default StakingPools;