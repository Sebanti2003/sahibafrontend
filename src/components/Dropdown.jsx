import React from 'react'

// eslint-disable-next-line react/prop-types
const Dropdown = ({ categories }) => {
    const [...categoriesnew] = categories;
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="relative inline-block text-left">
            <div>
                <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex w-full justify-center gap-x-1.5 font-[anzonew] rounded-md border-black border-2 bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Categories
                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {isOpen && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1 flex flex-col gap-3 group" role="none">
                    {categoriesnew.map((item) => { if (item == "") return; return (<div key={item} className="block px-4 py-2 transition-all duration-500 hover:bg-gray-100 font-bold text-sm cursor-pointer  text-gray-700 " role="menuitem" tabIndex="-1" id="menu-item-0">{item}</div>) })}
                </div>
            </div>}
        </div>

    )
}

export default Dropdown
