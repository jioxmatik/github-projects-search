import { Container } from "semantic-ui-react"
import Reposetories from "./Repositories"
import useSearch from "../hooks/useSearch"
import SearchInput from "./SearchInput"
import Navigation from "./Navigation"
import { Route, Routes } from "react-router-dom"
import useFavorites from "../hooks/useFavorites"
import css from "./App.module.scss"


function App() {
  const [favoriteItems, toggleFollow] = useFavorites()
  const [items, isLoading, setSearch] = useSearch(favoriteItems)

  return (
    <div className={css.app}>
      <header className={css.appHeader}>
        <Navigation>
          <SearchInput isLoading={isLoading} onChange={setSearch} />
        </Navigation>
      </header>
      <main className={css.appContainer}>
        <Routes>
          <Route path="/" element={<Reposetories items={items} onFollow={toggleFollow} />} />
          <Route path="/favorites" element={<Reposetories items={favoriteItems} onFollow={toggleFollow} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
