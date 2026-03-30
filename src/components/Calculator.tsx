import Header from "./Header"
import Display from "./Display"
import MemoryButton from "./MemoryButtons"
import Keypad from "./KeyPad"
import HistoryAndMemory from "./HistoryAndMem"
import { useState } from 'react'

export default function Calculator() {

    interface HistoryType {
        num1: string,
        operator: string,
        num2: string,
        result: string
    }

    const [CurrentNumber, setCurrentNumber] = useState<Array<string>>(["0"])
    const [Record, setRecord] = useState<Array<string>>([])
    const [waitingState, setWaitingState] = useState<boolean[]>([false, false])
    const [operationPipeline, setOperationPipeline] = useState({
        num1: "",
        num2: "",
        operator: ""
    })
    const [historyPipeline, setHistory] = useState<HistoryType[]>([])

    const operands: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
    const operators: string[] = ["+", "−", "÷", "×"]
    const specialOperators: string[] = ["%", "¹/ₓ", "x²", "√x"]
    const ControlButtons: string[] = ["⌫", "C", "CE"]

    function Calculate(key: string): number {


        let num1 = parseFloat(operationPipeline.num1)
        const operator = operationPipeline.operator
        let num2 = parseFloat(CurrentNumber.join(''))
        let result: number;

        if (Record.at(-1) === "=") {
            num1 = parseFloat(CurrentNumber.join(''))
            num2 = parseFloat(operationPipeline.num2)
        }

        switch (operator) {
            case "+": result = num1 + num2
                break;
            case "−": result = num1 - num2
                break
            case "×": result = num1 * num2
                break;
            case "÷": result = num1 / num2
                break
            default: result = 0
        }

        setHistory(prev => [...prev, {
            num1: `${num1}`,
            operator: operator,
            num2: `${num2}`,
            result: `${result}`
        }])

        return result
    }

    function ManageHistory(index: number) {
        const SelectedHistory = historyPipeline[index]
        if (!SelectedHistory) return;
        setRecord([
            SelectedHistory.num1,
            SelectedHistory.operator,
            SelectedHistory.num2,
            "=",
        ])
        setCurrentNumber([SelectedHistory.result])
    }
    function Calculation(key: string): void {

        if (CurrentNumber[0] === "0" && operands.includes(key)) {
            setCurrentNumber([])
        }

        if (ControlButtons.includes(key)) {
            switch (key) {
                case "⌫":
                    if (waitingState[0]) {
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

        if (operands.includes(key)) {
            if (waitingState[0]) {
                setCurrentNumber([])
            }

            if (Record.at(-1) === "=") {
                setRecord([])
                setCurrentNumber([])
            }

            setCurrentNumber(prev => [...prev, key])
            setWaitingState([false, false])
        }

        if (operators.includes(key)) {

            setWaitingState([true, true])
            if (operators.includes(Record.at(-1)!)) {
                setRecord(prev => [...prev.slice(0, -1), key])

                if (waitingState[1] && operationPipeline.operator) {
                    setOperationPipeline(prev => ({
                        ...prev,
                        operator: key
                    }))
                }
            } else {
                const CompleteNumber = CurrentNumber.join('');
                setRecord([CompleteNumber, key])
                setOperationPipeline(prev => ({
                    ...prev,
                    num1: CompleteNumber,
                    operator: key,
                }))
            }

            if (!waitingState[1] && Record.length > 1) {

                const result = Calculate(key)
                const num2 = parseFloat(CurrentNumber.join(''))

                
                setRecord([`${result}`, key])
                setCurrentNumber([`${result}`])
                setOperationPipeline(prev => ({ ...prev, num1: `${result}`, operator: key, num2: `${num2}` }))
            }

        }

        if (Record.length > 1 && key === "=") {
            // this messy part will be sorted in future
            const operator = Record.at(1)
            if (Record.at(-1) === "=") {
                setRecord(prev => prev.map((val, index) => index === 0 ? CurrentNumber.join('') : val))
                const result = Calculate(operator!)
                setCurrentNumber([`${result}`])
                setOperationPipeline(prev => ({ ...prev, num1: `${result}` }))
            } else {
                const result = Calculate(operator!)
                const num2 = parseFloat(CurrentNumber.join(''))
                setRecord(prev => [...prev, `${num2}`, "="])
                setCurrentNumber([`${result}`])
                setOperationPipeline(prev => ({ ...prev, num1: `${result}`, operator: operator!, num2: `${num2}` }))
            }
        }
    }

    return (
        <div className="max-w-4xl
                        h-[90vh]
                        w-[95%]
                        backdrop-blur-xs
                        bg-white/5
                        border border-white/10
                        shadow-2xl
                        rounded-xl
                        flex
                        flex-row
                        z-20
                        relative
                        overflow-hidden
                        ">
            <div className="flex flex-col flex-2 text-white m-1">
                <Header />
                <Display value={CurrentNumber} record={Record} />
                <MemoryButton />
                <Keypad calculate={Calculation} />
            </div>
            <div className="flex-1 flex flex-col min-h-0">
                <HistoryAndMemory historyPipeline={historyPipeline} ManageHistory={ManageHistory} />
            </div>
        </div>
    )
}