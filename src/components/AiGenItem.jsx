import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const AiGenItem = ({ tasks }) => {
    const [suggestion, setSuggestion] = useState(tasks)
    const [added, setAdded] = useState(0)

    const { addTodo } = useTodo()

    const getTodayInDDMMYYYY = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const [date, setDate] = useState(getTodayInDDMMYYYY);

    const addTask = (task) => {
        addTodo(task, date)
        setDate(getTodayInDDMMYYYY())
        setSuggestion((prev) => prev.filter((sugg) => sugg !== task))
        setAdded((prev) => prev + 1)
    }
    return (
        <>
            <div className="flex-1 overflow-y-auto space-y-4 min-h-0 custom-ul">
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-200/30 dark:border-emerald-700/30">
                        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-emerald-600 dark:text-emerald-400">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                <path d="M20 3v4"></path>
                                <path d="M22 5h-4"></path>
                                <path d="M4 17v2"></path>
                                <path d="M5 18H3"></path>
                            </svg>Suggested Tasks
                        </h3>
                        {added > 0 && <p className='text-[#006b32] dark:text-[#52ffa3] bg-[#d1fae5] dark:bg-[#152f21a1] rounded-2xl py-0.5 px-2 text-[12px]'>
                            {added + ' added'}
                        </p>}

                    </div>
                    {/* ul */}
                    <ul className="space-y-2">
                        {suggestion.map((task, idx) => (
                            <li key={idx} className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 bg-gradient-to-r from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 hover:border-blue-300 dark:hover:border-blue-600">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium transition-colors text-gray-900 dark:text-white">
                                        {task}
                                    </p>
                                </div>
                                <button
                                    onClick={() => addTask(task, idx)}
                                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 rounded-md gap-2 h-9 px-4 transition-all bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-3 h-3">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                    <span className="text-xs font-medium">Add</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    )
}

export default AiGenItem