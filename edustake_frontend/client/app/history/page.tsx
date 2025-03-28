"use client";

import { useState } from "react";
import {
    CalendarIcon,
    ArrowDownIcon,
    ArrowUpIcon,
    FilterIcon,
    SearchIcon,
    EyeIcon,
    DownloadIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from "lucide-react";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Transaction component
const Transaction = ({
    type,
    amount,
    token,
    date,
    status,
    hash
}: {
    type: "stake" | "unstake" | "reward";
    amount: string;
    token: string;
    date: string;
    status: "completed" | "pending" | "failed";
    hash: string;
}) => {
    const getStatusBadge = () => {
        switch (status) {
            case "completed":
                return <Badge className="bg-green-100 text-green-800 border-none">Completed</Badge>;
            case "pending":
                return <Badge className="bg-yellow-100 text-yellow-800 border-none">Pending</Badge>;
            case "failed":
                return <Badge className="bg-red-100 text-red-800 border-none">Failed</Badge>;
            default:
                return null;
        }
    };

    const getTypeIcon = () => {
        switch (type) {
            case "stake":
                return <ArrowDownIcon className="h-4 w-4 text-green-600" />;
            case "unstake":
                return <ArrowUpIcon className="h-4 w-4 text-red-600" />;
            case "reward":
                return <ArrowDownIcon className="h-4 w-4 text-[#0056E0]" />;
            default:
                return null;
        }
    };

    const getTypeLabel = () => {
        switch (type) {
            case "stake":
                return "Stake";
            case "unstake":
                return "Unstake";
            case "reward":
                return "Reward";
            default:
                return "";
        }
    };

    return (
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#0056E0]/10 to-[#00E5BF]/10 flex items-center justify-center mr-4">
                    {getTypeIcon()}
                </div>
                <div>
                    <div className="font-medium text-gray-900">{getTypeLabel()}</div>
                    <div className="text-xs text-gray-500">{date}</div>
                </div>
            </div>
            <div className="text-right">
                <div className="font-medium text-gray-900">{amount} {token}</div>
                <div className="text-xs text-gray-500 truncate max-w-[200px]">Hash: {hash}</div>
            </div>
            <div className="flex items-center space-x-2">
                {getStatusBadge()}
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                    <EyeIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};

export default function HistoryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [dateRange, setDateRange] = useState("all-time");
    const [transactionType, setTransactionType] = useState("all");

    // Sample transaction data
    const transactions = [
        {
            type: "stake" as const,
            amount: "500",
            token: "EDU",
            date: "Mar 26, 2023 - 12:34 PM",
            status: "completed" as const,
            hash: "0x7a59c711e0a47842e8a423b68c22e45f2c2bc207795c9fa45829bb3d3ad10b91"
        },
        {
            type: "reward" as const,
            amount: "25",
            token: "EDU",
            date: "Mar 25, 2023 - 9:12 AM",
            status: "completed" as const,
            hash: "0x8b35c02f5e2b34b4a3438dd49c21f2d5c092b87c123c9fa45829bb3d3ad10b91"
        },
        {
            type: "unstake" as const,
            amount: "100",
            token: "EDU",
            date: "Mar 22, 2023 - 5:45 PM",
            status: "completed" as const,
            hash: "0x9c47d15a8e3f7bb2c3e01d8f5a4f42b8b987c87c123c9fa45829bb3d3ad10b91"
        },
        {
            type: "stake" as const,
            amount: "200",
            token: "EDU",
            date: "Mar 20, 2023 - 10:22 AM",
            status: "pending" as const,
            hash: "0xa31bc02f5e2b34b4a3438dd49c21f2d5c092b87c123c9fa45829bb3d3ad10b91"
        },
        {
            type: "reward" as const,
            amount: "15",
            token: "EDU",
            date: "Mar 15, 2023 - 3:18 PM",
            status: "completed" as const,
            hash: "0xb25e4fd12e987bc6d5a4f1e98c2fa97e845b1a6f123c9fa45829bb3d3ad10b91"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto pb-12">
                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Transaction History</h1>
                        <p className="text-gray-600 mt-1">View and track all your staking and reward transactions</p>
                    </div>

                    {/* Filters */}
                    <Card className="mb-6">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Filters</CardTitle>
                            <CardDescription>Refine your transaction history view</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[200px]">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
                                    <div className="relative">
                                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Search by hash or amount..."
                                            className="pl-10"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="w-[180px]">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Date Range</label>
                                    <Select value={dateRange} onValueChange={setDateRange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select date range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="today">Today</SelectItem>
                                            <SelectItem value="this-week">This Week</SelectItem>
                                            <SelectItem value="this-month">This Month</SelectItem>
                                            <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                                            <SelectItem value="all-time">All Time</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="w-[180px]">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Transaction Type</label>
                                    <Select value={transactionType} onValueChange={setTransactionType}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Types</SelectItem>
                                            <SelectItem value="stake">Stakes</SelectItem>
                                            <SelectItem value="unstake">Unstakes</SelectItem>
                                            <SelectItem value="reward">Rewards</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-end">
                                    <Button className="bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white">
                                        <FilterIcon className="h-4 w-4 mr-2" />
                                        Apply Filters
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Transactions */}
                    <Card>
                        <CardHeader className="pb-3 flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-lg">Transactions</CardTitle>
                                <CardDescription>Recent staking activity</CardDescription>
                            </div>
                            <Button variant="outline" size="sm" className="text-[#0056E0] border-[#0056E0]/30">
                                <DownloadIcon className="h-4 w-4 mr-2" />
                                Export CSV
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="all">
                                <TabsList className="mb-4">
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="stakes">Stakes</TabsTrigger>
                                    <TabsTrigger value="rewards">Rewards</TabsTrigger>
                                    <TabsTrigger value="unstakes">Unstakes</TabsTrigger>
                                </TabsList>

                                <TabsContent value="all" className="mt-0">
                                    <div className="divide-y divide-gray-100">
                                        {transactions.map((transaction, index) => (
                                            <Transaction
                                                key={index}
                                                type={transaction.type}
                                                amount={transaction.amount}
                                                token={transaction.token}
                                                date={transaction.date}
                                                status={transaction.status}
                                                hash={transaction.hash}
                                            />
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="text-sm text-gray-500">
                                            Showing 1-5 of 42 transactions
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                                <ChevronLeftIcon className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-[#0056E0] text-white border-[#0056E0]">
                                                1
                                            </Button>
                                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                                2
                                            </Button>
                                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                                3
                                            </Button>
                                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                                <ChevronRightIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="stakes" className="mt-0">
                                    <div className="divide-y divide-gray-100">
                                        {transactions
                                            .filter(t => t.type === "stake")
                                            .map((transaction, index) => (
                                                <Transaction
                                                    key={index}
                                                    type={transaction.type}
                                                    amount={transaction.amount}
                                                    token={transaction.token}
                                                    date={transaction.date}
                                                    status={transaction.status}
                                                    hash={transaction.hash}
                                                />
                                            ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="rewards" className="mt-0">
                                    <div className="divide-y divide-gray-100">
                                        {transactions
                                            .filter(t => t.type === "reward")
                                            .map((transaction, index) => (
                                                <Transaction
                                                    key={index}
                                                    type={transaction.type}
                                                    amount={transaction.amount}
                                                    token={transaction.token}
                                                    date={transaction.date}
                                                    status={transaction.status}
                                                    hash={transaction.hash}
                                                />
                                            ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="unstakes" className="mt-0">
                                    <div className="divide-y divide-gray-100">
                                        {transactions
                                            .filter(t => t.type === "unstake")
                                            .map((transaction, index) => (
                                                <Transaction
                                                    key={index}
                                                    type={transaction.type}
                                                    amount={transaction.amount}
                                                    token={transaction.token}
                                                    date={transaction.date}
                                                    status={transaction.status}
                                                    hash={transaction.hash}
                                                />
                                            ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
}