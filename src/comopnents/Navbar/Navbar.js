import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes  = [
        {id:1, name:'Home', path:'/home'},
        {id:2, name:'About', path:'/about'},
        {id:3, name:'Service', path:'/service'},
        {id:4, name:'Contact Us', path:'/contactus'},
    ]
    return (
        
            <nav className=' bg-indigo-500  w-full'>
                <div  onClick={() => setOpen(!open)} className="h-10 w-6  md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon/> 
                }
                </div>
                
                <ul className={` lg:flex w-full justify-center  absolute md:static ease-in duration-300 bg-indigo-500 ${open ? 'top-6' : 'top-[-320px]'} `}>
                    
                {
                    routes.map(route => <Link key={route.id} route ={route}></Link>)
                }
                </ul>
            </nav>
    );
};

export default Navbar;      