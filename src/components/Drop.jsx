import React, { useState } from 'react';

const Drop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className="relative inline-block text-left bg-green-400 ml-48">
            <div className='bg-blue-700'>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                    Menu
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black text-white ring-opacity-5 ml-10"
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="py-1">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => handleMouseEnter('menu1')}
                        >
                            Menu 1gffsdsaa
                        </a>
                        {activeMenu === 'menu1' && (
                            <div className="absolute left-full top-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Submenu 1-1
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Submenu 1-2
                                </a>
                            </div>
                        )}
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => handleMouseEnter('menu2')}
                        >
                            Menu 2afssssssssssssss
                        </a>
                        {activeMenu === 'menu2' && (
                            <div className="absolute left-full top-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Submenu 2-1
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Submenu 2-2
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Drop;
