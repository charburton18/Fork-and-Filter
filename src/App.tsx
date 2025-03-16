import { Routes, Route } from "react-router"
import Search from "./Pages/Search"
import List from "./Pages/List"
import Settings from "./Pages/Settings"
import './App.css'
import './assets/fork_and_filter.png'
import ForkAndFilter from "./Pages/ForkAndFilter"

function App() {

  return (
    <>
      <Routes>
        <Route path='/forkandfilter' element={<ForkAndFilter />}/>
        <Route path='/' element={<Search />}/>
        <Route path='/list' element={<List />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </>
  )
}

export default App