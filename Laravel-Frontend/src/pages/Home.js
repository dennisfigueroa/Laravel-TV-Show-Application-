import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'; 
function Home() {
    const apiCall = "https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"; 
    const [tvShows, setTvShows] = useState(null) 

    
    useEffect(() =>  {
        fetch(apiCall)
          .then(response => response.json()
            .then (json => {setTvShows(json.results)})
        )
        console.log(tvShows);
      },[] )   
    


    return (
        <>
            <Navbar />
         
                {tvShows && tvShows.map(tvShow => (
                    <div className="movie">
                        <img src={`https://image.tmdb.org/t/p/w500/` + tvShow.poster_path} />
                        <h6>{tvShow.name}</h6>


                    </div>
                ))}
                 </>
    )
}

export default Home
