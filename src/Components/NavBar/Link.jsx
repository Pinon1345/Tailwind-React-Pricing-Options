// import React from 'react';

const Link = ({route}) => {

    return (

        <ul>
            <li className="mr-10">
                <a href={route.path}> {route.name}</a>
            </li>
        </ul>
    );
};

export default Link;