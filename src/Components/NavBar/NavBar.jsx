// import React from 'react';

import { CircleX, Menu } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className="flex justify-between mx-8 mt-2">

            <span className="flex items-center cursor-pointer" onClick={() => setOpen(!open)}>

                {
                    open ?
                        <CircleX className="md:hidden"></CircleX> :
                        <Menu className="md:hidden"></Menu>
                }

                <ul className={`md:hidden duration-1000 
                    ${open ? "top-12" : "-top-40"} 
                    absolute 
                    bg-orange-100`}>
                    {links}
                </ul>

                <h2 className="ml-2 text-2xl font-bold">My Project</h2>
            </span>

            <ul className="md:flex hidden">
                {
                    links
                }
            </ul>

            {/* <ul className="flex">

                {
                    navigationData.map (route =>  <li className="mr-10">
                        <a href={route.path}></a>{route.name}</li>)
                }

            </ul> */}

            {/* <ul className="flex">
                <li className="mr-10"><a href="/"></a>HOME</li>
                <li className="mr-10"><a href="/about"></a>ABOUT</li>
                <li className="mr-10"><a href="/blog"></a>BLOG</li>

            </ul> */}

            <button className="btn text-lg font-bold">Sign In</button>

        </nav>
    );
};

export default NavBar;