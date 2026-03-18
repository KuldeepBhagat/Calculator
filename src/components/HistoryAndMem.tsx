import { useState } from "react"

export default function HistoryAndMemory() {
    const buttonStyle = "p-2 hover:text-white/50"

    const [activeTab, setActiveTab] = useState("History");
    return (
        <>
            <div className="items-center flex-row p-2 gap-2 text-white">
                <button className={buttonStyle} onClick={(() => setActiveTab("History"))}>History</button>
                <button className={buttonStyle} onClick={() => setActiveTab("Memory")}>Memory</button>
                <div className={`bg-green-400
                               transition-all
                                w-15 h-1
                                rounded-xl 
                                ${activeTab === "History" ?
                                "translate-x-1" :
                                "translate-x-19"}`}>
                </div>
            </div>
            <div className={`flex-1 p-3 text-white ${activeTab === "Memory" ?
                                                       "hidden" : null
            }`}>
                <h1>this is the History</h1>
            </div>
            <div className={`flex-1 p-3 text-white ${activeTab === "History" ?
                                                       "hidden" : null
            }`}>
                <h1>this is the Memory</h1>
            </div>
        </>
    )
}