import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React from 'react'

export default function UpdateModal ({ show, handleClose, MovieDetalis, setIsUpdated }) {
  
  const updateMovies = (e) => {
    e.preventDefault();
    setIsUpdated(false);
    const obj = {
      comment: e.target.comment.value,
      
    }
    console.log(obj)
    console.log(MovieDetalis.id)

    handleClose();
        axios.put(`https://movie-library-8zrb.onrender.com/addMovie/${MovieDetalis.id}`, obj)
        .then(res => {
          setIsUpdated(true);
          console.log("hii")
        })
        .catch(err => console.log(err))
      }

  return (
    <div>
       <Modal show={show} onHide={handleClose}>
      <form onSubmit={updateMovies}>
        <Modal.Header closeButton>
          <Modal.Title>Update product: {MovieDetalis.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input id='comment' type="text" defaultValue={MovieDetalis.comment} />
                 
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" type='submit' >Save changes</Button>
        </Modal.Footer>
      </form>
    </Modal>
    </div>
  )
}
