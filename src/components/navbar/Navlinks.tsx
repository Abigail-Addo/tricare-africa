
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navlinks = () => {
    const pathname = usePathname();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button className="text-gray-950 capitalize hover:text-green-600">
                <Link
                    href='/'
                    className={clsx({
                        'text-green-600': pathname === '/',
                    })}
                >

                    <p>Home</p>
                </Link>
            </Button>
            <Button className="text-gray-950 capitalize hover:text-green-600">
                <Link
                    href='/about'
                    className={clsx({
                        'text-green-600': pathname === '/about',
                    })}
                >

                    <p>About</p>
                </Link>
            </Button>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="text-gray-950 capitalize hover:text-green-600"
            >
                Services
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link href="/providers" className="flex px-4 py-2 text-sm hover:text-green-600">
                    <p>Providers</p>
                </Link>
                <Link href="/clients" className="flex px-4 py-2 text-sm hover:text-green-600">
                    <p>Clients</p>
                </Link>
            </Menu>
            <Button className="text-gray-950 capitalize hover:text-green-600">
                <Link
                    href='/contact'
                    className={clsx({
                        'text-green-600': pathname === '/contact',
                    })}
                >

                    <p>Contact</p>
                </Link>
            </Button>
            {/* </div> */}
        </>
    );
}

export default Navlinks;
