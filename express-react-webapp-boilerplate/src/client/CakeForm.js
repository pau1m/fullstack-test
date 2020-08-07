import React, { useState } from "react";

export default function CakeForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [yumFactor, setYumFactor] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:1338/api/v1/cakes', {
      method: 'post',
      body: JSON.stringify({
        name: name,
        comment: comment,
        imageUrl: imageUrl,
        yumFactor: yumFactor
      })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      // @todo check data (need a whole object back only getting id just now)
      setSuccess(true)
      // console.log(data)
    });
  }

  return (
    <div>
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
    { success === true ? 'New cake has been submitted' : ''}
    </div>
  );
}

