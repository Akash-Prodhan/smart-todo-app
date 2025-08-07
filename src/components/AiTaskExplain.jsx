import React, { useState, useEffect } from 'react'
import { useTodo } from '../context/TodoContext'
import Loader from './Loader';
import { FailedSms } from './FailedSms';

const AiTaskExplain = ({ text, id, explanation }) => {
    const { addAiExplainTask, addExplanation } = useTodo()
    const [savedExplanation, setSavedExplanation] = useState(explanation)
    const [newExplanation, setNewExplanation] = useState()

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)
    const [regenerate, setRegenerate] = useState(false)
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        const explanationExists = explanation && explanation.trim() !== "";

        if (explanationExists) {
            setSavedExplanation(explanation);
            setNewExplanation(explanation);
            setSuccess(true);
            setSaved((prev) => !prev);
            return;
        }
        const systemPrompt = `You are a helpful productivity assistant. Explain the given task in detail, including:
- What the task involves
- Why it might be important
- Potential steps to complete it
- Any tips or considerations

Keep the explanation concise but informative, around 2-3 sentences.

Strict Rules:
- only 2-3 sentences.
- don't start with "Goal:"`;

        const handleExplain = async () => {
            setLoading(true);
            setFailed(false);


            try {    
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/explain`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ taskText: text, systemPrompt: systemPrompt })
                })

                const data = await response.json();

                if (response.ok && data.explanation) {
                    setNewExplanation(data.explanation);
                    setSuccess(true);
                } else {
                    setFailed(true);
                }
            } catch (err) {
                console.log("Failed to fetch explanation:", err);
                setFailed(true);
            } finally {
                setLoading(false);
            }

        };
        handleExplain();
    }, [regenerate]);

    const addTaskExplanation = () => {
        // delete saved explanation
        if (saved) {
            addExplanation(id, null);
            setSaved(false);
            setNewExplanation("");
            setRegenerate(prev => !prev);
        } else { 
            // saved explanation
            addExplanation(id, newExplanation);
            setSaved(true);
        }
    };
    const addRegenerate = () => {
        if (saved) {
            addExplanation(id, null);
            setSaved(false);
            setNewExplanation("");
            setRegenerate(prev => !prev);
        } else {
            setRegenerate((prev) => !prev)
        }
    }

    return (
        <>
            <div role="dialog" className="fixed left-[50%] top-[50%] z-50 max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-500 dark:border-[#1a2950] bg-white dark:bg-[#020817] dark:text-white shadow-lg duration-200 sm:rounded-lg sm:max-w-lg w-[95vw] max-h-[90vh] flex flex-col p-4 sm:p-6 rounded-lg" tabIndex="-1">
                <div className="flex flex-col space-y-1.5 text-center sm:text-left flex-shrink-0 pb-2">
                    <h2 id="radix-«rb»" className="font-semibold tracking-tight flex items-center gap-2 text-base sm:text-lg pr-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-5 h-5 text-purple-500">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                            <path d="M20 3v4"></path>
                            <path d="M22 5h-4"></path>
                            <path d="M4 17v2"></path>
                            <path d="M5 18H3"></path>
                        </svg>Task Explanation
                        {saved && <div className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-4 h-4">
                                <path d="M12 7v14"></path>
                                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                            </svg>
                            <span className="hidden sm:inline">Saved</span>
                        </div>}
                    </h2>
                </div>
                <div className="flex-1 overflow-y-auto space-y-4 min-h-0">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-medium text-sm text-gray-600 dark:text-gray-300 mb-1">Task:</h3>
                        <p className="text-gray-900 dark:text-white text-sm sm:text-base break-words">{text}</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-300">AI Explanation:</h3>
                            <button
                                disabled={loading}
                                onClick={() => addRegenerate()}
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent rounded-md h-8 px-3 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                                Regenerate
                            </button>
                        </div>
                        {loading && <Loader loadingText={'Generating Explanation...'} />}
                        {!loading && success ?
                            <div className={`p-4 rounded-lg border ${saved ? "bg-[#2dff5a11]  border-[#135a2b]" : "bg-[#3b2dff17] border-[#4a37ba]"}  `}>
                                {saved && <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-4 h-4">
                                        <path d="M12 7v14"></path>
                                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                    <span className="text-xs font-medium">Saved Explanation</span>
                                </div>}
                                <p className="text-gray-700 dark:text-gray-300 text-justify text-sm sm:text-base whitespace-pre-wrap">
                                    {newExplanation}
                                </p>
                            </div> : null}
                        {failed && <FailedSms />}
                    </div>
                </div>
                <div className="flex-shrink-0 flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <button
                            disabled={loading}
                            onClick={() => addTaskExplanation()}
                            className={`${saved ? "text-red-500 bg-transparent " : " bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"} border inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors disabled:opacity-50 rounded-md px-3 gap-2 w-full h-11 sm:h-10 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-save w-4 h-4">
                                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                                <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                            </svg>{saved ? "Delete Saved" : "Save Explanation"}
                        </button>
                    </div>
                    <button
                        onClick={() => addAiExplainTask(id)}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-500 border dark:bg-[#020817] dark:hover:bg-[#272e3f] dark:border-[#1a2950] rounded-md px-3 h-11 sm:h-10">
                        Close
                    </button>
                </div>
                <button
                    onClick={() => addAiExplainTask(id)}
                    type="button" className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 hover:">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </>
    )
}

export default AiTaskExplain