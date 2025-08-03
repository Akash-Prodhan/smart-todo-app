import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import Form from './components/Form'
import Item from './components/Item'
import BottomButton from './components/BottomButton'
import { MiddleSection } from './components/MiddleSection'
import { FooterText } from './components/FooterText'
import NoTask from './components/NoTask'
import AiChatTaskBox from './components/AiChatTaskBox'

function Code() {
    const [state, setState] = useState(() => {
        const stored = localStorage.getItem("smart-todo");

        const parsed = stored ? JSON.parse(stored) : {
            todos: [],
            AiGenerateTask: false,
            backdrop: false,
            delPopup: false,
            all: true,
            active: false,
            done: false,
            activecount: 0,
            completecount: 0,
            alltime: true,
            today: false,
            tomorrow: false,
            yesterday: false,
            week: false,
            month: false,
            todayactivecount: 0,
            todaycompletecount: 0,
            tomorrowactivecount: 0,
            tomorrowcompletecount: 0,
            yesterdayactivecount: 0,
            yesterdaycompletecount: 0,
            weekactivecount: 0,
            weekcompletecount: 0,
            monthactivecount: 0,
            monthcompletecount: 0,
            isdark: true,
        };
        return {
            ...parsed,
            backdrop: false,
            delPopup: false,
            AiGenerateTask: false,
        };
    });

    useEffect(() => {
        localStorage.setItem("smart-todo", JSON.stringify(state));
        const html = document.documentElement;
        if (state.isdark) html.classList.add('dark');
        else html.classList.remove('dark');
    }, [state]);

    const parseDate = (dateStr) => {
        const [dd, mm, yyyy] = dateStr.split('/');
        return new Date(`${yyyy}-${mm}-${dd}`);
    };

    const isToday = (dateStr) => {
        const date = parseDate(dateStr);
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const isTomorrow = (dateStr) => {
        const date = parseDate(dateStr);
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return date.toDateString() === tomorrow.toDateString();
    };

    const isYesterday = (dateStr) => {
        const date = parseDate(dateStr);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return date.toDateString() === yesterday.toDateString();
    };

    const isThisWeek = (dateStr) => {
        const date = parseDate(dateStr);
        const today = new Date();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        weekEnd.setHours(23, 59, 59, 999);
        return date >= weekStart && date <= weekEnd;
    };

    const isThisMonth = (dateStr) => {
        const date = parseDate(dateStr);
        const today = new Date();
        return (
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const updateCounts = () => {
        const { todos } = state;
        setState(prev => ({
            ...prev,
            todayactivecount: todos.filter((t) => isToday(t.date) && !t.complete).length,
            todaycompletecount: todos.filter((t) => isToday(t.date) && t.complete).length,
            tomorrowactivecount: todos.filter((t) => isTomorrow(t.date) && !t.complete).length,
            tomorrowcompletecount: todos.filter((t) => isTomorrow(t.date) && t.complete).length,
            yesterdayactivecount: todos.filter((t) => isYesterday(t.date) && !t.complete).length,
            yesterdaycompletecount: todos.filter((t) => isYesterday(t.date) && t.complete).length,
            weekactivecount: todos.filter((t) => isThisWeek(t.date) && !t.complete).length,
            weekcompletecount: todos.filter((t) => isThisWeek(t.date) && t.complete).length,
            monthactivecount: todos.filter((t) => isThisMonth(t.date) && !t.complete).length,
            monthcompletecount: todos.filter((t) => isThisMonth(t.date) && t.complete).length,
        }));
    };

    useEffect(() => {
        updateCounts();
    }, [state.todos]);

    const increase = () => {
        setState(prev => ({
            ...prev,
            activecount: prev.activecount + 1,
            completecount: prev.completecount - 1,
        }));
    };

    const decrease = () => {
        setState(prev => ({
            ...prev,
            activecount: prev.activecount - 1,
            completecount: prev.completecount + 1,
        }));
    };

    const addTodo = (massage, date) => {
        const newTodo = {
            id: Date.now(),
            massage,
            complete: false,
            date,
            popup: false,
        };
        setState(prev => ({
            ...prev,
            todos: [newTodo, ...prev.todos],
            activecount: prev.activecount + 1,
        }));
    };

    const deleteTodo = (id) => {
        const todo = state.todos.find((t) => t.id === id);
        const isComplete = todo?.complete;
        setState(prev => ({
            ...prev,
            todos: prev.todos.filter((t) => t.id !== id),
            backdrop: !prev.backdrop,
            activecount: isComplete ? prev.activecount : prev.activecount - 1,
            completecount: isComplete ? prev.completecount - 1 : prev.completecount,
        }));
    };

    const deleteAll = () => {
        setState(prev => ({
            ...prev,
            todos: [],
            activecount: 0,
            completecount: 0,
            backdrop: !prev.backdrop,
        }));
    };

    const editTodo = (id, massage) => {
        setState(prev => ({
            ...prev,
            todos: prev.todos.map((todo) =>
                todo.id === id ? { ...todo, massage } : todo
            ),
        }));
    };

    const toggleTodo = (id) => {
        let updatedComplete = null;
        setState(prev => {
            const updatedTodos = prev.todos.map((todo) => {
                if (todo.id === id) {
                    updatedComplete = !todo.complete;
                    return { ...todo, complete: updatedComplete };
                }
                return todo;
            });
            return { ...prev, todos: updatedTodos };
        });
        setTimeout(() => {
            updatedComplete ? decrease() : increase();
        }, 0);
    };

    const addPopup = (id) => {
        setState(prev => ({
            ...prev,
            backdrop: !prev.backdrop,
            todos: prev.todos.map((todo) =>
                todo.id === id ? { ...todo, popup: !todo.popup } : todo
            ),
        }));
    };
    const setIsdark = () => {
        const html = document.documentElement;
        if (state.isdark) html.classList.remove('dark');
        else html.classList.add('dark');
        setState(prev => ({ ...prev, isdark: !prev.isdark }))
    }

    const filters = {
        addAll: () => setState(prev => ({ ...prev, all: true, active: false, done: false })),
        addActive: () => setState(prev => ({ ...prev, all: false, active: true, done: false })),
        addDone: () => setState(prev => ({ ...prev, all: false, active: false, done: true })),
        addAlltime: () => setState(prev => ({
            ...prev, alltime: true, today: false, tomorrow: false, yesterday: false, week: false, month: false
        })),
        addToday: () => setState(prev => ({
            ...prev, alltime: false, today: true, tomorrow: false, yesterday: false, week: false, month: false
        })),
        addTomorrow: () => setState(prev => ({
            ...prev, alltime: false, today: false, tomorrow: true, yesterday: false, week: false, month: false
        })),
        addYesterday: () => setState(prev => ({
            ...prev, alltime: false, today: false, tomorrow: false, yesterday: true, week: false, month: false
        })),
        addWeek: () => setState(prev => ({
            ...prev, alltime: false, today: false, tomorrow: false, yesterday: false, week: true, month: false
        })),
        addMonth: () => setState(prev => ({
            ...prev, alltime: false, today: false, tomorrow: false, yesterday: false, week: false, month: true
        })),
    };

    return (
        <TodoProvider value={{
            ...state,
            addTodo,
            deleteTodo,
            deleteAll,
            editTodo,
            toggleTodo,
            addPopup,
            setIsdark,
            addAiGenerateTask: () => setState(prev => ({ ...prev, backdrop: !prev.backdrop, AiGenerateTask: !prev.AiGenerateTask, })),
            setbackdrop: () => setState(prev => ({ ...prev, backdrop: !prev.backdrop })),
            addDelpopup: () => setState(prev => ({ ...prev, delPopup: !prev.delPopup })),
            setActivecount: (v) => setState(prev => ({ ...prev, activecount: v })),
            setCompletecount: (v) => setState(prev => ({ ...prev, completecount: v })),
            ...filters,
        }}>
            <div className="relative overflow-x-hidden min-h-screen h-full w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#111827] dark:via-[#0d0e36] dark:to-[#3f0d5b] duration-700">
                <div className=" h-full mx-auto w-full sm:px-4 max-w-3xl sm:mt-4">
                    {state.backdrop && (
                        <div className="absolute top-0 left-0 min-h-screen h-full w-screen bg-[#000000c3] dark:bg-[#0000009f] z-10" />
                    )}
                    <div className="relative h-full w-full bg-white/80 dark:bg-gray-800/80 sm:rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 p-2 md:p-6 transition-all duration-700 ease-in-out">
                        <Form className={''} />

                        <MiddleSection className={''} />


                        <ul className="max-h-[40dvh] max-md:max-h-[35dvh] max-sm:max-h-[30dvh] overflow-x-hidden overflow-y-auto px-3 custom-ul">
                            {state.todos
                                .filter((todo) => {
                                    if (state.alltime) return true;
                                    if (state.today && !isToday(todo.date)) return false;
                                    if (state.tomorrow && !isTomorrow(todo.date)) return false;
                                    if (state.yesterday && !isYesterday(todo.date)) return false;
                                    if (state.week && !isThisWeek(todo.date)) return false;
                                    if (state.month && !isThisMonth(todo.date)) return false;
                                    return true;
                                })
                                .filter((todo) => {
                                    if (state.all) return true;
                                    if (state.active) return !todo.complete;
                                    if (state.done) return todo.complete;
                                    return true;
                                })
                                .map((todo) => (
                                    <li key={todo.id}>
                                        <Item todo={todo} />
                                    </li>
                                ))}
                        </ul>

                        <BottomButton className={''} />

                        {state.todos.length > 0 && <FooterText className={''} />}


                    </div>
                    {state.AiGenerateTask && <AiChatTaskBox />}

                    {state.alltime && state.all ? state.todos.length > 0 ? null : <NoTask massage1="No tasks yet" massage2="Add your first task to get started!" /> : null}
                    {state.alltime && state.active ? state.activecount > 0 ? null : <NoTask massage1="No active tasks yet" massage2='Switch to "All" to see your completed tasks.' /> : null}
                    {state.alltime && state.done ? state.completecount > 0 ? null : <NoTask massage1="No complete tasks yet" massage2='Switch to "All" to see your active tasks.' /> : null}

                    {state.today && state.all ? (state.todayactivecount + state.todaycompletecount) > 0 ? null : <NoTask massage1="No tasks for today!" massage2="Create a task for today to stay productive!" /> : null}
                    {state.today && state.active ? state.todayactivecount > 0 ? null : <NoTask massage1="No active tasks for today" massage2='Switch to "All" to see your completed tasks.' /> : null}
                    {state.today && state.done ? state.todaycompletecount > 0 ? null : <NoTask massage1="No completed tasks for today!" massage2='Switch to "All" to see your active tasks.' /> : null}

                    {state.tomorrow && state.all ? (state.tomorrowactivecount + state.tomorrowcompletecount) > 0 ? null : <NoTask massage1="No tasks for tomorrow" massage2="Plan ahead by adding tasks for tomorrow." /> : null}
                    {state.tomorrow && state.active ? state.tomorrowactivecount > 0 ? null : <NoTask massage1="No active tasks for tomorrow" massage2='Switch to "All" to see your completed tasks.' /> : null}
                    {state.tomorrow && state.done ? state.tomorrowcompletecount > 0 ? null : <NoTask massage1="No completed tasks for tomorrow" massage2='Switch to "All" to see your active tasks.' /> : null}

                    {state.yesterday && state.all ? (state.yesterdayactivecount + state.yesterdaycompletecount) > 0 ? null : <NoTask massage1="No tasks from yesterday" massage2="No tasks were created yesterday." /> : null}
                    {state.yesterday && state.active ? state.yesterdayactivecount > 0 ? null : <NoTask massage1="No active tasks from yesterday" massage2='Switch to "All" to see your completed tasks.' /> : null}
                    {state.yesterday && state.done ? state.yesterdaycompletecount > 0 ? null : <NoTask massage1="No completed tasks from yesterday" massage2='Switch to "All" to see your active tasks.' /> : null}

                    {state.week && state.all ? (state.weekactivecount + state.weekcompletecount) > 0 ? null : <NoTask massage1="No tasks this week" massage2="No tasks created this week." /> : null}
                    {state.week && state.active ? state.weekactivecount > 0 ? null : <NoTask massage1="No active tasks this week" massage2='Switch to "All" to see your completed tasks.' /> : null}
                    {state.week && state.done ? state.weekcompletecount > 0 ? null : <NoTask massage1="No completed tasks this week" massage2='Switch to "All" to see your active tasks.' /> : null}

                    {state.month && state.all ? (state.monthactivecount + state.monthcompletecount) > 0 ? null : <NoTask massage1="No tasks this month" massage2="No tasks created this month." /> : null}
                    {state.month && state.active ? state.monthactivecount > 0 ? null : <NoTask massage1="No active tasks this month" massage2='Switch to "All" to see your completed tasks.' /> : null}
                    {state.month && state.done ? state.monthcompletecount > 0 ? null : <NoTask massage1="No completed tasks this month" massage2='Switch to "All" to see your active tasks.' /> : null}


                </div>
            </div>
        </TodoProvider>
    );
}

export default Code;
