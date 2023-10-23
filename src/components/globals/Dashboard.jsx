import { useEffect, useState } from 'react';
import Navbar from "../../components/globals/Navbar";
import Sidebar from "../../components/globals/Sidebar";
// import useGlobalStore from "../../components/store/global.js";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <Navbar handleToggle={() => toggleIsDashboardOpen()} />
            <Sidebar screenWidth={screenWidth} />
            <div className={`${screenWidth < 650 ? "ml-0" : "ml-[240px]"} bg-[#F2F2F2] font-dmSans p-8 pt-[90px] min-h-screen h-full relative`}>
                <Outlet />
            </div>
        </>
    );
};

export default DashboardLayout;