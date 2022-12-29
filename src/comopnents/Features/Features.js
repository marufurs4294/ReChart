import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div>
             <div className='flex text-white pb-1'>
            <CheckCircleIcon className="h-6 w-6 text-green-500"/>
            <p className='pl-2'>{feature}</p>
        </div>
        </div>
       
    );
};

export default Features;