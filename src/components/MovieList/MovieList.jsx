import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesFromServer = [] }) => (
  <div className="movies">
    {Array.isArray(moviesFromServer) &&
      moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
  </div>
);
