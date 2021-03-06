import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [data, setData] = useState([]);
  const {movieId}=useParams();
  const movie = data.find(movie => movie.id.toString() === movieId);
 
  useEffect(() => {
    const id = movieId;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/`)
        .then(response => {
          setData(response.data);
          console.log(response.data, movieId)
        })
        .catch(error => {
          console.error(error);
        });

  },[movieId]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie}/>
      <div className="save-button" onClick={saveMovie}>Save</div>
    </div>
  );
}

export default Movie;
