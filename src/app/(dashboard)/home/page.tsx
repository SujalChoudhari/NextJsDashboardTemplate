// pages/index.js
"use client";
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { BiEdit, BiLinkExternal } from 'react-icons/bi';
import Link from 'next/link';
import { GrStatusGood } from 'react-icons/gr';
import { FaUser } from 'react-icons/fa';

const Home = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        // Update the time every second
        const interval = setInterval(() => {
            setCurrentTime(format(new Date(), 'HH:mm'));
        }, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <div className="">
                <h1 className="text-4xl font-extrabold mb-2">Hello, User!</h1>
                <p className="text-gray-600 font-semibold text-3xl min-h-10 "> {currentTime}</p>
            </div>

            <div className="bg-white w-[75lvw] p-6 mt-6 rounded-lg shadow-md">
                <h1 className=' mb-10 text-3xl font-bold'>Latest Updates</h1>
                <p>Your latest updates related to website will come here</p>
            </div>

            <div className='flex gap-4 flex-wrap w-[75vw]'>
                <Link href="/status" className='flex-1'>
                    <div className="bg-white p-6 mt-6 rounded-lg shadow-md h-full">
                        <span className='flex items-baseline'>
                            <GrStatusGood />
                            <h2 className="text-xl ml-4 font-semibold mb-4">Status </h2>
                        </span>
                        <span><p>Check Status of Pending Orders </p></span>
                    </div>
                </Link>

                <Link href="/profile" className='flex-1'>
                    <div className="bg-white p-6 mt-6 rounded-lg shadow-md h-full">
                        <span className='flex items-baseline'>
                            <FaUser />
                            <h2 className="text-xl ml-4 font-semibold mb-4">Edit Profile </h2>
                        </span>
                        <span><p>View and Edit your Profile </p></span>
                    </div>
                </Link>

                <Link href="https://fellows.rookhq.com" className='flex-1'>
                    <div className="bg-white p-6 mt-6 rounded-lg shadow-md h-full">
                        <span className='flex items-baseline'>
                            <BiLinkExternal />
                            <h2 className="text-xl ml-4 font-semibold mb-4">Custom Packages </h2>
                        </span>
                        <span><p>Make custom packages </p></span>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Home;
