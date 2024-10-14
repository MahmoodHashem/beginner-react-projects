import { useEffect, useState } from 'react'
import search from './assets/search.svg'
import Movie from './components/Movie'


const API_URL = "https://www.omdbapi.com/?apikey=86a054a2"

function App() {

  const [input, setInput] = useState('')
  const [title, setTitle] = useState('Superman')
  const [movies, setMovies] = useState([]);

  function handleInput() {
    const movieName = event.target.value;
    setInput(movieName)
  }

  function handleSearch() {
    event.preventDefault()
    setTitle(input)
  }

  const searchMovie = async (title) => {
    const movies = await fetch(`${API_URL}&s=${title}`);
    const data = await movies.json()
    setMovies(data.Search)
  }


  useEffect(() => {
    searchMovie(title)
  }, [title])


  return (
    <div className="app">
      <h1>MovieLand</h1>
      <form onSubmit={handleSearch} className="search">

        <input
          className='input'
          type="text"
          name=""
          value={input}
          onChange={() => handleInput()}
        />
        <button onClick={() => handleSearch()}>
          <img src={search} alt="search" />
        </button>
      </form>
      <div className="container">
        {
          movies?.length > 0
            ?
            movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))
            :
            <div className="empty">
              <h2>Movie not found</h2>
            </div>}
      </div>
    </div>
  )
}

export default App
