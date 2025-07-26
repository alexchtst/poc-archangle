'use client'

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import React, { useState } from "react"

export enum SeletOption {
    QuictScan = "QuictScan",
    TrackHref = "TrackHref",
    BlackListed = "BlackListed",
    StoredFraud = "StoredFraud",
    Reports = "Reports",
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [selected, setSelected] = useState<SeletOption | null>(null)

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar
                onSelect={(opt: SeletOption) => {
                    setSelected(opt)
                    console.log("Selected:", opt)
                }}
            />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <div className="px-4 lg:px-6">
                                {children}
                                <div className="mb-4 text-sm text-muted-foreground">
                                    Selected: {selected ?? "None"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
