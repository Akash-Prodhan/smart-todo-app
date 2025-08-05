import { useContext, createContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            massage: "install a boy, who is unbeatable",
            complete: true,
            date: "29/08/2005",
            popup: true,
            explanation: "",
        }
    ],
    backdrop: false,
    delPopup: false,
    all: true,
    active: false,
    done: false,
    activecount: 0,
    completecount: 0,
    AiGenerateTask: false,
    AiExplainTask: null,
    // --

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

    // -- 
    alltime: true,
    today: false,
    tomorrow: false,
    yesterday: false,
    week: false,
    month: false,
    // --       theme change
    isdark: true,
    setIsdark: () => { },
    // --
    addAlltime: () => { },
    addToday: () => { },
    addTomorrow: () => { },
    addYesterday: () => { },
    addWeek: () => { },
    addMonth: () => { },
    // --
    setActivecount: () => { },
    setCompletecount: () => { },
    addDelpopup: () => { },
    addTodo: (massage) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
    editTodo: (id, massage) => { },
    addPopup: (id) => { },
    deleteAll: () => { },
    setbackdrop: () => { },
    addAll: () => { },
    addActive: () => { },
    addDone: () => { },
    addAiGenerateTask: () => { },
    addAiExplainTask: (id) => { },
    addExplanation: (id, explanation) => { }
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider