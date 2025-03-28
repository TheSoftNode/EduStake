"use client";

import { useState } from "react";
import {
    Trophy,
    Medal,
    Search,
    ChevronUp,
    ChevronDown,
    GraduationCap,
    Coins,
    Users,
    BookOpen,
    ArrowUpRight
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Sidebar from "@/components/Layout/Sidebar";


// Top 3 Leaders Component
const TopLeaders = ({ data }: { data: any[] }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-12 my-8">
            {/* Second Place */}
            <div className="order-2 lg:order-1">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-[#A9A9A9] shadow-lg">
                            <AvatarImage src={data[1].avatar} alt={data[1].name} />
                            <AvatarFallback className="bg-[#0056E0] text-white text-2xl">{data[1].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#A9A9A9] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">
                            2
                        </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">{data[1].name}</h3>
                    <p className="text-gray-600 text-sm">{data[1].points} points</p>
                    <div className="mt-1 flex items-center space-x-1 bg-[#A9A9A9]/10 px-2 py-1 rounded-full">
                        <Medal className="h-3 w-3 text-[#A9A9A9]" />
                        <span className="text-xs font-medium text-gray-700">{data[1].level}</span>
                    </div>
                </div>
            </div>

            {/* First Place */}
            <div className="order-1 lg:order-2 -mt-8 lg:mt-0">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                            <Trophy className="h-8 w-8 text-[#FFD700]" />
                        </div>
                        <Avatar className="h-32 w-32 border-4 border-[#FFD700] shadow-lg">
                            <AvatarImage src={data[0].avatar} alt={data[0].name} />
                            <AvatarFallback className="bg-[#0056E0] text-white text-3xl">{data[0].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl">
                            1
                        </div>
                    </div>
                    <h3 className="mt-6 font-bold text-xl">{data[0].name}</h3>
                    <p className="text-gray-800 font-medium">{data[0].points} points</p>
                    <div className="mt-2 flex items-center space-x-1 bg-[#FFD700]/10 px-3 py-1 rounded-full">
                        <Medal className="h-4 w-4 text-[#FFD700]" />
                        <span className="text-sm font-medium text-gray-800">{data[0].level}</span>
                    </div>
                </div>
            </div>

            {/* Third Place */}
            <div className="order-3">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-[#CD7F32] shadow-lg">
                            <AvatarImage src={data[2].avatar} alt={data[2].name} />
                            <AvatarFallback className="bg-[#0056E0] text-white text-2xl">{data[2].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#CD7F32] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">
                            3
                        </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">{data[2].name}</h3>
                    <p className="text-gray-600 text-sm">{data[2].points} points</p>
                    <div className="mt-1 flex items-center space-x-1 bg-[#CD7F32]/10 px-2 py-1 rounded-full">
                        <Medal className="h-3 w-3 text-[#CD7F32]" />
                        <span className="text-xs font-medium text-gray-700">{data[2].level}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Leaderboard Table Component
const LeaderboardTable = ({
    data,
    sortField,
    sortDirection,
    onSort,
    currentUser
}: {
    data: any[];
    sortField: string;
    sortDirection: "asc" | "desc";
    onSort: (field: string) => void;
    currentUser?: string;
}) => {
    const SortHeader = ({ field, label }: { field: string; label: string }) => (
        <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => onSort(field)}
        >
            <span>{label}</span>
            {sortField === field ? (
                sortDirection === "asc" ? (
                    <ChevronUp className="h-4 w-4" />
                ) : (
                    <ChevronDown className="h-4 w-4" />
                )
            ) : null}
        </div>
    );

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left font-medium text-gray-500 w-16">Rank</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">User</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">
                            <SortHeader field="level" label="Level" />
                        </th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">
                            <SortHeader field="points" label="Points" />
                        </th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">
                            <SortHeader field="stakingAmount" label="Staking" />
                        </th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Achievements</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr
                            key={user.id}
                            className={`
                ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                ${user.name === currentUser ? "bg-[#0056E0]/5" : ""}
                hover:bg-[#0056E0]/5 transition-colors
              `}
                        >
                            <td className="py-3 px-4">
                                <div className="flex justify-center items-center">
                                    {index < 3 ? (
                                        <div className={`
                      h-7 w-7 rounded-full flex items-center justify-center text-white font-bold
                      ${index === 0 ? "bg-[#FFD700]" :
                                                index === 1 ? "bg-[#A9A9A9]" :
                                                    "bg-[#CD7F32]"}
                    `}>
                                            {index + 1}
                                        </div>
                                    ) : (
                                        <div className="px-2 font-semibold text-gray-600">{index + 1}</div>
                                    )}
                                </div>
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center space-x-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback className="bg-[#0056E0]/10 text-[#0056E0]">{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{user.name}</p>
                                        <p className="text-xs text-gray-500">Joined {user.joinDate}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center space-x-1">
                                    <GraduationCap className="h-4 w-4 text-[#0056E0]" />
                                    <span>{user.level}</span>
                                </div>
                            </td>
                            <td className="py-3 px-4 font-medium">{user.points.toLocaleString()}</td>
                            <td className="py-3 px-4">
                                <div className="flex items-center space-x-1">
                                    <Coins className="h-4 w-4 text-[#0056E0]" />
                                    <span>{user.stakingAmount.toLocaleString()} EDU</span>
                                </div>
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex flex-wrap gap-1">
                                    {user.achievements.map((achievement: string, i: number) => (
                                        <Badge
                                            key={i}
                                            variant="outline"
                                            className="bg-gradient-to-r from-[#0056E0]/10 to-[#00E5BF]/10 border-none text-[#0056E0] text-xs"
                                        >
                                            {achievement}
                                        </Badge>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Your Rank Card Component
const YourRankCard = ({ rank, points, level, stakingAmount }: { rank: number; points: number; level: string; stakingAmount: number }) => {
    return (
        <Card className="bg-gradient-to-r from-[#0056E0]/10 to-[#00E5BF]/10 border-none shadow-md">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg">Your Leaderboard Position</CardTitle>
                <CardDescription>Keep learning to climb the ranks!</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-6">
                    <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#0056E0] to-[#00E5BF] flex items-center justify-center text-white font-bold">
                            {rank}
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Current Rank</p>
                            <p className="font-medium">#{rank} of 1,250</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Points</p>
                        <div className="flex items-center">
                            <p className="font-medium">{points.toLocaleString()}</p>
                            <span className="text-xs text-green-500 ml-2 flex items-center">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                +120 this week
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Level</p>
                        <div className="flex items-center">
                            <GraduationCap className="h-4 w-4 text-[#0056E0] mr-1" />
                            <p className="font-medium">{level}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Staking</p>
                        <div className="flex items-center">
                            <Coins className="h-4 w-4 text-[#0056E0] mr-1" />
                            <p className="font-medium">{stakingAmount.toLocaleString()} EDU</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 border-t border-gray-200 pt-4">
                    <p className="text-sm font-medium mb-2">Next Milestone</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#0056E0] to-[#00E5BF]/50 flex items-center justify-center text-white">
                                <Medal className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Top 50 Rank</p>
                                <p className="text-xs text-gray-500">500 more points needed</p>
                            </div>
                        </div>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                        >
                            <BookOpen className="h-4 w-4 mr-1" />
                            Learn More
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

// Achievement Card Component
const AchievementCard = ({ title, description, icon, progress }: { title: string; description: string; icon: React.ReactNode; progress: number }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
            <div className="flex items-start space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0056E0]/10 to-[#00E5BF]/10 flex items-center justify-center">
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{description}</p>
                    <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs font-medium">{progress}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function LeaderboardPage() {
    const [sortField, setSortField] = useState("points");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
    const [searchQuery, setSearchQuery] = useState("");
    const [timeFrame, setTimeFrame] = useState("all-time");

    // Dummy data for leaderboard
    const leaderboardData = [
        {
            id: 1,
            name: "Satoshi N.",
            level: "Master",
            points: 8750,
            stakingAmount: 12500,
            joinDate: "Jan 2025",
            avatar: "",
            achievements: ["Top Staker", "Course Creator"]
        },
        {
            id: 2,
            name: "Vitalik B.",
            level: "Expert",
            points: 7200,
            stakingAmount: 9800,
            joinDate: "Jan 2025",
            avatar: "",
            achievements: ["DeFi Pioneer", "Smart Contract Pro"]
        },
        {
            id: 3,
            name: "Ada L.",
            level: "Expert",
            points: 6900,
            stakingAmount: 7500,
            joinDate: "Feb 2025",
            avatar: "",
            achievements: ["Community Leader", "Course Creator"]
        },
        {
            id: 4,
            name: "Charles H.",
            level: "Advanced",
            points: 5300,
            stakingAmount: 8200,
            joinDate: "Feb 2025",
            avatar: "",
            achievements: ["Top Learner"]
        },
        {
            id: 5,
            name: "Gavin W.",
            level: "Advanced",
            points: 4800,
            stakingAmount: 5000,
            joinDate: "Jan 2025",
            avatar: "",
            achievements: ["DeFi Pioneer"]
        },
        {
            id: 6,
            name: "Alex W.",
            level: "Intermediate",
            points: 3200,
            stakingAmount: 2500,
            joinDate: "Mar 2025",
            avatar: "",
            achievements: ["Fast Learner"]
        },
        {
            id: 7,
            name: "Elena T.",
            level: "Advanced",
            points: 4100,
            stakingAmount: 3800,
            joinDate: "Feb 2025",
            avatar: "",
            achievements: ["Community Leader"]
        },
        {
            id: 8,
            name: "Michael S.",
            level: "Intermediate",
            points: 2950,
            stakingAmount: 1500,
            joinDate: "Mar 2025",
            avatar: "",
            achievements: ["Rising Star"]
        }
    ];

    // Sort and filter data
    const handleSort = (field: string) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("desc");
        }
    };

    const sortedData = [...leaderboardData].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];

        if (typeof aValue === "number" && typeof bValue === "number") {
            return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
        }

        if (typeof aValue === "string" && typeof bValue === "string") {
            return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }

        return 0;
    });

    // Filter data based on search query
    const filteredData = sortedData.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto pb-12">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
                        <p className="text-gray-600 mt-1">Compete with other learners and earn rewards based on your rank</p>
                    </div>

                    {/* Your Rank */}
                    <YourRankCard rank={6} points={3200} level="Intermediate" stakingAmount={2500} />

                    {/* Leaderboard Content */}
                    <div className="mt-8">
                        <Tabs defaultValue="global" className="w-full">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                                <TabsList>
                                    <TabsTrigger value="global">Global</TabsTrigger>
                                    <TabsTrigger value="staking">Staking</TabsTrigger>
                                    <TabsTrigger value="learning">Learning</TabsTrigger>
                                    <TabsTrigger value="community">Community</TabsTrigger>
                                </TabsList>

                                <div className="flex items-center space-x-3">
                                    <Select defaultValue={timeFrame} onValueChange={setTimeFrame}>
                                        <SelectTrigger className="w-40">
                                            <SelectValue placeholder="Time Period" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all-time">All Time</SelectItem>
                                            <SelectItem value="this-month">This Month</SelectItem>
                                            <SelectItem value="this-week">This Week</SelectItem>
                                            <SelectItem value="today">Today</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Search users..."
                                            className="pl-10 w-full sm:w-48"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <TabsContent value="global" className="mt-0">
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-0">
                                        <div className="p-6 pt-4 pb-0">
                                            <TopLeaders data={leaderboardData.slice(0, 3)} />
                                        </div>

                                        <LeaderboardTable
                                            data={filteredData}
                                            sortField={sortField}
                                            sortDirection={sortDirection}
                                            onSort={handleSort}
                                            currentUser="Alex W."
                                        />
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="staking" className="mt-0">
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6">
                                        <div className="text-center py-8">
                                            <div className="mx-auto h-16 w-16 rounded-full bg-[#0056E0]/10 flex items-center justify-center mb-4">
                                                <Coins className="h-8 w-8 text-[#0056E0]" />
                                            </div>
                                            <h3 className="text-lg font-medium mb-2">Staking Leaderboard</h3>
                                            <p className="text-gray-500 max-w-lg mx-auto">
                                                Track top EDU stakers and their rewards. Stake more in educational pools to climb this leaderboard.
                                            </p>

                                            <Button
                                                className="mt-4 bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                                            >
                                                View Staking Pools
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="learning" className="mt-0">
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6">
                                        <div className="text-center py-8">
                                            <div className="mx-auto h-16 w-16 rounded-full bg-[#0056E0]/10 flex items-center justify-center mb-4">
                                                <GraduationCap className="h-8 w-8 text-[#0056E0]" />
                                            </div>
                                            <h3 className="text-lg font-medium mb-2">Learning Leaderboard</h3>
                                            <p className="text-gray-500 max-w-lg mx-auto">
                                                See who's learning the most on EDU Chain. Complete courses to earn points and climb this leaderboard.
                                            </p>

                                            <Button
                                                className="mt-4 bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                                            >
                                                Explore Courses
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="community" className="mt-0">
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6">
                                        <div className="text-center py-8">
                                            <div className="mx-auto h-16 w-16 rounded-full bg-[#0056E0]/10 flex items-center justify-center mb-4">
                                                <Users className="h-8 w-8 text-[#0056E0]" />
                                            </div>
                                            <h3 className="text-lg font-medium mb-2">Community Leaderboard</h3>
                                            <p className="text-gray-500 max-w-lg mx-auto">
                                                Recognize top community contributors. Participate in events and help others to climb this leaderboard.
                                            </p>

                                            <Button
                                                className="mt-4 bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                                            >
                                                Join Community
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Achievements */}
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Your Achievements</h2>
                            <Button variant="ghost" className="text-[#0056E0]">
                                View All
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <AchievementCard
                                title="Course Creator"
                                description="Create and publish educational content on EDU Chain"
                                icon={<BookOpen className="h-5 w-5 text-[#0056E0]" />}
                                progress={25}
                            />

                            <AchievementCard
                                title="Staking Master"
                                description="Reach 5,000 EDU tokens staked across learning pools"
                                icon={<Coins className="h-5 w-5 text-[#0056E0]" />}
                                progress={50}
                            />

                            <AchievementCard
                                title="Community Leader"
                                description="Help onboard 10 new users to the EDU Chain ecosystem"
                                icon={<Users className="h-5 w-5 text-[#0056E0]" />}
                                progress={70}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}