import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import { Link } from 'react-router-dom'
import {useUser, UserButton} from '@clerk/clerk-react';


const Navbar = () => {

    const educatorData = dummyEducatorData;
    const { user } = useUser();

    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3'>
            <Link to='/' >
            <img src={assets.lms_logo} alt="LMS Logo" className='w-28 lg:w-32' />
            </Link>
            <div className='flex items-center gap-5 text-gray-500 relative'>
                <p>Hi! {user?.fullName || 'Developers' }</p>
                {user ? <UserButton /> : <img src={assets.profile_img} className='max-w-8' /> }
            </div>
            
        </div>
    )
}

export default Navbar