import { Container } from 'semantic-ui-react'
import Reposetories from './Repositories';
import useSearch from '../hooks/useSearch';
import SearchInput from './SearchInput';
import Navigation from './Navigation';
import { Route, Routes } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';


function App() {
  const [favoriteItems, toggleFollow] = useFavorites()
  const [items, isLoading, setSearch] = useSearch(favoriteItems)

  return (
    <>
      <Navigation>
        <SearchInput isLoading={isLoading} onChange={setSearch} />
      </Navigation>
      <Container>
        <Routes>
          <Route path="/" element={<Reposetories items={items} onFollow={toggleFollow} />} />
          <Route path="/favorites" element={<Reposetories items={favoriteItems} onFollow={toggleFollow} />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
