import React, { useEffect,useState } from 'react'
import axios from 'axios'
import MovieList from './MovieList/MovieList'

export default function Home() {
    const [movie,setMovie]=useState([])
    console.log(process.env.REACT_APP_API)
    const fetchData = async () =>{
        try{
        const data= await axios.get(`https://movie-library-8zrb.onrender.com/trending`)
        setMovie(data.data)
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
