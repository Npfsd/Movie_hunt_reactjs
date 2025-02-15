import { MovieDetails, MoviesList,PageNotFound,Search } from "../pages"
import { Routes, Route } from "react-router" 
const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<MoviesList  title="Home"  apiPath="movie/now_playing"/>} />  
    <Route path="movies/popular" element={<MoviesList  title="popular" apiPath="movie/popular" />} />  
    <Route path="movies/top" element={<MoviesList  title="top rated movies" apiPath="movie/top_rated" />} />
    <Route path="movies/upcoming" element={<MoviesList  title="upcoming movies" apiPath="movie/upcoming"/>} />    
    <Route path="movie/:id" element={<MovieDetails />}  />
    <Route path="search" element={<Search  apiPath="search/movie"/>}/>
    <Route path="*" element={<PageNotFound />} />
     </Routes>
   </>
  )
}

export default AllRoutes
