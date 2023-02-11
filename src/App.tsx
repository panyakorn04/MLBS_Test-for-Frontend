import { useEffect, useState } from 'react'
import useSWR from 'swr'

import List from './components/List';
import SearchInput from './components/SearchInput';
import { getListItem } from './api/Services';
import Gender from './components/Gender';
import Country from './components/Country';


function App() {
  const { data, error, isLoading } = useSWR('items', getListItem)
  const [query, setQuery] = useState<string>("")

  // const [searchTerm, setSearchTerm] = useState<string>("")
  // const [findGender, setFindGender] = useState<string>("")
  // const [findCountry, setFindCountry] = useState<string>("")

  const [filter, setFilter] = useState<any>({
    searchTerm: "" || JSON.parse(localStorage.getItem("filter") || "{}")?.searchTerm,
    findGender: "" || JSON.parse(localStorage.getItem("filter") || "{}")?.findGender,
    findCountry: "" || JSON.parse(localStorage.getItem("filter") || "{}")?.findCountry
  })
  localStorage.setItem("filter", JSON.stringify(filter))


  // filter data
  const filterByData = (data: any, filter: any) => {
    return data?.filter((item: any) => {
      if (filter?.searchTerm === "") {
        return item
      } else if (item?.first_name?.toLowerCase().includes(filter?.searchTerm?.toLowerCase()) || item?.last_name?.toLowerCase().includes(filter?.searchTerm?.toLowerCase())) {
        return item
      }
    }).filter((item: any) => {
      if (filter?.findGender === "") {
        return item
      } else if (item?.gender === filter?.findGender) {
        return item
      }
    }).filter((item: any) => {
      if (filter?.findCountry === "") {
        return item
      } else if (item?.country === filter?.findCountry) {
        return item
      }
    }).map((item: any) => item)
  }

  // filter data
  useEffect(() => {
    setQuery(filterByData(data?.items, filter))
  }, [data, filter])


  // clear filter
  const handleClear = () => {
    setFilter({
      searchTerm: "",
      findGender: "",
      findCountry: ""
    })
  }


  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <div className='flex items-center justify-center'>
          <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>test</h1>
        </div>
        <div className="flex flex-col">
          {error && <div className="text-2xl font-bold">Error</div>}
          {!isLoading ?
            (
              <>
                <Gender items={data?.items} filter={filter} setFilter={setFilter} />
                <Country items={data?.items} filter={filter} setFilter={setFilter} />
                <SearchInput filter={filter} setFilter={setFilter} handleClear={handleClear} />
                <List query={query} />
              </>
            ) : (
              <div className="text-2xl font-bold">Loading...</div>
            )}
        </div>
      </div>
    </div >
  )
}


export default App