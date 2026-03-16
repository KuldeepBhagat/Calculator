export default function App() {
    return (
        /*Base Container */
        <div className="h-screen w-full bg-[url('/bg-1.jpg')]
                        bg-center
                        bg-cover
                        flex justify-center items-center 
                        overflow-hidden">
            {/* Calculator container*/}
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
                            ">
                <div className="bg-red-500 flex-1">
                    <h1 className="text-white p-2 font-light">Calculator</h1>
                    <div className="bg-amber-950">
                        <h1>options</h1>
                    </div>
                    <div className="bg-green-200">
                        <h1>result</h1>
                    </div>
                    <div className="bg-orange-600">
                        <h1>keys</h1>
                    </div>
                </div>
                <div className="bg-yellow-500 flex-1">
                    <h1 className="text-white p-2 font-light">Right side</h1>
                </div>
            </div>
        </div>
    )
}