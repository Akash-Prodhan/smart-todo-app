import React, { useState } from 'react'
import Popup2 from './Popup2'
import { useTodo } from '../context/TodoContext'


const BottomButton = ({className=''}) => {
    const {setbackdrop, delPopup, addDelpopup, todos} = useTodo()

    const add = () => {
        setbackdrop()
        addDelpopup()
    }

    return (
        <>
            <Popup2
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 z-50 duration-300 flex-col ${delPopup ? "opacity-100 scale-100 flex" : "hidden"}`} />
            <div className={`${className} flex dark:text-white flex-wrap gap-2 mt-6 pt-6 border-t border-[#d4d4d4] dark:border-[#3c3c3c]`}>
                <button className="cursor-pointer duration-500 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-9 rounded-md px-3 gap-1 sm:gap-2 bg-[#ecf3ff] hover:bg-[#d8e7ff] dark:bg-[#0e1437] dark:hover:bg-[#252d5f] border-blue-300/100 dark:border-blue-700/100  flex-1 sm:flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 text-blue-600 dark:text-blue-400">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    <span className="hidden sm:inline">Export</span>
                </button>
                <label htmlFor="import-file" className=" duration-500 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-9 rounded-md px-3 bg-[#ecfff8] hover:bg-[#c7ffea] dark:bg-[#051e24] dark:hover:bg-[#153b3e] border-[#00d15e] dark:border-emerald-700/100 flex-1 sm:flex-none cursor-pointer gap-1 sm:gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload w-4 h-4 text-emerald-600 dark:text-emerald-400">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                    <span className="hidden sm:inline">Import</span>
                </label>
                <input id="import-file" accept=".json" className="hidden" type="file" />
                {todos.length > 0 ? <button
                    onClick={() => add()}
                    className="cursor-pointer duration-500 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-9 rounded-md px-3 gap-1 sm:gap-2 bg-[#fdeef1] hover:bg-[#ffd9dd] dark:bg-[#270e1e] dark:hover:bg-[#502137] border-red-300/100 dark:border-red-700/100 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex-1 sm:flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 w-4 h-4">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" x2="10" y1="11" y2="17"></line>
                        <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg>
                    <span className="hidden sm:inline">Clear All</span>
                </button> : null}
                
            </div>
        </>
    )
}

export default BottomButton