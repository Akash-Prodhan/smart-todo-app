import React from 'react'
import { useTodo } from '../context/TodoContext'

const Popup2 = ({ className }) => {
    const { deleteAll, addDelpopup, setbackdrop } = useTodo()

    const Delete = () => {
        deleteAll()
        addDelpopup()
    }
    const cancel = () => {
        addDelpopup()
        setbackdrop()
    }
    return (
        <>
            <div className={`${className}  bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-gray-200 dark:border-gray-700`}>
                <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-5 h-5 text-red-600 dark:text-red-400">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Clear all tasks?</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 break-words">This action cannot be undone. All tasks will be permanently deleted.</p>
                    </div>
                </div>
                <div className="cursor-pointer flex gap-3 justify-end text-black dark:text-white">
                    <button
                        onClick={() => cancel()}
                        className="duration-500 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border dark:border-none border-gray-500 bg-white dark:bg-black hover:bg-gray-300 dark:hover:bg-transparent cursor-pointer h-9 rounded-md px-3">Cancel</button>
                    <button
                        onClick={() => Delete()}
                        className="duration-500 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0  bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white h-9 rounded-md px-3">Confirm</button>
                </div>
            </div>
        </>
    )
}

export default Popup2