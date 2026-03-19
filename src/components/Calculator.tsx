import Header from "./Header"
import Display from "./Display"
import MemoryButton from "./MemoryButtons"
import Keypad from "./KeyPad"
import HistoryAndMemory from "./HistoryAndMem"
import { useState} from 'react'


export default function Calculator() {
    const [CurrentNumber, setCurrentNumber] = useState<string>("0")
    const [Record, setRecord] = useState<Array<string>>([])

    const operands: string[] = ["0","1","2","3","4","5","6","7","8","9","."]
    const operators: Record<string, any> = {
        "+": "+",
        "-": "-",
        "x": "*",
        "÷": "/"
    }

    function calculate(key: string): void {
        if(CurrentNumber === "0") {
            setCurrentNumber("")
        } else if (Record.length === 2) {
            const num1 = parseFloat(Record[0]!)
            const operator = Record[1];
            const num2 = parseFloat(CurrentNumber)
            let result: number;
            
            switch (operator) {
                case "+": result =  num1 + num2;
            }
            console.log(result!)
            setCurrentNumber(`${result!}`)

        }
        if(operands.includes(key)) {
            setCurrentNumber(prev => prev + key)
        } else if(
            operators[key] && 
            CurrentNumber.length > 0
        ) {
            setRecord(prev => [...prev, CurrentNumber, key])
            setCurrentNumber("0")
        }
    }

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
                <Display value={CurrentNumber} record={Record}/>
                <MemoryButton />
                <Keypad calculate={calculate}/>
            </div>
            <div className="flex-1 flex flex-col">
                <HistoryAndMemory/>
            </div>
        </div>
    )
}