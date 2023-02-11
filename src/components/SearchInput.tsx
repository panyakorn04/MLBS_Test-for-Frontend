import React from 'react'

type Props = {
    filter: any
    setFilter: (filter: any) => void
    handleClear: () => void
}

const SearchInput = ({ filter, setFilter, handleClear }: Props) => {
    return (
        <div className='flex space-x-4 mt-4 items-center justify-center'>
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative mt-1  rounded-md border border-gray-300">
                <input type="text"
                    name="search"
                    id="search"
                    value={filter?.searchTerm}
                    className="block w-full h-10 rounded-md border-gray-300 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter Search" onChange={event => setFilter({
                        ...filter,
                        searchTerm: event.target.value
                    })} />

                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                        ⌘K
                    </kbd>
                </div>
            </div>
            <button type="button" className='inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={() => handleClear()} >clear</button>
        </div>
    )
}

export default SearchInput