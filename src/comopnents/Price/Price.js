import React from 'react';
import Features from '../Features/Features';

const Price = (props) => {
    const {price, name, features} = props.price;
    return (
        <div className='mt-5 mx-10'>
            <div className='bg-indigo-500 p-3 rounded-lg'>
            <div>
            <h1 className=' text-white'><span className='text-5xl font-bold'>${price}</span>/Mon</h1>
            <h1 className='font-bold text-white text-3xl'>{name}</h1>
            </div>
            {
                features.map( feature => <Features key={feature.id} feature={feature}></Features>)
            }
            <button className='btn bg-green-500 px-6 py-2 rounded-md font-bold text-white'>Buy Now</button>
           
            </div>
            
        </div>
        
    );
};

export default Price;