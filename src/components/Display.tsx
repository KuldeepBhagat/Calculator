type props = {
    value: string[],
    record: Array<string>
}

export default function Display({value, record}: props) {
    return (
        <div className="h-25 flex flex-col">
            <div className="flex flex-1 
                 items-center 
                 justify-end 
                 pr-1 text-white/50">
                <h1>{record}</h1>
            </div>
            <div className="flex flex-2
                 items-center 
                 justify-end 
                 pr-1 text-6xl ">
                <h1>{value}</h1>
            </div>
        </div>
    )
}