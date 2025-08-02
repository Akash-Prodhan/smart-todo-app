import React from 'react'

const NoTask = ({massage1,massage2}) => {
    return (
        <>
            <div className="mt-6 text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 transition-all duration-700 ease-in-out">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-600 via-blue-600 to-purple-600 dark:from-gray-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                    {massage1}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{massage2}</p>
            </div>
        </>
    )
}

export default NoTask