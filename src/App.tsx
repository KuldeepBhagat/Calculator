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
                            my-auto
                            overflow-hidden">
                <h1 className="text-white p-2 font-light">Calculator</h1>
            </div>
        </div>
    )
}