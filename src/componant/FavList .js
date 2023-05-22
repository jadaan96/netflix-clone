import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from './Movie';
import UpdateModal from './UpdateModal/UpdateModal '

export default function FavList() {
  const [TheMovies, setTheMovies] = useState([]);
  const [show, setShow] = useState(false);

  const [MovieDetalis,setMovieDetalis]=useState({})
  const [isUpdated, setIsUpdated] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://movie-library-8zrb.onrender.com/addMovie`);
      console.log(res.data);
      setTheMovies(res.data)
    } catch(err) {
      console.log(err)
    }
  }
  const updateTheMoviestate = (id) => {
    console.log(id)
    setTheMovies(preValue => preValue.filter(item => item.id !== id))
  }

  useEffect(() => {
    fetchData();
  }, [isUpdated])

  return (
    <div>
       
      {
          TheMovies.length && (
            TheMovies.map(item => 
              <Movie product={item} handleShow={handleShow} canEdit={true} setMovieDetalis={setMovieDetalis} updateTheMoviestate={updateTheMoviestate}/>
            )
          )
        }
        <UpdateModal show={show} handleClose={handleClose}  MovieDetalis={MovieDetalis} setIsUpdated={setIsUpdated} />
     
    </div>
  )
}