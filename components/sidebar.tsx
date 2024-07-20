'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import IntroIcon from '@/assets/icons/IntroIcon';
import APIIcon from '@/assets/icons/APIIcon';
import config from '@/config/config';
import LeftIcon from '@/assets/icons/LeftIcon';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const dropdownVariants = {
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
            },
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    const iconVariants = {
        open: {
            rotate: -90,
            transition: {
                duration: 0.3,
            },
        },
        closed: {
            rotate: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden "
            >
                <span className="sr-only">Open sidebar</span>
            </button>

            <aside id="sidebar-multi-level-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen mt-[10vh] border-r-[0.1px] border-gray-800 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-black backdrop-blur-lg">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/docs"
                                className="flex items-center p-2 rounded-lg group hover:bg-gray-500 hover:bg-opacity-20 text-white">
                                <IntroIcon color="#fff" width={20} height={20} />
                                <span className="ms-3">Introduction</span>
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={toggleDropdown}
                                type="button"
                                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-500 hover:bg-opacity-20 text-white"
                                aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example">
                                <APIIcon color="#fff" width={20} height={20} />
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    API&apos;s
                                </span>
                                <motion.div
                                    variants={iconVariants}
                                    animate={isDropdownOpen ? 'open' : 'closed'}
                                >
                                    <LeftIcon color="#fff" width={10} height={10} />
                                </motion.div>
                            </button>
                            <motion.ul id="dropdown-example" initial="closed" animate={isDropdownOpen ? 'open' : 'closed'} variants={dropdownVariants} className="overflow-hidden">
                                {config.api.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.url}
                                            className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:bg-opacity-20 text-white">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
