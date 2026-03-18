import { useState } from 'react'

export default function Header() {

    const [SidebarState, setSidebar] = useState(false)
    function sidebar() {
        if (SidebarState) {
            setSidebar(false)
        } else {
            setSidebar(true)
        }
    }

    return (
        <>
            <h1 className="text-white p-2 font-light">Calculator</h1>

            <div className="flex items-center gap-2 z-100">
                <button className="p-2 px-4 hover:bg-white/10 rounded-xl"
                    onClick={() => sidebar()}>☰</button>
                <h1 className="font-bold">Standards</h1>
            </div>
            <div className={`bg-black/70 backdrop-blur-2xl w-50 absolute
                          top-11 bottom-0 left-0
                          border border-white/10
                          shadow-xl
                          rounded-xl
                          ${SidebarState ? "hidden" : "" }`}>
                    <button className='mt-10 m-5'>Standard</button>
            </div>
        </>
    )
}