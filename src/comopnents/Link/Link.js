import React from 'react';
const Link = ({route}) => {
    return (
        <div>

            <li className='px-6 py-4 text-gray-100 font-bold text-lg'>
                <a href={route.path}>{route.name}</a>
                <p></p>
            </li>
        </div>
    );
};

export default Link;

