export default function Button() {
    const  memory = ["MR", "MC", "M+", "M-", "MS"]

    return (
        <div className="h-12 flex items-center">
            {memory.map((m) => (
                <button className="p-1 px-3 rounded-xs
                                 hover:bg-white/10"
                 key={m}>{m}</button>
            ))}
        </div>
    )
}