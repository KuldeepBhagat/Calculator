import Header from "./Header"
import Display from "./Display"
import MemoryButton from "./MemoryButtons"
import Keypad from "./KeyPad"
import HistoryAndMemory from "./HistoryAndMem"

export default function Calculator() {
    return (
        <div className="max-w-4xl
                        min-h-9/10 
                        w-full
                        backdrop-blur-xs
                        bg-white/5
                        border border-white/10
                        shadow-2xl
                        rounded-xl
                        flex
                        flex-row
                        z-20
                        relative
                        ">
            <div className="flex flex-col flex-2 text-white m-1">
                <Header />
                <Display />
                <MemoryButton />
                <Keypad />
            </div>
            <div className="flex-1 flex flex-col">
                <HistoryAndMemory/>
            </div>
        </div>
    )
}