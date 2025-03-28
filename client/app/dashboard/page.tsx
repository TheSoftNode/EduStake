"use client";

import {
    ArrowUp,
    Coins,
    GraduationCap,
    Clock,
    TrendingUp,
    BookOpen,
    BookmarkCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/Layout/Sidebar";

// Dashboard Stats Card Component
const StatsCard = ({
    title,
    value,
    description,
    icon,
    trend,
    trendValue
}: {
    title: string;
    value: string;
    description: string;
    icon: React.ReactNode;
    trend: "up" | "down" | "neutral";
    trendValue: string;
}) => {
    return (
        <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0056E0]/10 to-[#00E5BF]/10 flex items-center justify-center">
                    {icon}
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-gray-500 mt-1">{description}</p>
                <div className="flex items-center mt-4">
                    <span className={`text-xs font-medium ${trend === "up"
                        ? "text-green-500"
                        : trend === "down"
                            ? "text-red-500"
                            : "text-gray-500"
                        } flex items-center`}>
                        {trend === "up" && <ArrowUp className="h-3 w-3 mr-1" />}
                        {trend === "down" && <ArrowUp className="h-3 w-3 mr-1 rotate-180" />}
                        {trendValue}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">vs last month</span>
                </div>
            </CardContent>
        </Card>
    );
};

// Activity Item Component
const ActivityItem = ({
    title,
    timestamp,
    icon,
    type
}: {
    title: string;
    timestamp: string;
    icon: React.ReactNode;
    type: "stake" | "learn" | "reward";
}) => {
    const getBg = () => {
        switch (type) {
            case "stake":
                return "bg-blue-100 text-blue-600";
            case "learn":
                return "bg-teal-100 text-teal-600";
            case "reward":
                return "bg-amber-100 text-amber-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="flex items-start space-x-4 mb-4">
            <div className={`h-8 w-8 rounded-full ${getBg()} flex items-center justify-center mt-1`}>
                {icon}
            </div>
            <div>
                <h4 className="text-sm font-medium">{title}</h4>
                <p className="text-xs text-gray-500">{timestamp}</p>
            </div>
        </div>
    );
};

// Learning Progress Card Component
const LearningProgressCard = ({
    title,
    progress,
    totalModules,
    completedModules
}: {
    title: string;
    progress: number;
    totalModules: number;
    completedModules: number;
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-sm">{title}</h3>
                <span className="text-xs font-medium bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                    {progress}% Complete
                </span>
            </div>
            <Progress value={progress} className="h-2 mb-2" />
            <div className="flex items-center text-xs text-gray-500">
                <BookmarkCheck className="h-3 w-3 mr-1" />
                <span>{completedModules}/{totalModules} modules completed</span>
            </div>
        </div>
    );
};

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto">
                    {/* Welcome Banner */}
                    <div className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] rounded-lg p-6 text-white mb-6">
                        <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
                        <p className="opacity-90 mt-1">Your learning journey is boosting your staking rewards.</p>
                        <div className="flex items-center mt-4 bg-white/10 rounded-lg p-3">
                            <div className="mr-4">
                                <div className="text-xs uppercase tracking-wider opacity-75">Current Multiplier</div>
                                <div className="text-2xl font-bold">1.5x</div>
                            </div>
                            <div className="mr-4">
                                <div className="text-xs uppercase tracking-wider opacity-75">Staked EDU</div>
                                <div className="text-2xl font-bold">2,500</div>
                            </div>
                            <div className="mr-4">
                                <div className="text-xs uppercase tracking-wider opacity-75">Next Reward</div>
                                <div className="text-2xl font-bold">~14 EDU</div>
                            </div>
                            <div className="ml-auto">
                                <div className="flex items-center bg-white text-[#0056E0] rounded-md px-3 py-2 font-medium text-sm hover:bg-opacity-90 cursor-pointer transition-colors">
                                    <Coins className="h-4 w-4 mr-2" />
                                    Stake More
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <StatsCard
                            title="Total Staked"
                            value="2,500 EDU"
                            description="Current staking position"
                            icon={<Coins className="h-4 w-4 text-[#0056E0]" />}
                            trend="up"
                            trendValue="+15%"
                        />
                        <StatsCard
                            title="Earned Rewards"
                            value="342 EDU"
                            description="Lifetime earnings"
                            icon={<TrendingUp className="h-4 w-4 text-[#0056E0]" />}
                            trend="up"
                            trendValue="+8.2%"
                        />
                        <StatsCard
                            title="Learning Progress"
                            value="65%"
                            description="Course completion rate"
                            icon={<GraduationCap className="h-4 w-4 text-[#0056E0]" />}
                            trend="up"
                            trendValue="+12%"
                        />
                        <StatsCard
                            title="Lock Period"
                            value="32 days"
                            description="Remaining lock time"
                            icon={<Clock className="h-4 w-4 text-[#0056E0]" />}
                            trend="neutral"
                            trendValue="No change"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Earnings Chart */}
                        <div className="lg:col-span-2">
                            <Card className="border-none shadow-md">
                                <CardHeader>
                                    <CardTitle>Earnings Overview</CardTitle>
                                    <CardDescription>Your staking rewards over time</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="weekly">
                                        <div className="flex justify-between items-center">
                                            <TabsList className="mb-4">
                                                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                                                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                                                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                                            </TabsList>
                                        </div>

                                        <TabsContent value="weekly" className="h-64 w-full">
                                            {/* This would be your chart component */}
                                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md">
                                                <p className="text-sm text-gray-500">Weekly Chart Placeholder</p>
                                            </div>
                                        </TabsContent>
                                        <TabsContent value="monthly" className="h-64 w-full">
                                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md">
                                                <p className="text-sm text-gray-500">Monthly Chart Placeholder</p>
                                            </div>
                                        </TabsContent>
                                        <TabsContent value="quarterly" className="h-64 w-full">
                                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md">
                                                <p className="text-sm text-gray-500">Quarterly Chart Placeholder</p>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Activity Feed & Learning Progress */}
                        <div className="space-y-6">
                            {/* Activity Feed */}
                            <Card className="border-none shadow-md">
                                <CardHeader>
                                    <CardTitle>Recent Activity</CardTitle>
                                    <CardDescription>Your latest platform interactions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <ActivityItem
                                            title="Staked 500 EDU in Learning Heroes Pool"
                                            timestamp="Today, 10:45 AM"
                                            icon={<Coins className="h-4 w-4" />}
                                            type="stake"
                                        />
                                        <ActivityItem
                                            title="Completed 'Blockchain Fundamentals' Course"
                                            timestamp="Yesterday, 3:20 PM"
                                            icon={<BookOpen className="h-4 w-4" />}
                                            type="learn"
                                        />
                                        <ActivityItem
                                            title="Received 12.5 EDU Staking Reward"
                                            timestamp="Yesterday, 12:00 PM"
                                            icon={<Coins className="h-4 w-4" />}
                                            type="reward"
                                        />
                                        <ActivityItem
                                            title="Reached Level 3 in DeFi Masterclass"
                                            timestamp="Mar 25, 2025, 5:15 PM"
                                            icon={<GraduationCap className="h-4 w-4" />}
                                            type="learn"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Learning Progress */}
                            <Card className="border-none shadow-md">
                                <CardHeader>
                                    <CardTitle>Learning Progress</CardTitle>
                                    <CardDescription>Your active educational courses</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <LearningProgressCard
                                        title="DeFi Fundamentals"
                                        progress={75}
                                        totalModules={8}
                                        completedModules={6}
                                    />
                                    <LearningProgressCard
                                        title="Smart Contract Security"
                                        progress={30}
                                        totalModules={10}
                                        completedModules={3}
                                    />
                                    <LearningProgressCard
                                        title="EDU Chain Developer Path"
                                        progress={15}
                                        totalModules={12}
                                        completedModules={2}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}