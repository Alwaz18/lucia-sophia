import React from 'react';
import Link from 'next/link'

const DropDown = ({ names }) => {
    return (
        <div className="p-10">

            <div className="dropdown inline-block relative rounded-xl">
                <button className="bg-yellow-400 hover:bg-yellow-500 txt-main font-semibold py-2 px-4 rounded inline-flex items-center custom-montserrat">
                    <span className="mr-1">Category</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>
                <ul className="dropdown-menu absolute z-40 hidden txt-main pt-1">
                    {names.map(({ name }, id) =>
                        <Link href={`/products/category/${name}`}>

                            <a
                                className="rounded-t bg-gray-200 hover:bg-gray-400 custom-roboto font-medium py-2 px-4 block whitespace-no-wrap"
                            >{name}</a>
                        </Link>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default DropDown
