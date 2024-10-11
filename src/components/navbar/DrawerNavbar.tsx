
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navlinks from './Navlinks';
import Box from '@mui/material/Box';

const DrawerNavbar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
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
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '50%',
                        overflowX: 'hidden',
                    },
                }}

            >
                <div className='bg-white w-screen'>
                    <div className='border-b border-gray-950 py-8'>
                        <CloseIcon
                            onClick={toggleDrawer(false)}
                            className='ml-2'
                        />
                    </div>
                    <div className='flex flex-col items-start gap-12 pt-8 pb-12'>
                        <Navlinks />
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default DrawerNavbar