import React, { useState } from "react";

export default function CakeForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [yumFactor, setYumFactor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // gather values and send to api
    // create a response message
    // reset
  }

  return (
    <form onSubmit={handleSubmit}>
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
        // type="range"
        type="text"
        name="yumFactor"
        min="0"
        max="5"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

