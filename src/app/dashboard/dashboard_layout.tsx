'use client'

import { AppSidebar } from "@/components/app-sidebar"
import { DomainData } from "@/components/domain-data"
import GraphAnalysis from "@/components/graph-analisys"
import { sampleTransactionData } from "@/components/graph-data"
import { SiteHeader } from "@/components/site-header"
import TrackFraud from "@/components/TrackFraud"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import React, { useState } from "react"
import { toast } from "sonner"

export enum SeletOption {
    QuictScan = "QuictScan",
    TrackFraud = "TrackFraud",
    BlackListed = "BlackListed",
    StoredFraud = "StoredFraud",
    Reports = "Reports",
    SmartContract = "SmartContract",
    Services = "Services",
    Reporting = "Reporting"
}

function QuickScanDomain() {
    return (
        <div className="w-full h-[400px] flex justify-center items-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Domain Content Check</CardTitle>
                    <CardDescription>
                        Enter suspacious Domain
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Input
                                    type="text"
                                    placeholder="domanin ex. https://www.example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Input
                                    type="text"
                                    placeholder="keyword"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full"
                        onClick={() =>
                            toast("The Domain is save", {
                                description: "Sunday, December 03, 2023 at 9:00 AM",
                                action: {
                                    label: "OKE",
                                    onClick: () => console.log("Undo"),
                                },
                            })
                        }>
                        Quick Check
                    </Button>
                    <Button variant="outline" className="w-full"
                        onClick={() =>
                            toast("The Domain is not save", {
                                description: "Sunday, December 03, 2023 at 9:00 AM",
                                action: {
                                    label: "Add to Blacklist",
                                    onClick: () => console.log("Undo"),
                                },
                            })
                        }
                    >
                        Deep Check
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

function BlackListedDomain() {
    return (
        <div>
            <DomainData />
        </div>
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

export default function Dashboard({ }) {
    const [selected, setSelected] = useState<SeletOption>(SeletOption.QuictScan)

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
                                    {selected === SeletOption.TrackFraud && <GraphAnalysis data={sampleTransactionData} />}
                                    {selected === SeletOption.StoredFraud && <TrackFraud />}
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
