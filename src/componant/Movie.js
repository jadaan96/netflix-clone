import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie/ModalMovie'

export default function Movie({product,handleShow,setproductDetalis}) {
   const handleClick = () => {
    setproductDetalis(product)
    handleShow() 
   }
  const path = 'https://image.tmdb.org/t/p/w500'
  return (
    <div>

      <Card style={{ width: '18rem' }} key={product.id}>
      <Card.Img variant="top" src={path+product.poster_path} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.overview.slice(0,100)}
        </Card.Text>
        <Button variant="primary" onClick={handleClick} >add to Favorite</Button>
      </Card.Body>
    </Card>
   
    </div>
  )
}
