import React from "react";

function ToyCard({toy, handleToyDelete, handleToyLike}) {

  const handleDelete = (toy) => {
    console.log(toy)
    // setDelToy(toy)
    // console.log(delToy)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(() => {
      handleToyDelete(toy)
    })
  }
    
  const handleLike = (toy) => {
    const addLikes = toy.likes + 1
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
      "Content-type": "application/json"
      },
      body: JSON.stringify({likes: addLikes}),
    })
    .then(response => response.json())
    .then(data => handleToyLike((data)))
  }
  

  return (
    <div className="card" key={toy.id}>
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => handleLike(toy)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(toy)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
