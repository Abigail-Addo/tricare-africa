
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '', dropdown: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

const Navlinks = () => {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => (
                <div key={link.name} className="relative">
                    {link.dropdown ? (
                        <div className="group text-sm">
                            <Link
                                href={link.href}
                                className={clsx(
                                    'text-dark',
                                    {
                                        'text-blue-600': pathname === link.href,
                                    },
                                )}
                            >
                                <p>{link.name}</p>
                            </Link>
                            <div className="absolute hidden group-hover:block text-sm">
                                <Link href="/providers" className="flex px-4 py-2 text-sm">
                                    Providers
                                </Link>
                                <Link href="/clients" className="flex px-4 py-2 text-sm">
                                    Clients
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href={link.href}
                            className={clsx(
                                "border-gray-700 text-sm",
                                {
                                    'text-green-600': pathname === link.href,
                                },
                            )}
                        >
                            <p>{link.name}</p>
                        </Link>
                    )}
                </div>
            ))}
        </>
    );
}

export default Navlinks;
