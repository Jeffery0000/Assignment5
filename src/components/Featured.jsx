import './Featured.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Featured() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getData() {
            setMovies((await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data.results);
        };

        getData();
    }, []);

    console.log(movies);

    return (
        <div className='featured'>
            {movies && movies.map(movie => (
                <div className="movie-card" key={movie.id}>
                    <h1>{`${movie.title}`}</h1>
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
                </div>
            ))}
        </div>
    );
}

export default Featured;