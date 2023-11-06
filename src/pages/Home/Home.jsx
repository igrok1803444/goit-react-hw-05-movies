import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrending } from 'scripts/Api';

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    async function fetchRequest() {
      const popularMovies = await getTrending();
      setMovies(popularMovies);
    }
    fetchRequest();
  }, []);
  return <div>{movies.length > 0 && <MovieList movies={movies} />}</div>;
};
export default Home;
