import { useEffect } from "react"
import { useNavigate } from "react-router";
import { Card } from "../components";
import { UseFetch } from "../hooks/UseFetch";



export const MoviesList = ({title,apiPath}) => {
 const {data :movies}=UseFetch(apiPath);
  
   
 
  useEffect(()=>{
    document.title=title;
  })
  const navigate=useNavigate();
  return (
    <div>
     <div className="container">
      {title=="Home" ? (
        <div className="bg-body-tertiary p-5 border mb-5"> 
        <h3 className="text-success">Welcome to Moviehunt</h3>
        <p className="lead">Discover Movies</p>
        <button className="btn btn-success" onClick={()=>{
          navigate("/movies/upcoming")
        }}>Explore now</button>
        </div>
      ):""}
      <div className="text-danger py-2 border-bottom">{title}</div>
     </div>
     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {movies.map((movie)=>{
     
      return <Card key={movie.id} movie={movie}/>
})}
     </div>
    </div>
  )
}

