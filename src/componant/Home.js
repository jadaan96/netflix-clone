import React, { useEffect,useState } from 'react'
import axios from 'axios'
import MovieList from './MovieList'

export default function Home() {
    const [movie,setMovie]=useState([])
    console.log(process.env.REACT_APP_API)
    const fetchData = async () =>{
        try{
        const data= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=6bb87b1a98de9f76662436dc1695a6e1`)
        setMovie(data.data.results)
        }catch(error){
            console.log(error)
        }
    } 

    useEffect(() => {
        fetchData();
    }, [])
    console.log(movie)
  return (
    <div>
        {movie.length &&(
            
            <MovieList data={movie}/>
        ) }
    </div>
  )
}
