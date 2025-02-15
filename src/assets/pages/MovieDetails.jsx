import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import img from '../images/backup.jpeg'
import { convertMinutes } from "../util/util"


export const MovieDetails = () => {
const [movie,setMovie]=useState([])
const params=useParams();
const key=import.meta.env.VITE_API_KEY;
const image=movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:img;
const url=`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(()=>{
    async function fetchMovies() {

      const res = await fetch(url);
                const jsonData = await res.json();
                setMovie (jsonData);       
    }
    fetchMovies();
  },[])
  useEffect(()=>{
    document.title=`${movie.title}`
    
    
  })
   
  
  return (
    <div className="container">
      <div className="text-danger py-2 border-bottom">{movie.title}</div>
      <div className="row">
        <div className="col-md-4">
       <img src={image} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-success">{movie.title}</h3>
          <p >{movie.overview}</p>
          {movie.genres?(
            <p className="d-flex gap-3">
              {movie.genres.map((genre)=>(
                <span key={genre.id} className="badge bg-danger">{genre.name}</span>
              ))}
            </p>
          ):""}
          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i>{movie.vote_average} |  <i className="bi bi-people-fill text-success"></i>{movie.vote_count} review
          </p>
          <table className="table table-bordered mt-2 w-50">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>
          <a className=" btn btn-warning" target="_blank" href={`https:www.imdb.com/title/${movie.imdb_id}`}>view imdb</a>
          </div>
      </div>


    </div>
  )
}


