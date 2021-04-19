import React from 'react'

function Button({children}) {
    return (
        <button className="
        md:mr-3 mr-2 shadow-md md:m-0 my-1
        rounded-xl lg:px-3 lg:py-2 px-2 py-1 txt-main lg:text-sm text-xs custom-montserrat
        border-yellow-600 border hover:bg-yellow-600 hover:text-gray-200
        transition-all  duration-500 ease-in-out ">{children}</button>
    )
}

export default Button
