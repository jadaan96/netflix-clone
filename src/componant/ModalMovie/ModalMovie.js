import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalMovie.css'
import axios from 'axios'

function ModalMovie({handleClose,show,MovieDetalis}) {
  const [comment,setcommit]=useState('')
  const saveData = async () =>{
    
    const modifiedItem = {...MovieDetalis, comment: comment}; 
    const res=await axios({
      method:'post',
      url:'https://movie-library-8zrb.onrender.com/addMovie',
      data:modifiedItem,
    })
    // axios.post(`http://localhost:3002/addMovie`,MovieDetalis)
    // .then(res => console.log(res.data))
    // .catch(err =>console.log(err))
   console.log(res)
   ///
  }
  const handlehide = () => {
    saveData()
    handleClose() 
   } 
  const path = 'https://image.tmdb.org/t/p/original'
  return (
    
      <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{MovieDetalis.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <img  src={path+MovieDetalis.poster_path} /> 
         <br/><br/><br/>
         <label for="">Type your comment...</label>
          <input type="text" onChange={(e) =>setcommit(e.target.value)} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary"  onClick={handlehide} >add To Favorite</Button>
        </Modal.Footer>
      </Modal   >
    
  );
}

export default ModalMovie;