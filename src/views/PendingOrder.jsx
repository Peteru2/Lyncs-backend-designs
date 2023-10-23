import { IconButton, Menu, MenuItem } from '@mui/material';

const PendingOrders = () => {
    return (
        <div className="">
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
        </div>
    )
}

export default PendingOrders