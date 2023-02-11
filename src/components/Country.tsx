import React from 'react'
import { ItemProps } from '../type/Type'

type Props = {
    items: ItemProps[],
    filter: any
    setFilter: (filter: any) => void
}

const Country = ({ items, filter, setFilter }: Props) => {
    return (
        <div className='flex flex-wrap gap-2 pt-5 items-center justify-center'>
            {items?.map((item: any) => item.country).filter((value: any, index: any, self: any) => self.indexOf(value) === index).map((item: any) => (
                <div key={item}>
                    <button type="button" className={`inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${item === filter?.findCountry ? " bg-black text-white  hover:bg-indigo-500" : "bg-white"}`} onClick={() => setFilter({
                        ...filter,
                        findCountry: item
                    })}>{item}</button>
                </div>
            ))}
        </div>
    )
}

export default Country