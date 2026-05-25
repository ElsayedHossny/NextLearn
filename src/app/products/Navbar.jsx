"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';



export default function Navbar() {

    const links = [
        { path: '/products/labtop', element: "Labtop" },
        { path: '/products/mobile', element: "Mobile" },
        { path: '/products/pc', element: "PC" },
        { path: '/products/ipad', element: "Ipad" },
    ]

    const pathname = usePathname();
    return (<>
        <div className="container mx-auto mt-10 ">
            <div className="bg-lime-100 flex justify-around p-4">
                {links.map((link) =>
                    <Link key={link.path} href={link.path} className={pathname === link.path ? "font-bold bg-amber-200 px-4 py-2 rounded-4xl " : "px-4 py-2 rounded-4xl"}> {link.element}</Link>
                )}
            </div>
        </div>
    </>
    )
}
