'use client';
import   { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppStore } from '@/store/useAppStore';

interface NavItem {
    id: number;
    path: string;
    name: string;
    icon: string;
    status: boolean;
}

export const HeaderComponent = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleIsActive = useAppStore((state) => state.handleIsActive);
    const isActive = useAppStore((state) => state.isActive);

    const navItems: NavItem[] = [
        { id: 1, path: '/', name: 'Home', icon: 'home-icon', status: true },
        { id: 2, path: '/Nosotros', name: 'Nosotros', icon: 'about-icon', status: true },
        { id: 3, path: '/Servicios', name: 'Servicios', icon: 'services-icon', status: false },
        { id: 4, path: '/Contacto', name: 'Contacto', icon: 'contact-icon', status: true },
    ];
 
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);  
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled ? 'bg-[#1e1c1c] shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="w-[78%] mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-[120px]">
                        <Image
                            src="/logo-evocode.png"
                            width={100}
                            height={80}
                            alt="logo-gimnasio"
                            className="object-contain mx-auto"
                        />
                    </div>
 
                    <button
                        className="p-2 rounded w-[100px] text-black font-bold text-lg bg-white md:hidden"
                        onClick={() => handleIsActive()}
                    >
                        {isActive ? 'Cerrar' : 'Menu'}
                    </button>
 
                    <nav
                        className={`
                            fixed md:relative top-0 left-0 h-screen md:h-auto w-64 md:w-auto
                            bg-[#1e1c1c] md:bg-transparent p-8
                            transform ${
                                isActive ? 'translate-x-0' : '-translate-x-full'
                            } 
                            md:translate-x-0 transition-transform duration-200 ease-in-out
                            flex flex-col md:flex-row items-start md:items-center
                            md:justify-between flex-1
                            z-50 md:z-auto
                        `}
                    >
                        <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 md:p-0">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Link href={item.path}>
                                        <span className="text-white hover:text-gray-300 transition-colors">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link href="/auth/register" className="custom-button">
                            ¡Registrate!
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};
