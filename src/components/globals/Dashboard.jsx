import React, { useEffect, useState } from 'react';
import Navbar from "../../components/globals/Navbar";
import Sidebar from "../../components/globals/Sidebar";
// import useGlobalStore from "../../components/store/global.js";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    // const { isDashboardOpen, toggleIsDashboardOpen } = useGlobalStore((state) => ({
    //     isDashboardOpen: state.data.isSignupOpen,
    //     toggleIsDashboardOpen: state.toggleIsDashboardOpen,
    // }));



    return (
        <>
            <Navbar handleToggle={() => toggleIsDashboardOpen()} />
            <Sidebar />
            <div className='bg-[#F2F2F2] font-dmSans ml-[240px] p-8 pt-[90px] min-h-screen h-full relative'>
                <Outlet />
            </div>
        </>
    );
};

export default DashboardLayout;