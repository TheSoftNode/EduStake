// "use client";

// import {
//     ArrowUp,
//     Coins,
//     GraduationCap,
//     Clock,
//     TrendingUp,
//     BookOpen,
//     BookmarkCheck
// } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Sidebar from "@/components/Layout/Sidebar";

// // Dashboard Stats Card Component
// const StatsCard = ({
//     title,
//     value,
//     description,
//     icon,
//     trend,
//     trendValue
// }: {
//     title: string;
//     value: string;
//     description: string;
//     icon: React.ReactNode;
//     trend: "up" | "down" | "neutral";
//     trendValue: string;
// }) => {
//     return (
//         <Card className="border-none shadow-md bg-white">
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
//                 <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0056E0]/10 to-[#00E5BF]/10 flex items-center justify-center">
//                     {icon}
//                 </div>
//             </CardHeader>
//             <CardContent>
//                 <div className="text-2xl font-bold">{value}</div>
//                 <p className="text-xs text-gray-500 mt-1">{description}</p>
//                 <div className="flex items-center mt-4">
//                     <span className={`text-xs font-medium ${trend === "up"
//                         ? "text-green-500"
//                         : trend === "down"
//                             ? "text-red-500"
//                             : "text-gray-500"
//                         } flex items-center`}>
//                         {trend === "up" && <ArrowUp className="h-3 w-3 mr-1" />}
//                         {trend === "down" && <ArrowUp className="h-3 w-3 mr-1 rotate-180" />}
//                         {trendValue}
//                     </span>
//                     <span className="text-xs text-gray-500 ml-1">vs last month</span>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// };

// // Activity Item Component
// const ActivityItem = ({
//     title,
//     timestamp,
//     icon,
//     type
// }: {
//     title: string;
//     timestamp: string;
//     icon: React.ReactNode;
//     type: "stake" | "learn" | "reward";
// }) => {
//     const getBg = () => {
//         switch (type) {
//             case "stake":
//                 return "bg-blue-100 text-blue-600";
//             case "learn":
//                 return "bg-teal-100 text-teal-600";
//             case "reward":
//                 return "bg-amber-100 text-amber-600";
//             default:
//                 return "bg-gray-100 text-gray-600";
//         }
//     };

//     return (
//         <div className="flex items-start space-x-4 mb-4">
//             <div className={`h-8 w-8 rounded-full ${getBg()} flex items-center justify-center mt-1`}>
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="text-sm font-medium">{title}</h4>
//                 <p className="text-xs text-gray-500">{timestamp}</p>
//             </div>
//         </div>
//     );
// };

// // Learning Progress Card Component
// const LearningProgressCard = ({
//     title,
//     progress,
//     totalModules,
//     completedModules
// }: {
//     title: string;
//     progress: number;
//     totalModules: number;
//     completedModules: number;
// }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-md p-4 mb-4">
//             <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-medium text-sm">{title}</h3>
//                 <span className="text-xs font-medium bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
//                     {progress}% Complete
//                 </span>
//             </div>
//             <Progress value={progress} className="h-2 mb-2" />
//             <div className="flex items-center text-xs text-gray-500">
//                 <BookmarkCheck className="h-3 w-3 mr-1" />
//                 <span>{completedModules}/{totalModules} modules completed</span>
//             </div>
//         </div>
//     );
// };

// export default function DashboardPage() {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="flex">
//                 <Sidebar />
//                 <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto">
//                     {/* Welcome Banner */}
//                     <div className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] rounded-lg p-6 text-white mb-6">
//                         <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
//                         <p className="opacity-90 mt-1">Your learning journey is boosting your staking rewards.</p>
//                         <div className="flex items-center mt-4 bg-white/10 rounded-lg p-3">
//                             <div className="mr-4">
//                                 <div className="text-xs uppercase tracking-wider opacity-75">Current Multiplier</div>
//                                 <div className="text-2xl font-bold">1.5x</div>
//                             </div>
//                             <div className="mr-4">
//                                 <div className="text-xs uppercase tracking-wider opacity-75">Staked EDU</div>
//                                 <div className="text-2xl font-bold">2,500</div>
//                             </div>
//                             <div className="mr-4">
//                                 <div className="text-xs uppercase tracking-wider opacity-75">Next Reward</div>
//                                 <div className="text-2xl font-bold">~14 EDU</div>
//                             </div>
//                             <div className="ml-auto">
//                                 <div className="flex items-center bg-white text-[#0056E0] rounded-md px-3 py-2 font-medium text-sm hover:bg-opacity-90 cursor-pointer transition-colors">
//                                     <Coins className="h-4 w-4 mr-2" />
//                                     Stake More
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Statistics Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                         <StatsCard
//                             title="Total Staked"
//                             value="2,500 EDU"
//                             description="Current staking position"
//                             icon={<Coins className="h-4 w-4 text-[#0056E0]" />}
//                             trend="up"
//                             trendValue="+15%"
//                         />
//                         <StatsCard
//                             title="Earned Rewards"
//                             value="342 EDU"
//                             description="Lifetime earnings"
//                             icon={<TrendingUp className="h-4 w-4 text-[#0056E0]" />}
//                             trend="up"
//                             trendValue="+8.2%"
//                         />
//                         <StatsCard
//                             title="Learning Progress"
//                             value="65%"
//                             description="Course completion rate"
//                             icon={<GraduationCap className="h-4 w-4 text-[#0056E0]" />}
//                             trend="up"
//                             trendValue="+12%"
//                         />
//                         <StatsCard
//                             title="Lock Period"
//                             value="32 days"
//                             description="Remaining lock time"
//                             icon={<Clock className="h-4 w-4 text-[#0056E0]" />}
//                             trend="neutral"
//                             trendValue="No change"
//                         />
//                     </div>

//                     {/* Main Content */}
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                         {/* Left Column - Earnings Chart */}
//                         <div className="lg:col-span-2">
//                             <Card className="border-none shadow-md">
//                                 <CardHeader>
//                                     <CardTitle>Earnings Overview</CardTitle>
//                                     <CardDescription>Your staking rewards over time</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <Tabs defaultValue="weekly">
//                                         <div className="flex justify-between items-center">
//                                             <TabsList className="mb-4">
//                                                 <TabsTrigger value="weekly">Weekly</TabsTrigger>
//                                                 <TabsTrigger value="monthly">Monthly</TabsTrigger>
//                                                 <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
//                                             </TabsList>
//                                         </div>

//                                         <TabsContent value="weekly" className="h-64 w-full">
//                                             {/* This would be your chart component */}
//                                             <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md">
//                                                 <p className="text-sm text-gray-500">Weekly Chart Placeholder</p>
//                                             </div>
//                                         </TabsContent>
//                                         <TabsContent value="monthly" className="h-64 w-full">
//                                             <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md">
//                                                 <p className="text-sm text-gray-500">Monthly Chart Placeholder</p>
//                                             </div>
//                                         </TabsContent>
//                                         <TabsContent value="quarterly" className="h-64 w-full">
//                                             <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md">
//                                                 <p className="text-sm text-gray-500">Quarterly Chart Placeholder</p>
//                                             </div>
//                                         </TabsContent>
//                                     </Tabs>
//                                 </CardContent>
//                             </Card>
//                         </div>

//                         {/* Right Column - Activity Feed & Learning Progress */}
//                         <div className="space-y-6">
//                             {/* Activity Feed */}
//                             <Card className="border-none shadow-md">
//                                 <CardHeader>
//                                     <CardTitle>Recent Activity</CardTitle>
//                                     <CardDescription>Your latest platform interactions</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="space-y-4">
//                                         <ActivityItem
//                                             title="Staked 500 EDU in Learning Heroes Pool"
//                                             timestamp="Today, 10:45 AM"
//                                             icon={<Coins className="h-4 w-4" />}
//                                             type="stake"
//                                         />
//                                         <ActivityItem
//                                             title="Completed 'Blockchain Fundamentals' Course"
//                                             timestamp="Yesterday, 3:20 PM"
//                                             icon={<BookOpen className="h-4 w-4" />}
//                                             type="learn"
//                                         />
//                                         <ActivityItem
//                                             title="Received 12.5 EDU Staking Reward"
//                                             timestamp="Yesterday, 12:00 PM"
//                                             icon={<Coins className="h-4 w-4" />}
//                                             type="reward"
//                                         />
//                                         <ActivityItem
//                                             title="Reached Level 3 in DeFi Masterclass"
//                                             timestamp="Mar 25, 2025, 5:15 PM"
//                                             icon={<GraduationCap className="h-4 w-4" />}
//                                             type="learn"
//                                         />
//                                     </div>
//                                 </CardContent>
//                             </Card>

//                             {/* Learning Progress */}
//                             <Card className="border-none shadow-md">
//                                 <CardHeader>
//                                     <CardTitle>Learning Progress</CardTitle>
//                                     <CardDescription>Your active educational courses</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <LearningProgressCard
//                                         title="DeFi Fundamentals"
//                                         progress={75}
//                                         totalModules={8}
//                                         completedModules={6}
//                                     />
//                                     <LearningProgressCard
//                                         title="Smart Contract Security"
//                                         progress={30}
//                                         totalModules={10}
//                                         completedModules={3}
//                                     />
//                                     <LearningProgressCard
//                                         title="EDU Chain Developer Path"
//                                         progress={15}
//                                         totalModules={12}
//                                         completedModules={2}
//                                     />
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }


"use client";

import {
    ArrowUp,
    Coins,
    GraduationCap,
    Clock,
    TrendingUp,
    BookOpen,
    BookmarkCheck,
    Download,
    Search,
    ChevronDown,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Sidebar from "@/components/Layout/Sidebar";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
    Legend
} from 'recharts';
import { useState } from "react";

// Sample chart data
const weeklyData = [
    { name: 'Mon', rewards: 3.2, baseRewards: 2.1, educationalBonus: 1.1 },
    { name: 'Tue', rewards: 2.8, baseRewards: 1.9, educationalBonus: 0.9 },
    { name: 'Wed', rewards: 3.5, baseRewards: 2.2, educationalBonus: 1.3 },
    { name: 'Thu', rewards: 4.2, baseRewards: 2.5, educationalBonus: 1.7 },
    { name: 'Fri', rewards: 3.8, baseRewards: 2.3, educationalBonus: 1.5 },
    { name: 'Sat', rewards: 4.5, baseRewards: 2.6, educationalBonus: 1.9 },
    { name: 'Sun', rewards: 5.1, baseRewards: 2.9, educationalBonus: 2.2 },
];

const monthlyData = [
    { name: 'Week 1', rewards: 22.5, baseRewards: 14.2, educationalBonus: 8.3 },
    { name: 'Week 2', rewards: 25.8, baseRewards: 16.1, educationalBonus: 9.7 },
    { name: 'Week 3', rewards: 28.3, baseRewards: 17.5, educationalBonus: 10.8 },
    { name: 'Week 4', rewards: 30.1, baseRewards: 18.2, educationalBonus: 11.9 },
];

const quarterlyData = [
    { name: 'Jan', rewards: 85.5, baseRewards: 52.4, educationalBonus: 33.1 },
    { name: 'Feb', rewards: 92.3, baseRewards: 56.8, educationalBonus: 35.5 },
    { name: 'Mar', rewards: 105.7, baseRewards: 64.2, educationalBonus: 41.5 },
    { name: 'Apr', rewards: 112.4, baseRewards: 67.5, educationalBonus: 44.9 },
    { name: 'May', rewards: 121.8, baseRewards: 72.9, educationalBonus: 48.9 },
    { name: 'Jun', rewards: 130.2, baseRewards: 77.5, educationalBonus: 52.7 },
];

// Sample transaction history data
const transactions = [
    {
        id: "tx-1",
        type: "Stake",
        amount: "500 EDU",
        status: "Completed",
        date: "Mar 28, 2025",
        pool: "DeFi Advanced",
        isPositive: false
    },
    {
        id: "tx-2",
        type: "Reward",
        amount: "12.5 EDU",
        status: "Received",
        date: "Mar 27, 2025",
        pool: "DeFi Advanced",
        isPositive: true
    },
    {
        id: "tx-3",
        type: "Multiplier",
        amount: "+0.2x",
        status: "Applied",
        date: "Mar 26, 2025",
        pool: "All Pools",
        isPositive: true
    },
    {
        id: "tx-4",
        type: "Reward",
        amount: "8.3 EDU",
        status: "Received",
        date: "Mar 20, 2025",
        pool: "Learning Heroes",
        isPositive: true
    },
    {
        id: "tx-5",
        type: "Unstake",
        amount: "200 EDU",
        status: "Completed",
        date: "Mar 15, 2025",
        pool: "Learning Heroes",
        isPositive: false
    },
];

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

// Transaction History Item Component
const TransactionItem = ({
    type,
    amount,
    status,
    date,
    pool,
    isPositive
}: {
    type: string;
    amount: string;
    status: string;
    date: string;
    pool: string;
    isPositive: boolean;
}) => {
    return (
        <div className="flex items-center py-3 border-b border-gray-100 last:border-0">
            <div className={`h-8 w-8 rounded-full ${isPositive ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'} flex items-center justify-center mr-3`}>
                {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            </div>
            <div className="flex-1">
                <div className="flex justify-between">
                    <h4 className="text-sm font-medium">{type}</h4>
                    <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-blue-600'}`}>{amount}</span>
                </div>
                <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-500">{date} • {pool}</p>
                    <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5">{status}</span>
                </div>
            </div>
        </div>
    );
};

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        // Make sure we have all the data points before trying to access them
        const baseRewards = payload[0] ? payload[0].value.toFixed(2) : '0.00';
        const educationalBonus = payload[1] ? payload[1].value.toFixed(2) : '0.00';
        // Calculate total if payload[2] is not available
        const total = payload[2] ? payload[2].value.toFixed(2) :
            ((payload[0]?.value || 0) + (payload[1]?.value || 0)).toFixed(2);

        return (
            <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
                <p className="font-medium text-sm text-gray-800">{label}</p>
                <p className="text-xs text-[#0056E0]">Base Rewards: {baseRewards} EDU</p>
                <p className="text-xs text-[#00E5BF]">Educational Bonus: {educationalBonus} EDU</p>
                <p className="text-xs font-medium text-gray-800 mt-1">Total: {total} EDU</p>
            </div>
        );
    }

    return null;
};

export default function DashboardPage() {
    const [chartTimeframe, setChartTimeframe] = useState("weekly");

    // Get data based on selected timeframe
    const getChartData = () => {
        switch (chartTimeframe) {
            case "weekly":
                return weeklyData;
            case "monthly":
                return monthlyData;
            case "quarterly":
                return quarterlyData;
            default:
                return weeklyData;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto pb-12">
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
                        {/* Left Column - Earnings Chart and Transaction History */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Earnings Chart */}
                            <Card className="border-none shadow-md">
                                <CardHeader>
                                    <CardTitle>Earnings Overview</CardTitle>
                                    <CardDescription>Your staking rewards over time</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="weekly" onValueChange={setChartTimeframe}>
                                        <div className="flex justify-between items-center">
                                            <TabsList className="mb-4">
                                                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                                                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                                                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                                            </TabsList>
                                        </div>

                                        <TabsContent value="weekly" className="h-64 w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={weeklyData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                                                    <defs>
                                                        <linearGradient id="baseRewardsGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#0056E0" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#0056E0" stopOpacity={0.1} />
                                                        </linearGradient>
                                                        <linearGradient id="educationalBonusGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#00E5BF" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#00E5BF" stopOpacity={0.1} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                                    <YAxis
                                                        tick={{ fontSize: 12 }}
                                                        tickFormatter={(value) => `${value} EDU`}
                                                    />
                                                    <Tooltip content={<CustomTooltip />} />
                                                    <Legend />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="baseRewards"
                                                        stackId="1"
                                                        stroke="#0056E0"
                                                        fill="url(#baseRewardsGradient)"
                                                        name="Base Rewards"
                                                    />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="educationalBonus"
                                                        stackId="1"
                                                        stroke="#00E5BF"
                                                        fill="url(#educationalBonusGradient)"
                                                        name="Educational Bonus"
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="rewards"
                                                        stroke="#6A3DE8"
                                                        strokeWidth={2}
                                                        dot={{ r: 4 }}
                                                        activeDot={{ r: 6 }}
                                                        name="Total Rewards"
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </TabsContent>
                                        <TabsContent value="monthly" className="h-64 w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={monthlyData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                                                    <defs>
                                                        <linearGradient id="baseRewardsGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#0056E0" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#0056E0" stopOpacity={0.1} />
                                                        </linearGradient>
                                                        <linearGradient id="educationalBonusGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#00E5BF" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#00E5BF" stopOpacity={0.1} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                                    <YAxis
                                                        tick={{ fontSize: 12 }}
                                                        tickFormatter={(value) => `${value} EDU`}
                                                    />
                                                    <Tooltip content={<CustomTooltip />} />
                                                    <Legend />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="baseRewards"
                                                        stackId="1"
                                                        stroke="#0056E0"
                                                        fill="url(#baseRewardsGradient)"
                                                        name="Base Rewards"
                                                    />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="educationalBonus"
                                                        stackId="1"
                                                        stroke="#00E5BF"
                                                        fill="url(#educationalBonusGradient)"
                                                        name="Educational Bonus"
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="rewards"
                                                        stroke="#6A3DE8"
                                                        strokeWidth={2}
                                                        dot={{ r: 4 }}
                                                        activeDot={{ r: 6 }}
                                                        name="Total Rewards"
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </TabsContent>
                                        <TabsContent value="quarterly" className="h-64 w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={quarterlyData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                                                    <defs>
                                                        <linearGradient id="baseRewardsGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#0056E0" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#0056E0" stopOpacity={0.1} />
                                                        </linearGradient>
                                                        <linearGradient id="educationalBonusGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#00E5BF" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#00E5BF" stopOpacity={0.1} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                                    <YAxis
                                                        tick={{ fontSize: 12 }}
                                                        tickFormatter={(value) => `${value} EDU`}
                                                    />
                                                    <Tooltip content={<CustomTooltip />} />
                                                    <Legend />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="baseRewards"
                                                        stackId="1"
                                                        stroke="#0056E0"
                                                        fill="url(#baseRewardsGradient)"
                                                        name="Base Rewards"
                                                    />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="educationalBonus"
                                                        stackId="1"
                                                        stroke="#00E5BF"
                                                        fill="url(#educationalBonusGradient)"
                                                        name="Educational Bonus"
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="rewards"
                                                        stroke="#6A3DE8"
                                                        strokeWidth={2}
                                                        dot={{ r: 4 }}
                                                        activeDot={{ r: 6 }}
                                                        name="Total Rewards"
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>

                            {/* Transaction History */}
                            <Card className="border-none shadow-md">
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                        <div>
                                            <CardTitle>Transaction History</CardTitle>
                                            <CardDescription>Recent staking and reward transactions</CardDescription>
                                        </div>
                                        <div className="mt-2 sm:mt-0">
                                            <Button variant="outline" size="sm" className="text-xs h-8 flex items-center gap-1">
                                                <Download className="h-3 w-3" />
                                                Export
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                                        <div className="relative w-full sm:w-64 mb-2 sm:mb-0">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input placeholder="Search transactions..." className="pl-9 h-8 text-sm" />
                                        </div>
                                        <div className="flex space-x-2 w-full sm:w-auto">
                                            <Select defaultValue="all">
                                                <SelectTrigger className="h-8 text-xs w-full sm:w-32">
                                                    <SelectValue placeholder="Type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Types</SelectItem>
                                                    <SelectItem value="stake">Stake</SelectItem>
                                                    <SelectItem value="reward">Reward</SelectItem>
                                                    <SelectItem value="unstake">Unstake</SelectItem>
                                                    <SelectItem value="multiplier">Multiplier</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Select defaultValue="all">
                                                <SelectTrigger className="h-8 text-xs w-full sm:w-32">
                                                    <SelectValue placeholder="Status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Status</SelectItem>
                                                    <SelectItem value="completed">Completed</SelectItem>
                                                    <SelectItem value="pending">Pending</SelectItem>
                                                    <SelectItem value="received">Received</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-1 mt-2">
                                        {transactions.map((tx) => (
                                            <TransactionItem
                                                key={tx.id}
                                                type={tx.type}
                                                amount={tx.amount}
                                                status={tx.status}
                                                date={tx.date}
                                                pool={tx.pool}
                                                isPositive={tx.isPositive}
                                            />
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-center border-t pt-4">
                                    <Button variant="outline" className="text-xs">
                                        View All Transactions
                                        <ChevronDown className="h-3 w-3 ml-1" />
                                    </Button>
                                </CardFooter>
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