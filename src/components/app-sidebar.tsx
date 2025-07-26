"use client"

import * as React from "react"
import {
  IconAnalyze,
  IconChartBar,
  IconDatabase,
  IconFolder,
  IconLighter,
  IconReport,
  IconRobot,
  IconScan,
  IconShield,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SeletOption } from "@/app/dashboard/dashboard_layout"


export function AppSidebar({
  onSelect,
  ...props
}: {
  onSelect: (option: SeletOption) => void
}) {
  const data = {
    user: {
      name: "archangle",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Quick Scan",
        icon: IconScan,
        onChange: () => onSelect(SeletOption.QuictScan),
      },
      {
        title: "Track Href",
        icon: IconAnalyze,
        onChange: () => onSelect(SeletOption.TrackHref),
      },
      {
        title: "Fraud Detection",
        icon: IconChartBar,
        onChange: () => onSelect(SeletOption.StoredFraud),
      },
      {
        title: "BlackListed",
        icon: IconFolder,
        onChange: () => onSelect(SeletOption.BlackListed),
      },
    ],
    documents: [
      {
        name: "Smart Contract Transparancy",
        icon: IconShield,
        onChange: () => onSelect(SeletOption.SmartContract),
      },
      {
        name: "Reports",
        icon: IconReport,
        onChange: () => onSelect(SeletOption.Reporting),
      },
      {
        name: "Up Comming Services",
        icon: IconRobot,
        onChange: () => onSelect(SeletOption.Services),
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconLighter className="!size-5" />
                <span className="text-base font-semibold">Archangle</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}


