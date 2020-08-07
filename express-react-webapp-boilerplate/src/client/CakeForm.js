import React, { useState } from "react";
// import { Form } from 'react-bootstrap'
// @todo clear on submit

export default function CakeForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [yumFactor, setYumFactor] = useState("");

  return (
    <form>
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
      <input
        value={yumFactor}
        onChange={e => setYumFactor(e.target.value)}
        placeholder="yumFactor"
        type="yumFactor"
        name="yumFactor"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

