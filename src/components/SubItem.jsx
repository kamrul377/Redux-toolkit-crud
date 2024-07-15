import React from 'react'

const SubItem = ({ subItem }) => {

    // console.log(subItem)

    return (
        <div className='absolute top-8 right-44 rounded-sm shadow-sm w-40 bg-zinc-700 z-20'>
            <ul className='divide-y-1 divide-[#33333331] px-2 py-2 text-center font-normal'>
                {
                    subItem && subItem.map((smenu, i) => {
                        return <li className='py-1 flex justify-between items-center relative' key={i}>
                            {smenu.name} {smenu.subItem && <MdOutlineKeyboardDoubleArrowRight size={15} />}
                            {smenu.subItem && <SubItem subItem={smenu.subItem} />}
                        </li>
                    })
                }

            </ul>
        </div>
    )
}

export default SubItem