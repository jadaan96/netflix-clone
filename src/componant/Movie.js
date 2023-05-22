import React ,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function Movie({product,handleShow,setMovieDetalis,canEdit=false,updateTheMoviestate}) {
   const handleClick = () => {
    setMovieDetalis(product)
    handleShow() 
   }
   const deleteMovie = () => {
    axios.delete(`https://movie-library-8zrb.onrender.com/addMovie/${product.id}`)
         .then(res => {
          console.log('deleted');
          updateTheMoviestate(product.id)
        })
         .catch(err => console.log(err))
  }
   
    const path = 'https://image.tmdb.org/t/p/w500'
  return (
    <div>

      <Card style={{ width: '18rem' }} key={product.id}>
      <Card.Img variant="top" src={path+product.poster_path} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        { !canEdit &&(
          <>
        <Card.Text>
          {product.overview.slice(0,100)}
        </Card.Text>
       
          <Button variant="primary" onClick={handleClick} >add to Favorite</Button>
          </>
       )}
       { canEdit &&(
        <div>
          <Card.Text>
          {product.comment}
        </Card.Text>
          <Button variant="success" onClick={handleClick} >Update</Button>
          <Button variant="danger" onClick={deleteMovie} >Delete</Button>
          </div>
       )}

        
      </Card.Body>
    </Card>
   
    </div>
  )
}
