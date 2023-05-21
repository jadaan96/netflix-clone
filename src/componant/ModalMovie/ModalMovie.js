import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalMovie.css'
import axios from 'axios'

function ModalMovie({handleClose,show,productDetalis}) {
  const [comment,setcommit]=useState('')
  const saveData = async () =>{
    
    const modifiedItem = {...productDetalis, comment: comment}; 
    const res=await axios({
      method:'post',
      url:'https://movie-library-8zrb.onrender.com/addMovie',
      data:modifiedItem,
    })
    // axios.post(`http://localhost:3002/addMovie`,productDetalis)
    // .then(res => console.log(res.data))
    // .catch(err =>console.log(err))
   
  }
  const handlehide = () => {
    saveData()
    handleClose() 
   } 
  const path = 'https://image.tmdb.org/t/p/original'
  return (
    
      <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{productDetalis.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <img  src={path+productDetalis.poster_path} /> 
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