import { useEffect, useState } from "react"


export const UseFetch = (apiPath, queryTerm="") => {
    const [data,setData]=useState([]);
    const key=import.meta.env.VITE_API_KEY;
   
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

    
    useEffect(()=>{
        async function fetchMovies() {
            try {
                const res = await fetch(url);
                const jsonData = await res.json();
                setData(jsonData.results); 
             
               
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchMovies();
    }, [url]); // url changes, so we re-fetch data

    console.log("data fetcch",{data});
   
    
  return {data};

  
}


