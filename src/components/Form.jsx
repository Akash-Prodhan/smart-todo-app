import React, { useState, useEffect } from 'react'
import { useTodo } from '../context/TodoContext';

const Form = ({ className = '' }) => {

    const { addTodo, setIsdark, isdark, addAiGenerateTask } = useTodo()

    const getTodayInDDMMYYYY = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const [massage, setMassage] = useState("");
    const [date, setDate] = useState(getTodayInDDMMYYYY)

    const handleDateChange = (e) => {
        const [year, month, day] = e.target.value.split("-");
        const formatted = `${day}/${month}/${year}`;
        setDate(formatted);
    };

    const handleForm = (e) => {
        e.preventDefault()

        addTodo(massage, date)

        setMassage("")
        setDate(getTodayInDDMMYYYY())
    };


    return (
        <div className={`${className}`}>
            {/* header section */}
            <div className={` dark:text-white flex items-center justify-between mb-3 py-1 px-3 md:px-4 md:py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 rounded-xl border border-blue-200/30 dark:border-blue-700/30`}>
                <h1 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent " style={{ opacity: 1 }}>✨ Smart Todo</h1>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => addAiGenerateTask()}
                        className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md gap-1 sm:gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-[#3d0946] dark:to-[#220c56] border-purple-300/50 dark:border-purple-700/50 hover:from-purple-500/20 hover:to-pink-500/20 dark:hover:from-purple-600/30 duration-600 dark:hover:to-pink-600/30 px-2 sm:px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-purple-600 dark:text-purple-400">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                            <path d="M20 3v4"></path>
                            <path d="M22 5h-4"></path>
                            <path d="M4 17v2"></path>
                            <path d="M5 18H3"></path>
                        </svg>
                        <span className="hidden sm:inline">AI</span>
                    </button>
                    <button
                        onClick={() => setIsdark()}
                        className="duration-500 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-[#160a44] dark:to-[#110940] border-blue-300/50 dark:border-blue-700/50 hover:from-blue-500/20 hover:to-indigo-500/20 dark:hover:from-blue-600/30 dark:hover:to-indigo-600/30 px-2 sm:px-3">
                        {isdark ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun w-4 h-4 text-yellow-500">
                            <circle cx="12" cy="12" r="4">
                            </circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon w-4 h-4 text-blue-600">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>}


                    </button>
                </div>
            </div>
            {/* input field */}
            <form
                onSubmit={handleForm}
                className="dark:text-white flex flex-col gap-3 mb-3 p-4 bg-gradient-to-r from-emerald-50/50 via-teal-50/50 to-cyan-50/50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 rounded-xl border border-emerald-200/30 dark:border-emerald-700/30" >
                <div className="flex flex-col md:flex-row gap-3">
                    <input
                        required
                        placeholder="What needs to be done?"
                        type="text"
                        value={massage}
                        onChange={(e) => setMassage(e.target.value)}
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-emerald-300/50 dark:border-emerald-700/50 focus:border-emerald-500 dark:focus:border-emerald-400" />
                    <button type='submit' className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 md:w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-4 h-4">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>Add Task</button>
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:items-center">
                    <input
                        className='cursor-text inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:bg-accent hover:text-accent-foreground justify-start text-left font-normal bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-emerald-300/50 dark:border-emerald-700/50 focus:border-emerald-500 dark:focus:border-emerald-400 text-sm px-3 py-2 h-10 md:min-w-[200px]'
                        value={(() => {
                            const [day, month, year] = date.split("/");
                            return `${year}-${month}-${day}`;
                        })()}
                        onChange={handleDateChange}
                        type="date"
                    />

                    <div className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left flex-1">📅 Due date for new task (defaults to today)</div>
                </div>

            </form>

        </div>
    )
}

export default Form