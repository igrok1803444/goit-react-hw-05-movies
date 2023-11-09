import { NoData } from 'components/NoData/NoData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'scripts/Api';
import { ActorItem, ActorPhoto, ActorsList } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    async function fetchRequest() {
      const movieData = await fetchMovieActors(movieID);
      setActors(movieData);
    }
    fetchRequest();
  }, [movieID]);
  return (
    <>
      <ActorsList>
        {actors &&
          actors.cast.map(actor => (
            <ActorItem key={actor.id}>
              <ActorPhoto
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={`Face of${actor.name}`}
              />
              <h3>{actor.name}</h3>
              <p>Персонаж: {actor.character}</p>
            </ActorItem>
          ))}
      </ActorsList>
      {(!actors || actors.cast.length <= 0) && <NoData />}
    </>
  );
};
