import React from 'react'
import { useTodo } from '../context/TodoContext'

export const FooterText = ({className=''}) => {
    const { activecount, completecount, all, active, done, alltime, today, tomorrow, yesterday, week, month, todayactivecount,
        todaycompletecount, tomorrowactivecount, tomorrowcompletecount, yesterdayactivecount, yesterdaycompletecount,
        weekactivecount, weekcompletecount, monthactivecount, monthcompletecount,
    } = useTodo()

    return (
        <>
            <div className={`${className} text-center text-sm mt-4 space-y-1`}>

                {alltime ? <div className="bg-gradient-to-r from-gray-500 via-blue-500 to-purple-500 dark:from-gray-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-medium">
                    {activecount} active • {completecount} completed
                </div> : null}
                {today ? <div className="bg-gradient-to-r from-gray-500 via-blue-500 to-purple-500 dark:from-gray-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-medium">
                    {todayactivecount} active • {todaycompletecount} completed
                </div> : null}
                {tomorrow ? <div className="bg-gradient-to-r from-gray-500 via-blue-500 to-purple-500 dark:from-gray-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-medium">
                    {tomorrowactivecount} active • {tomorrowcompletecount} completed
                </div> : null}
                {yesterday ? <div className="bg-gradient-to-r from-gray-500 via-blue-500 to-purple-500 dark:from-gray-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-medium">
                    {yesterdayactivecount} active • {yesterdaycompletecount} completed
                </div> : null}
                {week ? <div className="bg-gradient-to-r from-gray-500 via-blue-500 to-purple-500 dark:from-gray-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-medium">
                    {weekactivecount} active • {weekcompletecount} completed
                </div> : null}
                {month ? <div className="bg-gradient-to-r from-gray-500 via-blue-500 to-purple-500 dark:from-gray-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-medium">
                    {monthactivecount} active • {monthcompletecount} completed
                </div> : null}

                {alltime && all ? <div className="text-xs text-gray-400 dark:text-gray-500">{activecount + completecount} tasks in alltime</div> : ""}
                {alltime && active ? <div className="text-xs text-gray-400 dark:text-gray-500">{activecount} active</div> : ""}
                {alltime && done ? <div className="text-xs text-gray-400 dark:text-gray-500">{completecount} completed</div> : ""}

                {today && all ? <div className="text-xs text-gray-400 dark:text-gray-500">{todayactivecount + todaycompletecount} tasks in today</div> : ""}
                {today && active ? <div className="text-xs text-gray-400 dark:text-gray-500">{todayactivecount} active in today</div> : ""}
                {today && done ? <div className="text-xs text-gray-400 dark:text-gray-500">{todaycompletecount} completed in today</div> : ""}

                {tomorrow && all ? <div className="text-xs text-gray-400 dark:text-gray-500">{tomorrowactivecount + tomorrowcompletecount} tasks in tomorrow</div> : ""}
                {tomorrow && active ? <div className="text-xs text-gray-400 dark:text-gray-500">{tomorrowactivecount} active in tomorrow</div> : ""}
                {tomorrow && done ? <div className="text-xs text-gray-400 dark:text-gray-500">{tomorrowcompletecount} completed in tomorrow</div> : ""}

                {yesterday && all ? <div className="text-xs text-gray-400 dark:text-gray-500">{yesterdayactivecount + yesterdaycompletecount} tasks in yesterday</div> : ""}
                {yesterday && active ? <div className="text-xs text-gray-400 dark:text-gray-500">{yesterdayactivecount} active in yesterday</div> : ""}
                {yesterday && done ? <div className="text-xs text-gray-400 dark:text-gray-500">{yesterdaycompletecount} completed in yesterday</div> : ""}

                {week && all ? <div className="text-xs text-gray-400 dark:text-gray-500">{weekactivecount + weekcompletecount} tasks in this week</div> : ""}
                {week && active ? <div className="text-xs text-gray-400 dark:text-gray-500">{weekactivecount} active in this week</div> : ""}
                {week && done ? <div className="text-xs text-gray-400 dark:text-gray-500">{weekcompletecount} completed in this week</div> : ""}

                {month && all ? <div className="text-xs text-gray-400 dark:text-gray-500">{monthactivecount + monthcompletecount} tasks in this month</div> : ""}
                {month && active ? <div className="text-xs text-gray-400 dark:text-gray-500">{monthactivecount} active in this month</div> : ""}
                {month && done ? <div className="text-xs text-gray-400 dark:text-gray-500">{monthcompletecount} completed in this month</div> : ""}



            </div>
        </>
    )
}
