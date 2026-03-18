import Calculator from "./components/Calculator"

export default function App() {
    return (
        /*Base Container */
        <div className="h-screen w-full bg-[url('/bg-1.jpg')]
                        bg-center
                        bg-cover
                        flex justify-center items-center 
                        overflow-hidden
                        z-10">
            <Calculator/>
        </div>
    )
}