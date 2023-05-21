import Movie from '../componant/Movie'
import ModalMovie from '../ModalMovie/ModalMovie';
import React, {useState } from 'react'
import '../MovieList/MovieList.css'

export default function MovieList({data}) {
  const [productDetalis,setproductDetalis]=useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={'mainDiv'}>
      {
          data.length && (
            data.map(item => 
              <Movie product={item} handleShow={handleShow} setproductDetalis={setproductDetalis} />
            )
          )
        }
        
        <ModalMovie show={show} handleClose={handleClose}  productDetalis={productDetalis}  />
        
    </div>
  )
}
