// import React from 'react';

const Link = ({route}) => {

    return (

        <ul>
            <li className=" font-bold px-4 hover:bg-amber-300 py-0.75 lg:mr-10">
                <a href={route.path}> {route.name}</a>
            </li>
        </ul>
    );
};

export default Link;