
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navlinks from './Navlinks';

const DrawerNavbar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <Button
                onClick={toggleDrawer(true)}
                className='flex justify-end p-0'
            >
                <MenuIcon
                    className='fill-[#22c55e] hover:fill-[#14532d]'
                />
            </Button>
            <Drawer
                open={open}
                anchor='right'
            >
                <div className='bg-white w-screen'>
                    <CloseIcon
                        onClick={toggleDrawer(false)}
                    />
                    <h2>Drawer</h2>
                </div>
            </Drawer>
        </div>
    );
}

export default DrawerNavbar