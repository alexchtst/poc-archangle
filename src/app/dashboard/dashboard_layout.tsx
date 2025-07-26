'use client'

import { AppSidebar } from "@/components/app-sidebar"
import { DomainData } from "@/components/domain-data"
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
    SmartContract = "SmartContract",
    Services = "Services",
    Reporting = "Reporting"
}

function QuickScanDomain() {
    return (
        <div>Quick Scan Domain</div>
    )
}

function TrackHref() {
    return (
        <div>Track Href</div>
    )
}

function BlackListedDomain() {
    return (
        <div>
            <DomainData />
        </div>
    )
}

function FraudAnalisis() {
    return (
        <div>Mocked Fraud Analysis</div>
    )
}

function SmartContractTransparency() {
    return (
        <div>SmartContractTransparency</div>
    )
}

function UpCommingServices() {
    return (
        <div>UpCommingServices</div>
    )
}

function Reporting() {
    return (
        <div>Reporting</div>
    )
}

export default function Dashboard({}) {
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
                                <div className="mb-4 text-sm text-muted-foreground">
                                    {selected === SeletOption.QuictScan && <QuickScanDomain />}
                                    {selected === SeletOption.TrackHref && <TrackHref />}
                                    {selected === SeletOption.StoredFraud && <FraudAnalisis />}
                                    {selected === SeletOption.BlackListed && <BlackListedDomain />}

                                    {selected === SeletOption.SmartContract && <SmartContractTransparency />}
                                    {selected === SeletOption.Services && <UpCommingServices />}
                                    {selected === SeletOption.Reporting && <Reporting />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
