import img from '../images/backup.jpeg'
import { Link } from 'react-router'
export const Card = ({movie}) => {
  const {id,title,overview,poster_path,release_date,vote_average,vote_count}=movie;
  const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:img;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
      <img src={image} alt="" className='card-img-top' />
        <div className="card-body">
         <h5 className='card-title text-success textflow-1'>{title}</h5>
         <p className='card-text textflow-2 '>{overview}</p>
         <div className='d-flex justify-content-between align-item-center'>
          <Link to={`/movie/${id}`} className="btn-sm btn-outline-success stretched-link" >
          Read more
          </Link>
         <small>
         <i className='bi bi-star-fill text-warning'></i> {vote_average} | {vote_count} review
         </small>
         </div>
        </div>
      </div>

    </div>
  )
}


