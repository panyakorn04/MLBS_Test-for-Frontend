import React from 'react'
import { ItemProps } from '../type/Type'

type Props = {
    result: ItemProps
}

const Item = ({ result }: Props) => {
    const item = result
    return (
        <div className="group relative cursor-pointer shadow-lg rounded-md" >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-75">
                <img src={item?.image} alt={item?.image} loading='lazy' className="w-full h-40 object-cover object-center" />
            </div>
            <div className='flex flex-col items-center justify-center py-2 text-base'>
                <p className='text-xs text-gray-400'>{item?.first_name} {item?.last_name}</p>
                <p className=''>{item?.gender}</p>
                <p className=''>{item?.email}</p>
                <p className=''>{item?.country}</p>
            </div>
        </div>
    )
}

export default Item