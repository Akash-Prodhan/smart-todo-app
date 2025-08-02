import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'
import Popup from './Popup'

const Item = ({ todo }) => {

    const [todoMsg, setTodoMsg] = useState(todo.massage)
    const { editTodo, toggleTodo, addPopup } = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const updateTodo = () => {
        editTodo(todo.id, todoMsg)
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        toggleTodo(todo.id)
        setIsTodoEditable(false)
    }

    return (
        <>
            <div className="my-2 " draggable="true">
                <Popup className={`absolute top-1/2 left-1/2 transform  flex-col -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 z-50 duration-300 ${todo.popup ? "opacity-100 flex scale-100" : "hidden"}`}
                    id={todo.id}
                    todoMass={todo.massage}
                    delType={"Delete task?"}

                />
                <div className="cursor-default z-[unset] transform-none select-none touch-pan-x rounded" >
                    <div className="opacity-100 transform-none z-[1]">
                        <div className={`sm:hover:scale-x-[1.03]  group transform-none flex items-start gap-1 sm:gap-3 p-3 sm:p-4 rounded-lg border transition-all duration-300
                            ${todo.complete ? "bg-gradient-to-r from-gray-50/80 via-slate-50/80 to-gray-50/80 dark:from-gray-700/50 dark:via-slate-700/50 dark:to-gray-700/50 border-gray-200/60 dark:border-gray-600/60"
                                : "bg-gradient-to-r from-white/90 via-blue-50/30 to-white/90 dark:from-gray-800/90 dark:via-blue-900/20 dark:to-gray-800/90 border-blue-200/40 dark:border-blue-700/40 hover:from-blue-50/60 hover:via-indigo-50/40hover:to-blue-50/60 dark:hover:from-blue-900/30 dark:hover:via-indigo-900/20 dark:hover:to-blue-900/30 hover:border-blue-400/60 dark:hover:border-blue-500/60"}
                             hover:shadow-lg hover:shadow-blue-500/10 
                            dark:hover:shadow-blue-400/10 backdrop-blur-sm`}>
                            <div className="cursor-grab max-sm:hidden active:cursor-grabbing opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip-vertical w-4 h-4 text-gray-400">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                            </div>
                            <div className="mt-1">
                                <button
                                    onClick={toggleCompleted}
                                    type="button" role="checkbox" aria-checked="true" data-state={todo.complete ? "checked" : "unchecked"} value="on" className="peer h-4 w-4 shrink-0 rounded-full border border-[#646cff] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-emerald-500 data-[state=checked]:to-teal-500 data-[state=checked]:border-emerald-500 hover:border-emerald-400 transition-all duration-200">
                                    {todo.complete ? <span data-state="checked" className="flex items-center justify-center text-current ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                    </span> : ""}

                                </button>
                            </div>
                            <div className="flex-1 min-w-0">
                                <input
                                    className={`w-full border ${todo.complete ? "line-through text-[#a0a0a0]" : "dark:text-white"} ${isTodoEditable ? "border-gray-400 dark:border-white p-2 dark:bg-black rounded-2xl" : "border-transparent"} outline-none block text-sm transition-all duration-200 break-words `}
                                    type='text'
                                    value={todoMsg}
                                    onChange={(e) => setTodoMsg(e.target.value)}
                                    readOnly={!isTodoEditable}
                                />
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-gray-400 mt-1">
                                    <span className="truncate">Created {todo.date}</span>
                                    <div className="flex items-center gap-1 text-orange-500 dark:text-orange-400 whitespace-nowrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-3 h-3 flex-shrink-0">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                        <span>Due {todo.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex-shrink-0">
                                <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent rounded-md h-8 w-8 p-0 text-purple-500 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:text-purple-400 dark:hover:text-purple-300 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20" title="Explain with AI">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-5 h-5">
                                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                        <path d="M20 3v4"></path>
                                        <path d="M22 5h-4"></path>
                                        <path d="M4 17v2"></path>
                                        <path d="M5 18H3"></path>
                                    </svg>
                                </button>
                                <button
                                    onClick={() => {
                                        if (isTodoEditable) {
                                            updateTodo();
                                        } else setIsTodoEditable((prev) => !prev);
                                    }}
                                    disabled={todo.complete}
                                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent rounded-md h-8 w-8 p-0 text-blue-500 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20">
                                    {isTodoEditable ?
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
                                            <rect x="3" y="5.5" width="15" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></rect>
                                            <path d="M7 2.5H19C20.1046 2.5 21 3.39543 21 4.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M10 5.5V11.5L12.5 9.5L15 11.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen w-5 h-5">
                                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                        </svg>}

                                </button>
                                <button
                                    onClick={() => addPopup(todo.id)}
                                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent rounded-md h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:from-red-900/20 dark:hover:to-pink-900/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Item