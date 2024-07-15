import React, { useState } from 'react'
import { MdArrowDropDown, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import SubItem from './SubItem'

const SubMenu = ({ submenu }) => {
    const [showSubItem, setShowSubItem] = useState(false)
    const [hoverItem, setHoverItem] = useState(null)
    // console.log(submenu)
    return (
        <div className='absolute top-20 left-0 bg-zinc-700  shadow-sm w-48 z-10'>
            <ul className='divide-y-1 divide-[#33333331] px-2 py-5 text-center font-normal'>
                {
                    submenu && submenu.map((smenu, i) => {
                        // console.log("smunu index",i)
                        return <li onMouseEnter={() => setShowSubItem(true)} onMouseLeave={() => setShowSubItem(false)} className='py-1 flex justify-between items-center relative' key={i}>
                            {smenu.name} {smenu.subItem && <MdOutlineKeyboardDoubleArrowRight size={15} />}
                            {smenu.subItem && showSubItem && <SubItem subItem={smenu.subItem} />}
                        </li>
                    })
                }

            </ul>
        </div>
    )
}

export default SubMenu