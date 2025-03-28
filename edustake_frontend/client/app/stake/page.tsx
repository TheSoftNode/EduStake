"use client";

import { useState } from "react";
import {
    Wallet,
    BookOpen,
    GraduationCap,
    Users,
    CheckCircle2,
    Clock,
    Sparkles,
    Search,
    Coins,
    Info,
    Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Sidebar from "@/components/Layout/Sidebar";


// Staking Pool Card Component
const StakingPoolCard = ({
    title,
    description,
    icon,
    apr,
    lockPeriod,
    minStake,
    boostRequirement,
    boostMultiplier,
    totalStaked,
    difficulty,
    isPopular,
    isVerified
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    apr: string;
    lockPeriod: string;
    minStake: string;
    boostRequirement: string;
    boostMultiplier: string;
    totalStaked: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    isPopular?: boolean;
    isVerified?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [stakeAmount, setStakeAmount] = useState(100);

    // Get background color based on difficulty
    const getDifficultyColor = () => {
        switch (difficulty) {
            case "beginner":
                return "bg-green-100 text-green-600";
            case "intermediate":
                return "bg-blue-100 text-blue-600";
            case "advanced":
                return "bg-purple-100 text-purple-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    // Capitalize difficulty text
    const getDifficultyText = () => {
        return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    };

    return (
        <>
            <Card className="border border-gray-200 hover:border-[#0056E0]/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0056E0]/10 to-[#00E5BF]/10 flex items-center justify-center mr-3">
                                {icon}
                            </div>
                            <div>
                                <CardTitle className="text-lg flex items-center">
                                    {title}
                                    {isVerified && (
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <CheckCircle2 className="h-4 w-4 text-[#00E5BF] ml-1" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="text-xs">Verified Pool</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )}
                                </CardTitle>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            {isPopular && (
                                <Badge variant="outline" className="bg-[#0056E0] text-white border-none">
                                    Popular
                                </Badge>
                            )}
                            <Badge variant="outline" className={getDifficultyColor()}>
                                {getDifficultyText()}
                            </Badge>
                        </div>
                    </div>
                    <CardDescription className="mt-2">{description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">APR</p>
                            <p className="font-medium text-lg">{apr}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Lock Period</p>
                            <p className="font-medium">{lockPeriod}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Min Stake</p>
                            <p className="font-medium">{minStake}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Total Staked</p>
                            <p className="font-medium">{totalStaked}</p>
                        </div>
                    </div>

                    <div className="mt-4 p-3 bg-gradient-to-r from-[#0056E0]/5 to-[#00E5BF]/5 rounded-md">
                        <div className="flex items-center">
                            <Sparkles className="h-4 w-4 text-[#0056E0] mr-2" />
                            <p className="text-sm font-medium text-[#0056E0]">Education Boost</p>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                            {boostRequirement} to earn a {boostMultiplier} boost on rewards
                        </p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                        onClick={() => setIsOpen(true)}
                    >
                        Stake Now
                    </Button>
                </CardFooter>
            </Card>

            {/* Staking Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Stake in {title}</DialogTitle>
                        <DialogDescription>
                            Enter the amount of EDU tokens you want to stake.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">Amount to Stake</p>
                                <p className="text-xs text-gray-500">Min: {minStake}</p>
                            </div>
                            <div className="text-sm text-right">
                                <p className="font-medium">Balance: 5,000 EDU</p>
                            </div>
                        </div>

                        <div className="relative">
                            <Input
                                type="number"
                                placeholder="Enter amount"
                                value={stakeAmount}
                                onChange={(e) => setStakeAmount(Number(e.target.value))}
                                className="pr-16"
                            />
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute right-1 top-1 h-8 text-[#0056E0]"
                                onClick={() => setStakeAmount(5000)}
                            >
                                MAX
                            </Button>
                        </div>

                        <div className="py-2">
                            <Slider
                                defaultValue={[stakeAmount]}
                                max={5000}
                                step={10}
                                onValueChange={(value) => setStakeAmount(value[0])}
                                className="my-4"
                            />
                        </div>

                        <div className="space-y-2 rounded-md border p-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Lock Period:</span>
                                <span className="font-medium">{lockPeriod}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">APR:</span>
                                <span className="font-medium">{apr}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Estimated Rewards:</span>
                                <span className="font-medium">{(stakeAmount * 0.15).toFixed(2)} EDU / year</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Education Boost:</span>
                                <span className="font-medium">{boostMultiplier} available</span>
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="flex-col sm:flex-row sm:justify-between">
                        <Button
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                            className="mb-2 sm:mb-0"
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                        >
                            Confirm Stake
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

// Staking Page Component
export default function StakePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto pb-12">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Staking Pools</h1>
                        <p className="text-gray-600 mt-1">Stake your EDU tokens and earn rewards while learning</p>
                    </div>

                    {/* Filter and Search */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <Tabs defaultValue="all" className="w-full md:w-auto">
                            <TabsList>
                                <TabsTrigger value="all">All Pools</TabsTrigger>
                                <TabsTrigger value="education">Education</TabsTrigger>
                                <TabsTrigger value="community">Community</TabsTrigger>
                                <TabsTrigger value="defi">DeFi</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="relative w-full md:w-auto">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search pools..."
                                className="pl-10 w-full md:w-64"
                            />
                        </div>
                    </div>

                    {/* Featured Pool */}
                    <div className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] rounded-lg p-6 text-white mb-8">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="mb-6 md:mb-0">
                                <h2 className="text-xl font-bold mb-2">EDU Chain Champions Pool</h2>
                                <p className="opacity-90 max-w-xl">Our premium staking pool with enhanced rewards for dedicated learners. Complete the EDU Chain Mastery course to unlock maximum multipliers.</p>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    <div className="bg-white/20 rounded-md px-3 py-2">
                                        <p className="text-xs uppercase opacity-75">APR</p>
                                        <p className="text-lg font-bold">18-25%</p>
                                    </div>
                                    <div className="bg-white/20 rounded-md px-3 py-2">
                                        <p className="text-xs uppercase opacity-75">Lock Period</p>
                                        <p className="text-lg font-bold">90 days</p>
                                    </div>
                                    <div className="bg-white/20 rounded-md px-3 py-2">
                                        <p className="text-xs uppercase opacity-75">Min Stake</p>
                                        <p className="text-lg font-bold">500 EDU</p>
                                    </div>
                                    <div className="bg-white/20 rounded-md px-3 py-2">
                                        <p className="text-xs uppercase opacity-75">Boost</p>
                                        <p className="text-lg font-bold">Up to 2x</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <Button className="bg-white text-[#0056E0] hover:bg-white/90 font-medium">
                                    <Sparkles className="h-4 w-4 mr-2" />
                                    Join Featured Pool
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Staking Pools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <StakingPoolCard
                            title="Learn & Earn Basic"
                            description="Perfect for beginners. Start earning while learning blockchain fundamentals."
                            icon={<BookOpen className="h-5 w-5 text-[#0056E0]" />}
                            apr="10-12%"
                            lockPeriod="30 days"
                            minStake="100 EDU"
                            boostRequirement="Complete Blockchain 101 course"
                            boostMultiplier="1.2x"
                            totalStaked="125,500 EDU"
                            difficulty="beginner"
                            isPopular={true}
                            isVerified={true}
                        />

                        <StakingPoolCard
                            title="DeFi Scholar"
                            description="For those interested in DeFi concepts and applications on EDU Chain."
                            icon={<Wallet className="h-5 w-5 text-[#0056E0]" />}
                            apr="12-15%"
                            lockPeriod="60 days"
                            minStake="250 EDU"
                            boostRequirement="Complete DeFi Fundamentals course"
                            boostMultiplier="1.3x"
                            totalStaked="98,750 EDU"
                            difficulty="intermediate"
                            isVerified={true}
                        />

                        <StakingPoolCard
                            title="Community Builders"
                            description="Rewards for active community members who help grow the EDU Chain ecosystem."
                            icon={<Users className="h-5 w-5 text-[#0056E0]" />}
                            apr="13-17%"
                            lockPeriod="45 days"
                            minStake="200 EDU"
                            boostRequirement="Host 2 community events"
                            boostMultiplier="1.5x"
                            totalStaked="76,300 EDU"
                            difficulty="beginner"
                        />

                        <StakingPoolCard
                            title="Smart Contract Specialists"
                            description="For developers learning to build on EDU Chain. Higher rewards for technical contributions."
                            icon={<Coins className="h-5 w-5 text-[#0056E0]" />}
                            apr="15-18%"
                            lockPeriod="90 days"
                            minStake="500 EDU"
                            boostRequirement="Complete Smart Contract Security course"
                            boostMultiplier="1.7x"
                            totalStaked="112,800 EDU"
                            difficulty="advanced"
                        />

                        <StakingPoolCard
                            title="Educator's Guild"
                            description="Designed for content creators building educational resources on EDU Chain."
                            icon={<GraduationCap className="h-5 w-5 text-[#0056E0]" />}
                            apr="14-16%"
                            lockPeriod="60 days"
                            minStake="300 EDU"
                            boostRequirement="Create 1 educational resource"
                            boostMultiplier="1.6x"
                            totalStaked="63,450 EDU"
                            difficulty="intermediate"
                            isPopular={true}
                        />

                        <StakingPoolCard
                            title="Long-term Learners"
                            description="Maximum rewards for long-term commitment to the EDU Chain ecosystem."
                            icon={<Lock className="h-5 w-5 text-[#0056E0]" />}
                            apr="16-20%"
                            lockPeriod="120 days"
                            minStake="1000 EDU"
                            boostRequirement="Complete any 3 advanced courses"
                            boostMultiplier="2x"
                            totalStaked="203,750 EDU"
                            difficulty="advanced"
                            isVerified={true}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}