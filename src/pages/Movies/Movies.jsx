import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'scripts/Api';
import { SearchButton, SearchForm, SearchInput } from './Movies.styled';
import { NoData } from 'components/NoData/NoData';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchRequest() {
      const movieData = await fetchMovies(query);
      setMovies(movieData);
    }
    fetchRequest();
  }, [query]);

  const formHandler = event => {
    event.preventDefault();
    const formQuery = event.target.query.value.toLowerCase().trim();
    if (formQuery === '') {
      return;
    }

    setSearchParams({ query: formQuery });
    event.target.reset();
  };

  return (
    <main>
      <SearchForm onSubmit={formHandler}>
        <SearchInput type="text" name="query" required />
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>
      </SearchForm>
      <div>
        {movies.length > 0 && <MovieList movies={movies} />}
        {movies.length <= 0 && query !== '' && <NoData />}
      </div>
    </main>
  );
};
export default Movies;
