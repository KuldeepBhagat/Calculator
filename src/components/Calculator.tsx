import Header from "./Header"
import Display from "./Display"
import MemoryButton from "./MemoryButtons"
import Keypad from "./KeyPad"
import HistoryAndMemory from "./HistoryAndMem"
import { useState} from 'react'

export default function Calculator() {
    const [CurrentNumber, setCurrentNumber] = useState<Array<string>>(["0"])
    const [Record, setRecord] = useState<Array<string>>([])
    const [waitingState, setWaitingState] = useState<boolean[]>([false, false])

    const operands: string[] = ["0","1","2","3","4","5","6","7","8","9","."]
    const operators: string[] = ["+", "−", "÷", "×"]
    const specialOperators: string[] = ["%", "¹/ₓ", "x²", "√x"]
    const ControlButtons: string[] = ["⌫", "C", "CE"]

    function calculate(key: string): void {
        
        if(CurrentNumber[0] === "0" && operands.includes(key)) {
            setCurrentNumber([])
        }

        if(ControlButtons.includes(key)) {
            switch (key) {
                case "⌫":
                    if(waitingState[0]) {
                        break;
                    }
                    CurrentNumber.length > 1 ? 
                       setCurrentNumber(prev => prev.slice(0, -1)) :
                       setCurrentNumber(["0"]);
                    break;
                case "C":
                    setCurrentNumber(["0"])
                    setRecord([])
                    break;
                case "CE": 
                    setCurrentNumber(["0"])
                    break;
            }
        } 

        if(operands.includes(key)) {
            if(waitingState[0]) {
                setCurrentNumber([])
            }
            setCurrentNumber(prev => [...prev, key])
            setWaitingState(prev => [prev[0] = false])
            console.log(CurrentNumber.length)
        }

        if(operators.includes(key)) {
            setWaitingState(prev => [prev[0] = true])
            if(operators.includes(Record.at(-1)!)) {
                setRecord(prev => [...prev.slice(0, -1), key])
            } else {
                const CompleteNumber = CurrentNumber.join('');
                setRecord([CompleteNumber, key])
            }
            
            if(CurrentNumber[0] != "0" && Record.length > 1) {
                const num1 = parseFloat(Record[0]!)
                const num2 = parseFloat(CurrentNumber.join(''))
                let result: number;
                switch (key) {
                    case "+": result = num1 + num2
                              setRecord([`${result}`, key])
                              setCurrentNumber([`${result}`])
                              break;
                    case "−": result = num1 - num2
                              setRecord([`${result}`, key])
                              setCurrentNumber([`${result}`])
                              break;
                    case "÷": result = num1 / num2
                              setRecord([`${result}`, key])
                              setCurrentNumber([`${result}`])
                              break;
                    case "×": result = num1 * num2
                              setRecord([`${result}`, key])
                              setCurrentNumber([`${result}`])
                              break;
                }
            }  
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