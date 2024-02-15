"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { GrStatusGood } from "react-icons/gr";
import { NewspaperIcon, WindIcon } from "lucide-react";
import { BiCustomize, BiHome, BiLinkExternal } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";


interface SidebarLinkProps {
    icon: React.ReactElement;
    title: string;
    href: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, title, href }) => {
    const path = usePathname();

    return <Link href={href}>

        <Button className="flex items-center gap-4 rounded-lg px-4 py-2 my-2 text-md font-medium" variant={path.includes(href) ? "default" : "ghost"}>
            {icon}
            {title}
        </Button>
    </Link>
};

interface SidebarProps {
    links: SidebarLinkProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => (
    <div className="flex flex-col h-full border-r bg-gray-100/40 md:grid md:grid-rows-[auto_1fr] md:bg-gray-100/50 lg:bg-gray-100/40">
        <div className="flex items-center justify-between p-4 bg-gray-100/50 md:flex-col md:items-start md:gap-4 md:p-6">
            <Link href="#">
                <p className="flex items-center gap-2 text-xl font-bold">
                    <NewspaperIcon className="w-6 h-6" />
                    <span>InstaPR</span>
                </p>
            </Link>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-4 md:p-2 md:space-y-2 lg:space-y-4">
            {links.map((link, index) => (
                <SidebarLink key={index} {...link} />
            ))}
        </div>
    </div>
);

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="grid bg-gray-100/90 w-full  items-start md:grid-cols-[250px_1fr] lg:items-center xl:items-center">
        <Sidebar
            links={[
                { icon: <BiHome />, title: "Home", href: "/home" },
                { icon: <GrStatusGood />, title: "Status", href: "/status" },
                { icon: <FaUser />, title: "Profile", href: "/profile" },
                { icon: <BiLinkExternal />, title: "Custom", href: "https://fellows.rookhq.com/" },
                { icon: <LuLogOut />, title: "Logout", href: "#" },
            ]}
        />
        <div className="flex flex-col w-full min-h-screen">
            <main className="flex-1 p-4 md:p-6 lg:p-8 xl:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                    {children}
                </div>
            </main>
        </div>
    </div>
};

export default Layout;
