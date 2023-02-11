import React, { useState } from 'react'
import useSWR from 'swr'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getListItem } from '../api/Services'
import Item from './Item';
import { useEffect } from 'react';

type Props = {
    query: Array<object>,
}

const List = ({ query }: Props) => {
    const [items, setItems] = useState<Array<object>>([])
    const [hasMore, setHasMore] = useState<boolean>(true)

    // fetch more data
    const fetchMoreData = () => {
        if (items?.length >= query?.length) {
            setHasMore(false)
            return;
        }
        setTimeout(() => {
            setItems(items.concat(query.slice(items?.length, items?.length + 20)))
        }, 1000);
    };
    useEffect(() => {
        if (query) {
            setItems(query.slice(0, 20))
        }
    }, [query])

    return (
        <div className='container'>
            {items && items.length > 0 ? (
                <InfiniteScroll className="mt-10 grid grid-cols-1 px-4 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4"
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    {items?.map((item: any) => {
                        return (
                            <Item key={item?.id} result={item} />
                        )
                    })}
                </InfiniteScroll>
            ) : (
                <div className="text-2xl font-bold">No Data</div>
            )}
        </div>
    )
}

export default List