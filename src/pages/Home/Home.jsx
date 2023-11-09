import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrending } from 'scripts/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchRequest() {
      const movies = await getTrending();
      setMovies(movies);
    }
    fetchRequest();
  }, []);
  return <main>{movies.length > 0 && <MovieList movies={movies} />}</main>;
};
export default Home;
