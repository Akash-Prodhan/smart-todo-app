import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

export const MiddleSection = ({className}) => {
    const { addAll, addActive, addDone, all, active, done, alltime, today, tomorrow, yesterday, week, month, addAlltime, addToday, addTomorrow, addYesterday, addWeek, addMonth } = useTodo()



    return (
        <>
            <div className={`${className} mb-3 space-y-3`}>
                <div className="relative flex box-content gap-1 p-1 bg-gray-100/90 dark:bg-gray-700/90 rounded-xl border border-gray-200/60 dark:border-gray-600/60 backdrop-blur-sm">
                    <div className={`duration-300 absolute top-1 bottom-1 ${all ? "left-1 right-2/3" : ""} ${active ? "left-1/3 right-1/3" : ""} ${done ? "right-1 left-2/3" : ""} inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-md -z-10`}>
                    </div>
                    <button
                        onClick={() => addAll()}
                        className={` ${all ? "text-blue-600 dark:text-blue-400" : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-[#ddd] hover:bg-white dark:hover:bg-[#4b556399]"} inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 h-9 rounded-md px-3 flex-1 gap-2 transition-all duration-300 font-medium relative`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list w-4 h-4">
                            <path d="M3 12h.01"></path>
                            <path d="M3 18h.01"></path>
                            <path d="M3 6h.01"></path>
                            <path d="M8 12h13"></path>
                            <path d="M8 18h13"></path>
                            <path d="M8 6h13"></path>
                        </svg>All
                    </button>
                    <button
                        onClick={() => addActive()}
                        className={`${active ? "text-blue-600 dark:text-blue-400" : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-[#ddd] hover:bg-white dark:hover:bg-[#4b556399]"} inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 h-9 rounded-md px-3 flex-1 gap-2 transition-all duration-300 font-medium relative`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>Active
                    </button>
                    <button
                        onClick={() => addDone()}
                        className={`${done ? "text-blue-600 dark:text-blue-400" : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-[#ddd] hover:bg-white dark:hover:bg-[#4b556399]"} inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 h-9 rounded-md px-3 flex-1 gap-2 transition-all duration-300 font-medium relative`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4">
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                        </svg>Done
                    </button>
                </div>
                <div className=" grid grid-cols-3 sm:grid-cols-6 gap-2 relative">
                    <button
                        onClick={() => addAlltime()}
                        className={`${alltime ? "bg-[#a855f7] text-white" : "hover:bg-purple-50/50 dark:hover:bg-purple-900/20 bg-white/70 dark:bg-gray-800/70 hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-300"} inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 gap-1 transition-all duration-500 text-xs font-medium relative   border border-gray-200/40 dark:border-gray-700/40 backdrop-blur-sm`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>All Time</button>
                    <button
                        onClick={() => addToday()}
                        className={`${today ? "bg-[#a855f7] text-white" : "hover:bg-purple-50/50 dark:hover:bg-purple-900/20 bg-white/70 dark:bg-gray-800/70 hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-300"} inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 gap-1 transition-all duration-500 text-xs font-medium relative  border border-gray-200/40 dark:border-gray-700/40 backdrop-blur-sm`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun w-4 h-4">
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>Today</button>
                    <button
                        onClick={() => addTomorrow()}
                        className={`${tomorrow ? "bg-[#a855f7] text-white" : "hover:bg-purple-50/50 dark:hover:bg-purple-900/20 bg-white/70 dark:bg-gray-800/70 hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-300"} inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 gap-1 transition-all duration-500 text-xs font-medium relative  border border-gray-200/40 dark:border-gray-700/40 backdrop-blur-sm`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock3 w-4 h-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16.5 12"></polyline>
                        </svg>Tomorrow
                    </button>
                    <button
                        onClick={() => addYesterday()}
                        className={`${yesterday ? "bg-[#a855f7] text-white" : "hover:bg-purple-50/50 dark:hover:bg-purple-900/20 bg-white/70 dark:bg-gray-800/70 hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-300"} inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 gap-1 transition-all duration-500 text-xs font-medium relative  border border-gray-200/40 dark:border-gray-700/40 backdrop-blur-sm`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock4 w-4 h-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>Yesterday
                    </button>
                    <button
                        onClick={() => addWeek()}
                        className={`${week ? "bg-[#a855f7] text-white" : "hover:bg-purple-50/50 dark:hover:bg-purple-900/20 bg-white/70 dark:bg-gray-800/70 hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-300"} inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 gap-1 transition-all duration-500 text-xs font-medium relative  border border-gray-200/40 dark:border-gray-700/40 backdrop-blur-sm`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days w-4 h-4">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                            <path d="M8 14h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 18h.01"></path>
                            <path d="M12 18h.01"></path>
                            <path d="M16 18h.01"></path>
                        </svg>Week
                    </button>
                    <button
                        onClick={() => addMonth()}
                        className={`${month ? "bg-[#a855f7] text-white" : "hover:bg-purple-50/50 dark:hover:bg-purple-900/20 bg-white/70 dark:bg-gray-800/70 hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-300"} inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 gap-1 transition-all duration-500 text-xs font-medium relative  border border-gray-200/40 dark:border-gray-700/40 backdrop-blur-sm`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-range w-4 h-4">
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M16 2v4"></path>
                            <path d="M3 10h18"></path>
                            <path d="M8 2v4"></path>
                            <path d="M17 14h-6"></path>
                            <path d="M13 18H7"></path>
                            <path d="M7 14h.01"></path>
                            <path d="M17 18h.01"></path>
                        </svg>Month
                    </button>
                </div>
            </div>
        </>
    )
}
