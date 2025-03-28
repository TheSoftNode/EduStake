"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    activeClassName?: string;
    exact?: boolean;
    delay?: number;
}

export default function NavLink({
    href,
    children,
    className,
    onClick,
    activeClassName = "active",
    exact = false,
    delay = 0
}: NavLinkProps) {
    const pathname = usePathname();
    const isActive = exact
        ? pathname === href
        : pathname.startsWith(href) && href !== "/";

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: delay * 0.1 + 0.2,
                ease: "easeOut"
            }}
        >
            <Link
                href={href}
                onClick={onClick}
                className={cn(
                    "nav-link relative font-medium transition-colors duration-300 px-3 py-2",
                    isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white",
                    className
                )}
            >
                <span className="relative z-10">{children}</span>

                {/* Animated underline */}
                {isActive && (
                    <motion.span
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#50C878] rounded-full"
                        layoutId="navbar-underline"
                        style={{ width: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}

                {/* Hover backdrop effect */}
                <motion.span
                    className="absolute inset-0 rounded-md -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{
                        opacity: isActive ? 0.15 : 0.1,
                        backgroundColor: isActive ? "#50C878" : "#fff"
                    }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
        </motion.div>
    );
}