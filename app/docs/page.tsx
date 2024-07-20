import Sidebar from '@/components/sidebar';
import React from 'react';

const Docs = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-4 md:ml-64 md:mt-16">
                    <h2 className="text-2xl font-bold">Welcome to the Documentation</h2>
                    <p>🚧 This page is under construction 🚧</p>
                </div>
            </div>
        </div>
    );
};

export default Docs;