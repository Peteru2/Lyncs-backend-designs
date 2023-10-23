import { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
// import OverviewCards from '../../components/dashboard/overview/OverviewCards.jsx';
// import OverviewSkeleton from '../../components/skeleton/OverviewLinksCard.jsx';
import { IconButton, Menu, MenuItem } from '@mui/material';
import OverviewCards from '../components/overview/OverviewCards';
import OverviewSkeleton from '../components/overview/OverviewSkeleton';

const Overview = () => {
    const [isLoading, setIsLoading] = useState(true)
    const data = []
    // const { data = {}, isLoading, isError, error } = useQuery('overview',
    //     () => clientHttp.get('/company/dashboard').then(res => res?.data?.data), { retry: Infinity });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="flex flex-row pr-5 justify-between items-center w-full">
                <h1 className="text-xl font-semibold text-gray-800">Overview</h1>
                <div>
                    <IconButton id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleOpen} >
                        <FilterListIcon className="text-gray-500" />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Forever</MenuItem>
                        <MenuItem onClick={handleClose}>Today</MenuItem>
                        <MenuItem onClick={handleClose}>This week</MenuItem>
                        <MenuItem onClick={handleClose}>This month</MenuItem>
                    </Menu>
                </div>
            </div>
            {isLoading ? <OverviewSkeleton /> : <OverviewCards />}
        </>
    );
};

export default Overview;