import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const Sidebar = () => {
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <aside id="default-sidebar font-dmSans"
                className={'w-64 font-dmSans bg-white fixed border-r top-[60px] md:top-[65px] left-0 z-40 transition-transform md:transition-none bottom-0'}
                aria-label="Sidenav">
                <div
                    className="overflow-y-auto pt-5 pb-10 px-3 h-full border-t border-[#1D2927]">
                    <ul className="space-y-2">
                        {/* <NavLink to="/dashboard/get-started"
                            className={({ isActive, isPending }) => isActive ? `cursor-pointer flex items-center px-2 py-4 text-base  text-orange-400 group border-r-orange-400 ${sidebar && "border-r-2"}` :
                                "text-[#909090] cursor-pointer flex items-center hover:text-orange-400 px-2 py-4 text-base  group transition-all ease"
                            }>
                            <ElectricBoltIcon />
                            <span >Get Started</span>
                        </NavLink> */}
                        <NavLink to="/dashboard/overview"
                            className={({ isActive, isPending }) => isActive ? `cursor-pointer flex items-center px-2 py-4 text-base  text-orange-400 group border-r-orange-400 border-r-2` :
                                "text-[#909090] cursor-pointer flex items-center hover:text-orange-400 px-2 py-4 text-base  group transition-all ease"
                            }>
                            <GridViewOutlinedIcon />
                            <span className='ml-3'>Dashboard</span>
                        </NavLink>
                        <NavLink to="/dashboard/orders"
                            className={({ isActive, isPending }) => isActive ? `cursor-pointer flex items-center px-2 py-4 text-base  text-orange-400 group border-r-orange-400 border-r-2` :
                                "text-[#909090] cursor-pointer flex items-center px-2 hover:text-orange-400 py-4 text-base  group transition-all ease"
                            }>
                            <LocalOfferOutlinedIcon />
                            <span className='ml-3'>Orders</span>
                        </NavLink>
                        <NavLink to="/dashboard/integration"
                            className={({ isActive, isPending }) => isActive ? `cursor-pointer flex items-center px-2 py-4 text-base  text-orange-400 group border-r-orange-400 border-r-2` :
                                "text-[#909090] cursor-pointer flex items-center px-2 hover:text-orange-400 py-4 text-base  group transition-all ease"
                            }>
                            <IntegrationInstructionsOutlinedIcon />
                            <span className='ml-3'>Integration</span>
                        </NavLink>

                        <NavLink to="/dashboard/commissions"
                            className={({ isActive, isPending }) => isActive ? `cursor-pointer flex items-center px-2 py-4 text-base  text-orange-400 group border-r-orange-500 ${sidebar && "border-r-2"}` :
                                "text-[#909090] cursor-pointer flex items-center px-2 hover:text-orange-500 py-4 text-base  group transition-all ease"
                            }>
                            <MoneyOutlinedIcon />
                            <span className='ml-3'>Commissions</span>
                        </NavLink>

                        <NavLink to="/dashboard/settings"
                            className={({ isActive, isPending }) => isActive ? `cursor-pointer flex items-center px-2 py-4 text-base  text-orange-500 group border-r-orange-500 ${sidebar && "border-r-2"}` :
                                "text-[#909090] cursor-pointer flex items-center px-2 hover:text-orange-500 py-4 text-base  group transition-all ease"
                            }>
                            <SettingsOutlinedIcon />
                            <span className='ml-3'>Settings</span>
                        </NavLink>
                    </ul>
                </div>
            </aside >
        </>
    );
};

export default Sidebar;