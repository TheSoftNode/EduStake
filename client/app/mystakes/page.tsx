"use client";

import { useState } from "react";
import {
    Wallet,
    Clock,
    TrendingUp,
    BarChart,
    RefreshCw,
    Plus,
    ChevronDown,
    ChevronUp,
    Calculator,
    Calendar,
    GraduationCap,
    AlertCircle,
    Info,
    ArrowRight
} from "lucide-react";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React from "react";

// Stake Card Component
const StakeCard = ({
    poolName,
    amount,
    apr,
    boost,
    effectiveApr,
    endDate,
    progress,
    daysLeft,
    isUnlocked,
    isCompounding
}: {
    poolName: string;
    amount: string;
    apr: string;
    boost: string;
    effectiveApr: string;
    endDate: string;
    progress: number;
    daysLeft: number;
    isUnlocked: boolean;
    isCompounding: boolean;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="border border-gray-200 hover:border-[#0056E0]/40 transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{poolName}</CardTitle>
                        <CardDescription className="mt-1">
                            {isUnlocked ? "Ready to unstake" : `Locks until ${endDate}`}
                        </CardDescription>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-2xl font-bold">{amount} <span className="text-sm font-normal">EDU</span></div>
                        {isCompounding && (
                            <Badge variant="outline" className="bg-[#50C878]/10 text-[#50C878] border-none text-xs">
                                Compounding
                            </Badge>
                        )}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pb-2">
                <div className="mb-4">
                    {!isUnlocked ? (
                        <>
                            <div className="flex items-center justify-between mb-1 text-sm">
                                <span className="text-gray-600">Lock progress</span>
                                <span className="text-gray-600">{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                            <div className="flex justify-between mt-1">
                                <span className="text-xs text-gray-500">{daysLeft} days left</span>
                                <span className="text-xs text-gray-500">{endDate}</span>
                            </div>
                        </>
                    ) : (
                        <div className="bg-[#0056E0]/5 p-2 rounded-md text-center">
                            <span className="text-[#0056E0] text-sm font-medium">Ready to unstake or extend lock</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap justify-between items-center text-sm mb-4">
                    <div className="flex items-center">
                        <BarChart className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-gray-600">Base APR: </span>
                        <span className="font-medium ml-1">{apr}</span>
                    </div>
                    <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 text-[#0056E0] mr-1" />
                        <span className="text-gray-600">Boost: </span>
                        <span className="font-medium text-[#0056E0] ml-1">{boost}</span>
                    </div>
                    <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-[#50C878] mr-1" />
                        <span className="text-gray-600">Effective: </span>
                        <span className="font-medium text-[#50C878] ml-1">{effectiveApr}</span>
                    </div>
                </div>

                <Collapsible
                    open={isExpanded}
                    onOpenChange={setIsExpanded}
                    className="border-t border-gray-100 pt-4"
                >
                    <CollapsibleTrigger className="flex items-center justify-center w-full text-sm text-gray-500">
                        <span>
                            {isExpanded ? "Hide details" : "Show details"}
                        </span>
                        {isExpanded ? (
                            <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                            <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-gray-500">Staked on</p>
                                <p className="font-medium">Mar 15, 2023</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Total rewards</p>
                                <p className="font-medium">125.5 EDU</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Rewards rate</p>
                                <p className="font-medium">4.2 EDU / day</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Educational boost from</p>
                                <p className="font-medium">5 completed courses</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-md text-sm">
                            <div className="flex items-start">
                                <Info className="h-4 w-4 text-[#0056E0] mt-0.5 mr-2" />
                                <p className="text-gray-600">
                                    Complete more educational courses to increase your staking multiplier.
                                    <Button variant="link" className="h-auto p-0 text-[#0056E0]">
                                        Learn more
                                    </Button>
                                </p>
                            </div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </CardContent>

            <CardFooter className="pt-4 grid grid-cols-2 gap-2">
                {isUnlocked ? (
                    <>
                        <Button variant="outline" className="border-[#0056E0] text-[#0056E0]">
                            Unstake
                        </Button>
                        <Button className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white">
                            Extend Lock
                        </Button>
                    </>
                ) : (
                    <>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div>
                                        <Button variant="outline" className="w-full border-gray-200 text-gray-400" disabled>
                                            Unstake
                                        </Button>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-xs">Cannot unstake until lock period ends</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <Button className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white">
                            Add More
                        </Button>
                    </>
                )}
            </CardFooter>
        </Card>
    );
};

// Reward Card Component
const RewardCard = ({
    title,
    amount,
    icon,
    bgClass,
    iconColorClass,
    description
}: {
    title: string;
    amount: string;
    icon: React.ReactNode;
    bgClass: string;
    iconColorClass: string;
    description: string;
}) => {
    return (
        <Card className="border border-gray-200">
            <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-gray-500 text-sm">{title}</p>
                        <p className="text-2xl font-bold mt-1">{amount} <span className="text-sm font-normal">EDU</span></p>
                        <p className="text-xs text-gray-500 mt-1">{description}</p>
                    </div>
                    <div className={`h-10 w-10 rounded-full ${bgClass} flex items-center justify-center`}>
                        {React.cloneElement(icon as React.ReactElement, { className: `h-5 w-5 ${iconColorClass}` })}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default function MyStakesPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    // Sample stake data
    const activeStakes = [
        {
            poolName: "DeFi Scholar Pool",
            amount: "500",
            apr: "12%",
            boost: "1.5x",
            effectiveApr: "18%",
            endDate: "Oct 15, 2023",
            progress: 65,
            daysLeft: 25,
            isUnlocked: false,
            isCompounding: true
        },
        {
            poolName: "Learn & Earn Basic",
            amount: "250",
            apr: "10%",
            boost: "1.2x",
            effectiveApr: "12%",
            endDate: "Aug 30, 2023",
            progress: 100,
            daysLeft: 0,
            isUnlocked: true,
            isCompounding: false
        },
        {
            poolName: "EDU Chain Champions",
            amount: "1000",
            apr: "15%",
            boost: "2x",
            effectiveApr: "30%",
            endDate: "Dec 1, 2023",
            progress: 35,
            daysLeft: 60,
            isUnlocked: false,
            isCompounding: true
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto pb-12">
                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">My Stakes</h1>
                        <p className="text-gray-600 mt-1">Manage your active stakes and track your rewards</p>
                    </div>

                    {/* Reward Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <RewardCard
                            title="Total Staked"
                            amount="1,750"
                            icon={<Wallet />}
                            bgClass="bg-[#0056E0]/10"
                            iconColorClass="text-[#0056E0]"
                            description="Across 3 active pools"
                        />
                        <RewardCard
                            title="Total Rewards"
                            amount="215.75"
                            icon={<TrendingUp />}
                            bgClass="bg-[#50C878]/10"
                            iconColorClass="text-[#50C878]"
                            description="All-time earnings"
                        />
                        <RewardCard
                            title="Current APR"
                            amount="20%"
                            icon={<BarChart />}
                            bgClass="bg-[#FFD700]/10"
                            iconColorClass="text-[#FFD700]"
                            description="Weighted average"
                        />
                        <RewardCard
                            title="Next Reward"
                            amount="5.25"
                            icon={<Clock />}
                            bgClass="bg-[#6A3DE8]/10"
                            iconColorClass="text-[#6A3DE8]"
                            description="In 2 days"
                        />
                    </div>

                    {/* Calculator and Add Stake */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <div className="flex space-x-2">
                            <Button variant="outline" className="text-[#0056E0] border-[#0056E0]/30" onClick={() => setCalculatorOpen(!calculatorOpen)}>
                                <Calculator className="h-4 w-4 mr-2" />
                                Rewards Calculator
                            </Button>
                            <Button variant="outline" className="text-[#0056E0] border-[#0056E0]/30">
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Refresh
                            </Button>
                        </div>
                        <Button className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white">
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Stake
                        </Button>
                    </div>

                    {/* Calculator Panel */}
                    {calculatorOpen && (
                        <Card className="mb-6 border-[#0056E0]/30">
                            <CardHeader>
                                <CardTitle className="text-lg">Rewards Calculator</CardTitle>
                                <CardDescription>Estimate your potential earnings based on stake amount and duration</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Calculator components would go here */}
                                    <div className="md:col-span-3 bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-center text-gray-600">
                                            Calculator functionality would be implemented here
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Stakes */}
                    <Tabs defaultValue="active">
                        <TabsList className="mb-6">
                            <TabsTrigger value="active">Active Stakes (3)</TabsTrigger>
                            <TabsTrigger value="pending">Pending (1)</TabsTrigger>
                            <TabsTrigger value="completed">Completed (5)</TabsTrigger>
                        </TabsList>

                        <TabsContent value="active" className="space-y-6">
                            <Card className="border-[#50C878]/30 bg-[#50C878]/5 mb-6">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <div className="flex items-start">
                                            <AlertCircle className="h-5 w-5 text-[#50C878] mt-0.5 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">Boost your rewards!</p>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    You can increase your effective APR by completing more educational courses.
                                                </p>
                                            </div>
                                        </div>
                                        <Button className="mt-4 md:mt-0 bg-[#50C878] hover:bg-[#50C878]/90 text-white">
                                            <GraduationCap className="h-4 w-4 mr-2" />
                                            View Courses
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                                {activeStakes.map((stake, index) => (
                                    <StakeCard
                                        key={index}
                                        poolName={stake.poolName}
                                        amount={stake.amount}
                                        apr={stake.apr}
                                        boost={stake.boost}
                                        effectiveApr={stake.effectiveApr}
                                        endDate={stake.endDate}
                                        progress={stake.progress}
                                        daysLeft={stake.daysLeft}
                                        isUnlocked={stake.isUnlocked}
                                        isCompounding={stake.isCompounding}
                                    />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="pending">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                                <Card className="border border-gray-200">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle>Educational NFTs Pool</CardTitle>
                                                <CardDescription className="mt-1">
                                                    Pending confirmation
                                                </CardDescription>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="text-2xl font-bold">200 <span className="text-sm font-normal">EDU</span></div>
                                                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-none text-xs">
                                                    Processing
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="pb-2">
                                        <div className="mb-4">
                                            <div className="bg-yellow-50 p-3 rounded-md">
                                                <div className="flex items-start">
                                                    <Info className="h-4 w-4 text-yellow-600 mt-0.5 mr-2" />
                                                    <p className="text-sm text-yellow-800">
                                                        Your stake is being processed and should be confirmed within 5 minutes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap justify-between items-center text-sm mb-4">
                                            <div className="flex items-center">
                                                <BarChart className="h-4 w-4 text-gray-400 mr-1" />
                                                <span className="text-gray-600">Base APR: </span>
                                                <span className="font-medium ml-1">14%</span>
                                            </div>
                                            <div className="flex items-center">
                                                <GraduationCap className="h-4 w-4 text-[#0056E0] mr-1" />
                                                <span className="text-gray-600">Boost: </span>
                                                <span className="font-medium text-[#0056E0] ml-1">1.4x</span>
                                            </div>
                                            <div className="flex items-center">
                                                <TrendingUp className="h-4 w-4 text-[#50C878] mr-1" />
                                                <span className="text-gray-600">Effective: </span>
                                                <span className="font-medium text-[#50C878] ml-1">19.6%</span>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="pt-4">
                                        <Button variant="outline" className="w-full text-yellow-600 border-yellow-300 hover:bg-yellow-50">
                                            <RefreshCw className="h-4 w-4 mr-2" />
                                            Check Status
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="completed">
                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-lg p-8 text-center">
                                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Completed Stakes History</h3>
                                    <p className="text-gray-600 mb-4 max-w-md mx-auto">
                                        You have 5 completed stakes. View your past staking activity and results.
                                    </p>
                                    <Button className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white">
                                        View History
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}