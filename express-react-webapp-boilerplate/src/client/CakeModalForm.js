import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";

export default function CakeForm() {
  // form elements
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [yumFactor, setYumFactor] = useState("");
  // modal interaction
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setName('');
    setComment('');
    setImageUrl('');
    setYumFactor('');
  }
  const handleShow = () => setShow(true);
  // response
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:1338/api/v1/cakes', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        comment: comment,
        imageUrl: imageUrl,
        yumFactor: yumFactor
      })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      setSuccess(true)
      // console.log(data)
    });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Cake
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='add-cake-form' onSubmit={handleSubmit}>
            {/* @todo bootstrapify form */}

            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="name"
              type="text"
              name="name"
              required
            />
            <input
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="comment"
              type="text"
              name="comment"
              required
            />
            <input
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="image"
              type="text"
              name="imageUrl"
              required
            />
            <label for="yumFactor">How yum? (1-5)</label>
            <input
              value={yumFactor}
              onChange={e => setYumFactor(e.target.value)}
              placeholder="5"
              type="number"
              name="yumFactor"
              min="1"
              max="5"
              required
            />
          </form>

        </Modal.Body>
        <Modal.Footer>
          <p text-justify>
            { success === true ? 'New cake has been submitted' : ''}
          </p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={success} variant="primary" form='add-cake-form' type='submit' value='Submit'>
            Save Cake
          </Button>
        </Modal.Footer>
      </Modal>
    </>


  );
}
