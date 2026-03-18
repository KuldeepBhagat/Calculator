export default function Keypad() {

    const grid = [
        "%", "CE", "C", "⌫",
        "¹/ₓ", "x²", "√x", "÷",
        "7", "8", "9", "×",
        "4", "5", "6", "−",
        "1", "2", "3", "+",
        "±", "0", ".", "=" ]
          
    const SpecialColor = [0, 1, 2, 3, 4, 5, 6, 7, 11, 15, 19]
    // "bg-white/10 rounded-md hover:bg-white/5"
    return (
        <div className="grid grow grid-cols-4 gap-1">
            {grid.map((m, index) => {

                let color = "bg-white/10"
                let HoverColor = "hover:bg-white/20"

                if (SpecialColor.includes(index)) {
                    color = "bg-white/20"
                    HoverColor = "hover:bg-white/10"
                } else if (m == "=") {
                    color = "bg-blue-600"
                    HoverColor = "hover:bg-blue-500"

                }
                let buttonStyle = `${color} rounded-md ${HoverColor}`
                return (
                    <button key={index} className={buttonStyle}>{m}</button>
                )
            })}
        </div>
    )
}