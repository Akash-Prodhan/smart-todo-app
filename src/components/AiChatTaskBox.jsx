import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';
import Loader from './Loader';
import EmptyTask from './EmptyTask';
import { FailedSms } from './FailedSms';
import AiGenItem from './AiGenItem';


const AiChatTaskBox = () => {
    const { addAiGenerateTask } = useTodo()

    const [prompt, setPrompt] = useState('');
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleGenerate = async (e) => {
        e.preventDefault();

        if (!prompt.trim()) return;

        setLoading(true);
        setTasks([]);
        setFailed(false)
        setSuccess(false)

        const systemPrompt = `You are a helpful productivity assistant. Generate 4–5 clear, actionable task suggestions based on the user's prompt.

    Strict Rules:
    - NO numbers, bullets, or formatting (like "1.", "Tip 1", "•", etc.)
    - Each task must be a short action (under 50 characters)
    - Avoid repeating or stating "task", "tip", or "suggestion"
    - Return raw task titles only — one per line

    Example Output:
    Do deep focus work
    Set phone on silent
    Schedule work breaks`;

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/explain`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ taskText: prompt, systemPrompt: systemPrompt })
            })
            const data = await response.json();
            const text = data.explanation || '';

            const suggestions = text
                .split('\n')
                .map((line) => line.trim())
                .filter((line) => line.length > 0)
                .slice(0, 5);

            setSuccess(true)
            setTasks(suggestions);
        } catch (err) {
            setFailed(true)
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div role="dialog" className="fixed left-[50%] top-[50%] z-50 max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-[#020817]  gap-4 border border-[#bb00ac] dark:border-[#292929] shadow-lg duration-200 sm:rounded-lg sm:max-w-lg w-[95vw] max-h-[90vh] flex flex-col p-4 sm:p-6 rounded-lg" tabIndex="-1">
                {/* Heading */}
                <div className="flex flex-col space-y-1.5 text-center sm:text-left flex-shrink-0 pb-2">
                    <h2 id="radix-«r2q»" className="font-semibold dark:text-white tracking-tight flex items-center gap-2 text-base sm:text-lg pr-8">
                        <div className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-600/20 dark:to-pink-600/20 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wand-sparkles w-5 h-5 text-purple-600 dark:text-purple-400">
                                <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
                                <path d="m14 7 3 3"></path>
                                <path d="M5 6v4"></path>
                                <path d="M19 14v4"></path>
                                <path d="M10 2v2"></path>
                                <path d="M7 8H3"></path>
                                <path d="M21 16h-4"></path>
                                <path d="M11 3H9"></path>
                            </svg>
                        </div>
                        AI Task Assistant
                    </h2>
                </div>
                {/* Heading End */}

                {/* form */}
                <form className="space-y-3" onSubmit={handleGenerate}>
                    <div className="p-4 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200/30 dark:border-purple-700/30">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Describe what you need to accomplish:
                        </label>
                        <textarea
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="dark:text-white flex w-full rounded-md border px-3 py-2 text-[16px] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-purple-300/50 dark:border-purple-700/50 focus:border-purple-500 dark:focus:border-purple-400 resize-none"
                            placeholder="e.g., I need to prepare for a job interview, plan a birthday party, or organize my home office..." />
                    </div>
                    <button
                        disabled={prompt === '' || loading}
                        type='submit'
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 px-4 py-2 w-full h-11 gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25`}>
                        {!loading ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                <path d="M20 3v4"></path>
                                <path d="M22 5h-4"></path>
                                <path d="M4 17v2"></path>
                                <path d="M5 18H3"></path>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="animate-spin" role="img" color="#fff">
                                <path d="M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                <path opacity="0.4" d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                <path opacity="0.4" d="M21 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                <path d="M6 12L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                <path opacity="0.4" d="M18.3635 5.63672L16.2422 7.75804" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                <path d="M7.75804 16.2422L5.63672 18.3635" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                <path opacity="0.4" d="M18.3635 18.3635L16.2422 16.2422" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                <path d="M7.75804 7.75804L5.63672 5.63672" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                            </svg>}
                        {loading ? "Generating..." : "Generate AI Tasks"}
                    </button>
                </form>
                {/* form end */}

                {/* body */}
                {loading && <Loader loadingText={'Ai is created personalised tasks for you.'} />}

                {!prompt && <EmptyTask />}

                {success && <AiGenItem tasks={tasks} />}

                {failed && <FailedSms />}
                {/* body end */}

                {/* bottom */}
                <div className="flex-shrink-0 pt-4 dark:text-white border-t border-[#bbbbbb] dark:border-[#5f5f5f]">
                    <button
                        onClick={() => addAiGenerateTask()}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-[#c5c5c5] dark:border-[#464646] px-4 py-2 w-full h-11">
                        Close
                    </button>
                </div>
                <button
                    onClick={() => addAiGenerateTask()}
                    type="button" className="absolute right-4 top-4 rounded-sm opacity-70 dark:text-white transition-opacity hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
                {/* bottom end */}
            </div>
        </>
    )
}

export default AiChatTaskBox