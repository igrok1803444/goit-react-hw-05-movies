import { NoData } from 'components/NoData/NoData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'scripts/Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    async function fetchRequest() {
      const movieData = await fetchMovieReviews(movieID);
      setReviews(movieData);
    }
    fetchRequest();
  }, [movieID]);
  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length <= 0 && <NoData />}
    </>
  );
};
