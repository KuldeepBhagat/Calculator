import { useState } from "react"

type operation = {
        num1: string,
        operator: string,
        num2: string,
        result: string
    }

type props = {
    historyPipeline: operation[],
    ManageHistory: (index: number) => void
}

export default function HistoryAndMemory({historyPipeline, ManageHistory}: props) {
    const buttonStyle = "p-2 hover:text-white/50"

    const [activeTab, setActiveTab] = useState<string>("History");
    return (
        <div className="flex flex-col h-full min-h-0">
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
            <div className={`flex-1 min-h-0  p-3
                           text-white flex 
                             flex-col overflow-y-auto
                             [&::-webkit-scrollbar]:w-1.5
                             [&::-webkit-scrollbar]:bg-transparent
                             [&::-webkit-scrollbar-thumb]:bg-white/10
                             [&::-webkit-scrollbar-thumb]:rounded-full
                             hover:[&::-webkit-scrollbar-thumb]:bg-white/20
                             
             ${activeTab === "Memory" ?
                                                      "hidden" : ""}`}>
                {historyPipeline.map((m, index) => {
                    return (
                        <button key={index} onClick={() => ManageHistory(index)} className="p-3 shrink-0 
                                                        flex justify-end
                                                        text-white/40 hover:bg-white/10 
                                                        cursor-pointer rounded-sm">
                            {m.num1} {m.operator} {m.num2} = {m.result}
                        </button>
                    )
                })}
            </div>
            <div className={`flex-1 p-3 text-white ${activeTab === "History" ?
                                                       "hidden" : ""
            }`}>
                <h1></h1>
            </div>
        </div>
    )
}