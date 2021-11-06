import { useEffect, useState } from 'react'
import './App.css'
import CardList from './components/cardList/CardList'
import SearchBox from './components/searchBox/SearchBox'

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      console.log(data)
      setMonsters(data)
    }
    fetchData()
  }, [])
  const filteredContent = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  )

  const changeHandler = () => {}
  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='Search Monsters'
        handleChange={(e) => setSearch(e.target.value)}
      />
      <CardList monsters={filteredContent} />
    </div>
  )
}

export default App
