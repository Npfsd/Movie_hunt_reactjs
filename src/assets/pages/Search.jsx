import { useEffect } from "react"
import {useSearchParams} from "react-router-dom";
import { Card } from "../components";
import { UseFetch } from "../hooks/UseFetch";

export const Search = ({apiPath}) => {
  const [ searchParams ] = useSearchParams();
  console.log(useSearchParams());
  
  const queryTerm=searchParams.get("q");

 
 const {data:movies}=UseFetch(apiPath,queryTerm);
 
 useEffect(()=>{
  document.title=`search result for ${queryTerm}`
 })
  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">
        {movies.length==0?`Results Not Found ${queryTerm}`:`Results for ${queryTerm}`}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {movies.map((movie)=>{
      return <Card key={movie.id} movie={movie}/>
})}


     </div>
    </main>
  )
 
}


