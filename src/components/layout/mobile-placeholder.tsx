"use client"

import { Logo } from "@/components/logo";

export function MobilePlaceholder() {
    return (
        <div className="block lg:hidden min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center relative overflow-hidden">
            {/* Background Pattern - Same as Desktop Dashboard */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* Content Card - Matches Desktop Widget Style */}
            <div className="max-w-md w-full space-y-8 rounded-2xl shadow-sm p-10 bg-white relative z-10 border border-slate-100">
                {/* Logo */}
                <div className="flex justify-center">
                    <Logo theme="azure" className="h-14 w-auto" />
                </div>

                <div className="space-y-6">
                    {/* Main Message */}
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        Mobile Experience in Progress
                    </h1>

                    {/* Subtext - Matches Desktop Dashboard Typography */}
                    <p className="text-base text-slate-600 leading-relaxed">
                        We are building a dedicated mobile app to help you learn on the go. For now, please continue your journey on your desktop computer.
                    </p>
                </div>
            </div>
        </div>
    );
}
