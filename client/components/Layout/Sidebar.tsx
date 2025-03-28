"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Wallet,
    GraduationCap,
    Trophy,
    Users,
    Settings,
    HelpCircle,
    ChevronRight,
    CreditCard,
    History,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type NavItemProps = {
    icon: React.ReactNode;
    label: string;
    href: string;
    isActive?: boolean;
    isPro?: boolean;
    isCollapsed?: boolean;
    onClick?: () => void;
};

const NavItem = ({
    icon,
    label,
    href,
    isActive,
    isPro,
    isCollapsed,
    onClick
}: NavItemProps) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all",
                isActive
                    ? "bg-gradient-to-r from-[#0056E0]/10 to-[#00E5BF]/10 text-[#0056E0] font-medium"
                    : "text-gray-600 hover:bg-gray-100",
                isCollapsed && "justify-center px-2"
            )}
        >
            {icon}
            {!isCollapsed && <span>{label}</span>}
            {!isCollapsed && isPro && (
                <span className="ml-auto text-xs font-medium bg-gradient-to-r from-[#0056E0] to-[#00E5BF] text-white px-1.5 py-0.5 rounded">
                    PRO
                </span>
            )}
        </Link>
    );
};

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    // Wallet connection info
    const [isWalletConnected, setIsWalletConnected] = useState(true);
    const walletAddress = "0x71C...8a4E";

    return (
        <div
            className={cn(
                "flex flex-col border-r bg-white h-screen sticky top-0 pt-16 transition-all duration-300",
                isCollapsed ? "w-16" : "w-64"
            )}
        >
            <div className="flex items-center justify-end p-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <ChevronRight className={cn(
                        "h-4 w-4 transition-all",
                        isCollapsed && "rotate-180"
                    )} />
                </Button>
            </div>

            {/* Wallet Connection Indicator */}
            <div className={cn(
                "mx-3 mb-4 p-2 rounded-lg flex items-center",
                isWalletConnected
                    ? "bg-gradient-to-r from-[#0056E0]/10 to-[#00E5BF]/10"
                    : "bg-gray-100"
            )}>
                <div className={cn(
                    "h-2 w-2 rounded-full mr-2",
                    isWalletConnected ? "bg-green-500" : "bg-gray-400"
                )}></div>
                {!isCollapsed && (
                    <div className="flex-1 truncate">
                        {isWalletConnected ? (
                            <div className="flex flex-col">
                                <span className="text-xs font-medium text-[#0056E0]">Connected</span>
                                <span className="text-xs text-gray-500 truncate">{walletAddress}</span>
                            </div>
                        ) : (
                            <Button
                                size="sm"
                                className="text-xs h-6 bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                            >
                                Connect Wallet
                            </Button>
                        )}
                    </div>
                )}
                {isCollapsed && !isWalletConnected && (
                    <Wallet className="h-4 w-4 text-gray-400" />
                )}
            </div>

            <ScrollArea className="flex-1 px-3">
                <div className="space-y-1 py-2">
                    <NavItem
                        icon={<LayoutDashboard className="h-5 w-5 text-[#0056E0]" />}
                        label="Dashboard"
                        href="/dashboard"
                        isActive={pathname === "/dashboard"}
                        isCollapsed={isCollapsed}
                    />
                    <NavItem
                        icon={<Wallet className="h-5 w-5 text-[#0056E0]" />}
                        label="Staking Pools"
                        href="/stake"
                        isActive={pathname === "/stake"}
                        isCollapsed={isCollapsed}
                    />
                    <NavItem
                        icon={<CreditCard className="h-5 w-5 text-[#0056E0]" />}
                        label="My Stakes"
                        href="/mystakes"
                        isActive={pathname === "/mystakes"}
                        isCollapsed={isCollapsed}
                    />
                    <NavItem
                        icon={<GraduationCap className="h-5 w-5 text-[#0056E0]" />}
                        label="Learning Path"
                        href="/learn"
                        isActive={pathname === "/learn"}
                        isCollapsed={isCollapsed}
                    />
                    <NavItem
                        icon={<Trophy className="h-5 w-5 text-[#0056E0]" />}
                        label="Leaderboard"
                        href="/leaderboard"
                        isActive={pathname === "/leaderboard"}
                        isCollapsed={isCollapsed}
                    />
                    <NavItem
                        icon={<History className="h-5 w-5 text-[#0056E0]" />}
                        label="Transaction History"
                        href="/history"
                        isActive={pathname === "/history"}
                        isCollapsed={isCollapsed}
                    />
                </div>

                {!isCollapsed && (
                    <div className="mt-6">
                        <div className="text-xs font-semibold text-gray-500 px-3 py-2">
                            COMMUNITY
                        </div>
                    </div>
                )}

                <div className="space-y-1 py-2">
                    <NavItem
                        icon={<Users className="h-5 w-5 text-gray-500" />}
                        label="Learning Circles"
                        href="/community"
                        isActive={pathname === "/community"}
                        isPro={true}
                        isCollapsed={isCollapsed}
                    />
                </div>

                <div className="space-y-1 py-2 mt-6">
                    <NavItem
                        icon={<Settings className="h-5 w-5 text-gray-500" />}
                        label="Settings"
                        href="/settings"
                        isActive={pathname === "/settings"}
                        isCollapsed={isCollapsed}
                    />
                    <NavItem
                        icon={<HelpCircle className="h-5 w-5 text-gray-500" />}
                        label="Help"
                        href="/help"
                        isActive={pathname === "/help"}
                        isCollapsed={isCollapsed}
                    />
                </div>
            </ScrollArea>

            {!isCollapsed && (
                <div className="p-4 mt-auto border-t">
                    <div className="bg-gradient-to-r from-[#0056E0]/5 to-[#00E5BF]/5 rounded-lg p-4">
                        <h4 className="font-medium text-[#0056E0] text-sm">Earn More Rewards</h4>
                        <p className="text-xs text-gray-600 mt-1">Complete educational quests to boost your staking multiplier.</p>
                        <Button
                            className="w-full mt-3 bg-gradient-to-r from-[#0056E0] to-[#00E5BF] hover:opacity-90 text-white"
                            size="sm"
                        >
                            Start Learning
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}