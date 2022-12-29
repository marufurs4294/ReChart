import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phoneData = phonesLoaded.map(phone =>{
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1]);
                const singlePhone = {
                    name: phone.phone_name,
                    price: price
                }
                return singlePhone;
            })
            console.log(phoneData)
            setPhones(phoneData)
        })
    },[])
    return (
        <div className='m-10'>
            <BarChart
          width={500}
          height={300}
          data={phones}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" minPointSize={5}>
          </Bar>
          <Bar dataKey="name" fill="#82ca9d" minPointSize={10} />
        </BarChart>
        </div>
        
      
        
    );
};

export default PhoneBar;