import React, { useState } from 'react'
import DropdownMenu from '../components/Dropdown';
import SubMenu from '../components/SubMenu';
import { Menu } from '../components/MenuItems.js'
import { MdArrowDropDown, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Header = () => {


    // const [showDropDown, setShowDropDown] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);



    // console.log(Menu)

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    return (
        <div>

            <div className="header h-20 w-full bg-zinc-800 flex items-center justify-between px-10">
                <h1>
                    LOGO
                </h1>
                <ul className='flex gap-3 cursor-pointer h-full'>

                    {
                        Menu && Menu.map((menu, i) => {
                            return <li onMouseEnter={(() => menu.subMenu ? setShowSubMenu(true) : setShowSubMenu(false))} onMouseLeave={() => setShowSubMenu(false)} key={i} className={`text-white font-bold flex justify-between items-center px-2 py-1 relative subMenu`}>
                                {menu.name} 
                                {/* {menu.subMenu && <MdOutlineKeyboardDoubleArrowRight size={15} />} */}
                                {menu.subMenu && showSubMenu && <SubMenu submenu={menu.subMenu} />}
                            </li>
                        })
                    }
                    {/* <li>HOME</li>
                    <li>PRICE</li>

                    <li onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)} className='relative'>DROPDOWN
                        {showDropDown && <DropdownMenu />}
                    </li>


                    <li>MAIN</li>
                    <li>LOGIN</li>
                    {/* <li className='relative'>DROPDOWN-2
                        <div className='dropdown absolute bg-blue-300 border-2 border-blue-500 w-32 text-center top-8 rounded shadow left-0 divide-purple-900 divide-y-2 cursor-pointer'>
                            <li>ITEMS</li>
                            <li>ITEMS</li>
                            <li>ITEMS</li>
                            <li>ITEMS</li>
                            <li>ITEMS</li>
                        </div>
                    </li> */}

                </ul>

            </div>

        </div>
    )
}

export default Header