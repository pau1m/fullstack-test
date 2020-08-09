import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

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
          <Form id='add-cake-form' onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cake name"
                onChange={e => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="imageUrl">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://example.com/foo.png"
                onChange={e => setImageUrl(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows='3'
                placeholder="How you feel about this cake?"
                onChange={e => setComment(e.target.value)}
                required
              />
              </Form.Group>
              <Form.Group controlId="setYumFactor">
                <Form.Label>Rating</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p className='mx-auto text-success'>
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
