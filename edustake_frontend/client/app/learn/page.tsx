"use client";

import { useState } from "react";
import {
    BookOpen,
    Search,
    Clock,
    Award,
    CheckCircle,
    PlayCircle,
    ArrowUpRight,
    Lock,
    TrendingUp,
    BarChart,
    Zap,
    Sliders,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "@/components/Layout/Sidebar";


// Course Card Component
const CourseCard = ({
    title,
    description,
    image,
    level,
    duration,
    reward,
    completionRate,
    isLocked,
    modules,
    stakingBoost
}: {
    title: string;
    description: string;
    image: string;
    level: "beginner" | "intermediate" | "advanced";
    duration: string;
    reward: number;
    completionRate?: number;
    isLocked?: boolean;
    modules: number;
    stakingBoost: string;
}) => {
    const [showDialog, setShowDialog] = useState(false);

    // Get color based on level
    const getLevelColor = () => {
        switch (level) {
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

    return (
        <>
            <Card className={`border border-gray-200 hover:border-[#0056E0]/40 transition-all duration-300 hover:shadow-md overflow-hidden ${isLocked ? "opacity-80" : ""}`}>
                <div className="relative">
                    <div className="h-48 bg-gradient-to-r from-[#0056E0]/80 to-[#00E5BF]/80 relative overflow-hidden">
                        {image && (
                            <div
                                className="absolute inset-0 bg-center bg-cover mix-blend-overlay"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        )}
                        {isLocked && (
                            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                                <Lock className="h-10 w-10 text-white opacity-80" />
                            </div>
                        )}
                    </div>

                    {/* Level badge */}
                    <div className="absolute top-3 left-3">
                        <Badge className={`${getLevelColor()} border-none`}>
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                        </Badge>
                    </div>

                    {/* Completion badge if applicable */}
                    {completionRate !== undefined && !isLocked && (
                        <div className="absolute top-3 right-3">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-md">
                                            <div className="h-6 w-6 rounded-full flex items-center justify-center bg-gray-100">
                                                <div
                                                    className="h-6 w-6 rounded-full"
                                                    style={{
                                                        background: `conic-gradient(#0056E0 ${completionRate}%, transparent 0)`
                                                    }}
                                                />
                                                <span className="absolute text-xs font-medium">{completionRate}%</span>
                                            </div>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="text-xs">{completionRate}% completed</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    )}
                </div>

                <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
                    <CardDescription className="line-clamp-2">{description}</CardDescription>
                </CardHeader>

                <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <BookOpen className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{modules} Modules</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-[#0056E0]" />
                            <span className="text-sm text-gray-600">{reward} Points</span>
                        </div>
                    </div>

                    <div className="mt-4 bg-gradient-to-r from-[#0056E0]/5 to-[#00E5BF]/5 p-2 rounded-md">
                        <div className="flex items-center">
                            <Zap className="h-4 w-4 text-[#0056E0] mr-2" />
                            <div className="text-sm text-[#0056E0] font-medium">
                                Staking Boost: <span>{stakingBoost}</span>
                            </div>
                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button
                        className={`w-full ${isLocked
                            ? "bg-gray-200 text-gray-600"
                            : "bg-gradient-to-r from-[#0056E0] to-[#00E5BF] text-white hover:opacity-90"
                            }`}
                        disabled={isLocked}
                        onClick={() => setShowDialog(true)}
                    >
                        {isLocked ? "Locked" : completionRate ? "Continue Learning" : "Start Course"}
                    </Button>
                </CardFooter>
            </Card>

            {/* Course Dialog */}
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent className="sm:max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-sm font-medium mb-2">Course Overview</h3>
                                <p className="text-sm text-gray-600">
                                    This course is designed to help you understand the fundamentals of blockchain technology and learn how to use the EDU Chain platform. You'll gain valuable knowledge that will boost your staking rewards.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium mb-2">What You'll Learn</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                        <span className="text-sm text-gray-600">Understanding of blockchain fundamentals</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                        <span className="text-sm text-gray-600">How to deploy smart contracts on EDU Chain</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                        <span className="text-sm text-gray-600">Optimizing staking strategies for maximum rewards</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                        <span className="text-sm text-gray-600">Building educational dApps on the EDU Chain ecosystem</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium mb-2">Course Modules</h3>
                                <div className="space-y-2">
                                    <div className="p-2 rounded-md bg-[#0056E0]/5 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="h-6 w-6 rounded-full bg-[#0056E0] text-white flex items-center justify-center mr-2 text-xs font-medium">1</div>
                                            <span className="text-sm font-medium">Introduction to EDU Chain</span>
                                        </div>
                                        <div className="text-xs text-gray-500">20 min</div>
                                    </div>
                                    <div className="p-2 rounded-md hover:bg-gray-50 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-2 text-xs font-medium">2</div>
                                            <span className="text-sm">Understanding Staking Mechanisms</span>
                                        </div>
                                        <div className="text-xs text-gray-500">35 min</div>
                                    </div>
                                    <div className="p-2 rounded-md hover:bg-gray-50 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-2 text-xs font-medium">3</div>
                                            <span className="text-sm">Smart Contracts & Educational dApps</span>
                                        </div>
                                        <div className="text-xs text-gray-500">45 min</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-medium mb-2">Course Details</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Level:</span>
                                        <span className="font-medium capitalize">{level}</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Duration:</span>
                                        <span className="font-medium">{duration}</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Modules:</span>
                                        <span className="font-medium">{modules}</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Points:</span>
                                        <span className="font-medium">{reward}</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Staking Boost:</span>
                                        <span className="font-medium text-[#0056E0]">{stakingBoost}</span>
                                    </li>
                                </ul>
                            </div>

                            <Button
                                className="w-full bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                            >
                                <PlayCircle className="h-4 w-4 mr-2" />
                                {completionRate ? "Continue Course" : "Start Learning"}
                            </Button>

                            <div className="text-center text-xs text-gray-500">
                                <p>This course rewards you with both knowledge and staking benefits</p>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

// Learning Path Component
const LearningPath = ({
    title,
    description,
    courses,
    progress,
    reward
}: {
    title: string;
    description: string;
    courses: number;
    progress: number;
    reward: string;
}) => {
    return (
        <Card className="border border-gray-200 hover:border-[#0056E0]/40 transition-all duration-300 hover:shadow-md">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className="mt-1">{description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] text-white border-none">
                        Learning Path
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-1">
                            <BookOpen className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{courses} Courses</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Zap className="h-4 w-4 text-[#0056E0]" />
                            <span className="text-sm text-gray-600">Staking Boost: {reward}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white">
                    Continue Path
                </Button>
            </CardFooter>
        </Card>
    );
};

// Filter Section Component
const FilterSection = ({ title, options }: { title: string; options: string[] }) => {
    return (
        <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">{title}</h3>
            <div className="space-y-2">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`${title.toLowerCase()}-${index}`} />
                        <label
                            htmlFor={`${title.toLowerCase()}-${index}`}
                            className="text-sm text-gray-600 cursor-pointer"
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function LearnPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto pb-12">
                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Learning Center</h1>
                        <p className="text-gray-600 mt-1">Enhance your knowledge and earn rewards that boost your staking multipliers</p>
                    </div>

                    {/* Learning Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card className="bg-white border-none shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-gray-500">Learning Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-2xl font-bold">65%</div>
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0056E0]/10 to-[#00E5BF]/10 flex items-center justify-center">
                                        <BarChart className="h-4 w-4 text-[#0056E0]" />
                                    </div>
                                </div>
                                <Progress value={65} className="h-2 mb-2" />
                                <p className="text-xs text-gray-500">13 of 20 courses completed</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-gray-500">Current Boost</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold">1.5x</div>
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0056E0]/10 to-[#00E5BF]/10 flex items-center justify-center">
                                        <TrendingUp className="h-4 w-4 text-[#0056E0]" />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Applied to all your active stakes</p>
                                <div className="mt-4">
                                    <Button variant="outline" size="sm" className="text-[#0056E0] text-xs">
                                        <ArrowUpRight className="h-3 w-3 mr-1" />
                                        How to increase
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-gray-500">Learning Points</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold">3,250</div>
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0056E0]/10 to-[#00E5BF]/10 flex items-center justify-center">
                                        <Award className="h-4 w-4 text-[#0056E0]" />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Lifetime points earned</p>
                                <div className="mt-4">
                                    <Button variant="outline" size="sm" className="text-[#0056E0] text-xs">
                                        View rewards
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Featured Learning Path */}
                    <div className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] rounded-lg p-6 text-white mb-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-2">EDU Chain Developer Path</h2>
                                <p className="opacity-90 max-w-2xl">Master the skills needed to build decentralized educational applications on EDU Chain. Complete all courses to earn a 2x staking multiplier.</p>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    <div className="bg-white/20 rounded-md px-3 py-2">
                                        <p className="text-xs uppercase opacity-75">Courses</p>
                                        <p className="text-lg font-bold">8</p>
                                    </div>
                                    <div className="bg-white/20 rounded-md px-3 py-2">
                                        <p className="text-xs uppercase opacity-75">Duration</p>
                                        <p className="text-lg font-bold">16 hours</p>
                                    </div>
                                    <div className="bg-white/20 rounded-md px-3 py-2">
                                        <p className="text-xs uppercase opacity-75">Staking Boost</p>
                                        <p className="text-lg font-bold">Up to 2x</p>
                                    </div>
                                    <div className="bg-white/20 rounded-md px-3 py-2">
                                        <p className="text-xs uppercase opacity-75">Completion</p>
                                        <p className="text-lg font-bold">25%</p>
                                    </div>
                                </div>
                            </div>

                            <Button className="bg-white text-[#0056E0] hover:bg-white/90 mt-4 md:mt-0">
                                Continue Path
                            </Button>
                        </div>
                    </div>

                    {/* Filters and Courses */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters - Desktop */}
                        <div className="hidden lg:block w-64 bg-white p-4 rounded-lg shadow-sm sticky top-24 h-fit">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-medium">Filters</h3>
                                <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-gray-500">
                                    Reset
                                </Button>
                            </div>

                            <FilterSection
                                title="Level"
                                options={["Beginner", "Intermediate", "Advanced"]}
                            />

                            <FilterSection
                                title="Duration"
                                options={["< 1 hour", "1-3 hours", "3-6 hours", "> 6 hours"]}
                            />

                            <FilterSection
                                title="Category"
                                options={["Blockchain", "Smart Contracts", "DeFi", "Web3", "Educational"]}
                            />

                            <FilterSection
                                title="Staking Boost"
                                options={["1.2x", "1.5x", "1.8x", "2x+"]}
                            />

                            <Button className="w-full mt-2 bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white">
                                Apply Filters
                            </Button>
                        </div>

                        {/* Filters - Mobile */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="lg:hidden mb-4 flex items-center"
                                >
                                    <Sliders className="h-4 w-4 mr-2" />
                                    Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-full sm:max-w-md">
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                    <SheetDescription>
                                        Filter courses by different criteria
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="py-4">
                                    <FilterSection
                                        title="Level"
                                        options={["Beginner", "Intermediate", "Advanced"]}
                                    />

                                    <FilterSection
                                        title="Duration"
                                        options={["< 1 hour", "1-3 hours", "3-6 hours", "> 6 hours"]}
                                    />

                                    <FilterSection
                                        title="Category"
                                        options={["Blockchain", "Smart Contracts", "DeFi", "Web3", "Educational"]}
                                    />

                                    <FilterSection
                                        title="Staking Boost"
                                        options={["1.2x", "1.5x", "1.8x", "2x+"]}
                                    />
                                </div>
                                <div className="mt-4 flex space-x-2">
                                    <Button variant="outline" className="flex-1">Reset</Button>
                                    <Button className="flex-1 bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white">Apply</Button>
                                </div>
                            </SheetContent>
                        </Sheet>

                        {/* Courses Content */}
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                                <Tabs defaultValue="all" className="w-full sm:w-auto">
                                    <TabsList>
                                        <TabsTrigger value="all">All Courses</TabsTrigger>
                                        <TabsTrigger value="my-courses">My Courses</TabsTrigger>
                                        <TabsTrigger value="learning-paths">Learning Paths</TabsTrigger>
                                    </TabsList>
                                </Tabs>

                                <div className="relative w-full sm:w-64">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        placeholder="Search courses..."
                                        className="pl-10 w-full"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>

                            <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="all">
                                <TabsContent value="all" className="mt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                        <CourseCard
                                            title="Blockchain Fundamentals"
                                            description="Learn the core concepts of blockchain technology and its applications in education."
                                            image="/api/placeholder/400/240"
                                            level="beginner"
                                            duration="2 hours"
                                            reward={100}
                                            modules={5}
                                            stakingBoost="1.1x"
                                            completionRate={75}
                                        />

                                        <CourseCard
                                            title="DeFi on EDU Chain"
                                            description="Explore decentralized finance applications in the educational ecosystem."
                                            image="/api/placeholder/400/240"
                                            level="intermediate"
                                            duration="3.5 hours"
                                            reward={150}
                                            modules={8}
                                            stakingBoost="1.2x"
                                            completionRate={30}
                                        />

                                        <CourseCard
                                            title="Smart Contract Development"
                                            description="Build and deploy smart contracts on the EDU Chain platform."
                                            image="/api/placeholder/400/240"
                                            level="advanced"
                                            duration="6 hours"
                                            reward={250}
                                            modules={12}
                                            stakingBoost="1.3x"
                                        />

                                        <CourseCard
                                            title="Educational NFTs"
                                            description="Create and manage educational credentials as NFTs on EDU Chain."
                                            image="/api/placeholder/400/240"
                                            level="intermediate"
                                            duration="4 hours"
                                            reward={200}
                                            modules={7}
                                            stakingBoost="1.2x"
                                        />

                                        <CourseCard
                                            title="Advanced Staking Strategies"
                                            description="Optimize your staking approach to maximize returns through educational achievements."
                                            image="/api/placeholder/400/240"
                                            level="advanced"
                                            duration="2.5 hours"
                                            reward={180}
                                            modules={6}
                                            stakingBoost="1.4x"
                                            isLocked={true}
                                        />

                                        <CourseCard
                                            title="Community Building in Web3"
                                            description="Learn how to grow and manage educational communities in the Web3 space."
                                            image="/api/placeholder/400/240"
                                            level="beginner"
                                            duration="3 hours"
                                            reward={120}
                                            modules={8}
                                            stakingBoost="1.1x"
                                        />
                                    </div>
                                </TabsContent>

                                <TabsContent value="my-courses" className="mt-0">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-4">In Progress</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                                <CourseCard
                                                    title="Blockchain Fundamentals"
                                                    description="Learn the core concepts of blockchain technology and its applications in education."
                                                    image="/api/placeholder/400/240"
                                                    level="beginner"
                                                    duration="2 hours"
                                                    reward={100}
                                                    modules={5}
                                                    stakingBoost="1.1x"
                                                    completionRate={75}
                                                />

                                                <CourseCard
                                                    title="DeFi on EDU Chain"
                                                    description="Explore decentralized finance applications in the educational ecosystem."
                                                    image="/api/placeholder/400/240"
                                                    level="intermediate"
                                                    duration="3.5 hours"
                                                    reward={150}
                                                    modules={8}
                                                    stakingBoost="1.2x"
                                                    completionRate={30}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-medium text-lg mb-4">Completed</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                                <CourseCard
                                                    title="Introduction to EDU Chain"
                                                    description="Get started with the EDU Chain platform and learn about its core features."
                                                    image="/api/placeholder/400/240"
                                                    level="beginner"
                                                    duration="1 hour"
                                                    reward={50}
                                                    modules={3}
                                                    stakingBoost="1.05x"
                                                    completionRate={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="learning-paths" className="mt-0">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <LearningPath
                                            title="EDU Chain Developer"
                                            description="Master the skills to build on the EDU Chain platform"
                                            courses={8}
                                            progress={25}
                                            reward="Up to 2x"
                                        />

                                        <LearningPath
                                            title="DeFi Specialist"
                                            description="Learn about decentralized finance in education"
                                            courses={6}
                                            progress={0}
                                            reward="Up to 1.5x"
                                        />

                                        <LearningPath
                                            title="Community Leader"
                                            description="Skills for growing and managing educational communities"
                                            courses={5}
                                            progress={60}
                                            reward="Up to 1.4x"
                                        />

                                        <LearningPath
                                            title="Educational Content Creator"
                                            description="Create valuable learning resources on EDU Chain"
                                            courses={7}
                                            progress={10}
                                            reward="Up to 1.6x"
                                        />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}