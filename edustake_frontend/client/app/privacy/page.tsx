"use client";

import Link from "next/link";
import {
    Shield,
    Lock,
    Eye,
    Database,
    Trash,
    MessageCircle,
    Globe,
    MailIcon,
    Calendar,
    ArrowLeft,
    Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex justify-between items-center mb-8">
                    <Link href="/">
                        <Button variant="ghost" className="flex items-center">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                    <Button variant="ghost" className="flex items-center" onClick={() => window.print()}>
                        <Printer className="h-4 w-4 mr-2" />
                        Print
                    </Button>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="flex items-center mb-6">
                        <Shield className="h-8 w-8 text-[#0056E0] mr-3" />
                        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                    </div>

                    <div className="text-sm text-gray-500 mb-8">
                        <p>Last Updated: {formattedDate}</p>
                    </div>

                    <div className="prose max-w-none text-gray-700">
                        <p className="lead text-lg">
                            At EDU Chain, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                            disclose, and safeguard your information when you use our platform.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 flex items-center">
                            <Database className="h-5 w-5 mr-2 text-[#0056E0]" />
                            Information We Collect
                        </h2>
                        <p>
                            We collect information that you provide directly to us when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Register for an account</li>
                            <li>Connect your wallet</li>
                            <li>Participate in educational courses</li>
                            <li>Stake your tokens</li>
                            <li>Communicate with support</li>
                            <li>Complete your profile</li>
                        </ul>

                        <p className="mt-4">
                            This information may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Email address and contact information</li>
                            <li>Wallet addresses</li>
                            <li>Transaction history on the platform</li>
                            <li>Educational progress and achievements</li>
                            <li>Communication history with our team</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 flex items-center">
                            <Eye className="h-5 w-5 mr-2 text-[#0056E0]" />
                            How We Use Your Information
                        </h2>
                        <p>
                            We use the information we collect for various purposes, including to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, maintain, and improve the EDU Chain platform</li>
                            <li>Process transactions and send related information</li>
                            <li>Track your educational progress and calculate staking rewards</li>
                            <li>Send notifications about your account, staking status, and educational opportunities</li>
                            <li>Respond to your comments, questions, and requests</li>
                            <li>Monitor and analyze trends, usage, and activities</li>
                            <li>Prevent fraudulent transactions and enhance security</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 flex items-center">
                            <Lock className="h-5 w-5 mr-2 text-[#0056E0]" />
                            Information Security
                        </h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect the security of
                            your personal information. However, please be aware that no security system is impenetrable,
                            and we cannot guarantee the absolute security of your data.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 flex items-center">
                            <Globe className="h-5 w-5 mr-2 text-[#0056E0]" />
                            International Transfers
                        </h2>
                        <p>
                            Your information may be transferred to, and maintained on, computers located outside your
                            state, province, country, or other governmental jurisdiction where the data protection laws
                            may differ from those in your jurisdiction.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 flex items-center">
                            <Trash className="h-5 w-5 mr-2 text-[#0056E0]" />
                            Your Data Rights
                        </h2>
                        <p>
                            Depending on your location, you may have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access to your personal information</li>
                            <li>Correction of inaccurate or incomplete data</li>
                            <li>Deletion of your personal information</li>
                            <li>Restriction or objection to certain processing activities</li>
                            <li>Data portability</li>
                            <li>Withdrawal of consent</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-[#0056E0]" />
                            Policy Updates
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or
                            for other operational, legal, or regulatory reasons. We will notify you of any material
                            changes by posting the updated Privacy Policy on this page with a new "Last Updated" date.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 flex items-center">
                            <MessageCircle className="h-5 w-5 mr-2 text-[#0056E0]" />
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-md mt-4">
                            <p className="flex items-center">
                                <MailIcon className="h-4 w-4 text-[#0056E0] mr-2" />
                                <a href="mailto:privacy@educhain.com" className="text-[#0056E0]">privacy@educhain.com</a>
                            </p>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <div className="text-sm text-gray-500 text-center">
                        <p>© {currentDate.getFullYear()} EDU Chain. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}