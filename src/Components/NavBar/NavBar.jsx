// import React from 'react';

import Link from "./Link";

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
    return (
        <nav>

            <ul className="flex">
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
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

        </nav>
    );
};

export default NavBar;