import { useState } from 'react'

export default function Header() {

    const [SidebarState, setSidebar] = useState(false)
    function sidebar() {
        if(SidebarState) {
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
        <div className={`bg-green-500 w-50
                          absolute h-100 
                          transition
                          duration-100
                          ${SidebarState ?
                            "translate-x-0 opacity-100" :
                            "-translate-x-50 opacity-0"
                          }`}>
        </div>
        </>
    )
}