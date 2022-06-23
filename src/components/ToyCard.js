import React, {useState} from "react";

function ToyCard({toy, handleToyDelete}) {

  const [like, setLike] = useState(false)
  const [delToy, setDelToy] = useState([])

  const handleDelete = () => {

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then((data) => setDelToy(data))
    console.log(delToy)
    handleToyDelete(delToy)
  }

  const handleLike = () => {
    setLike(!like)
    console.log(like)
    if (like === true) {
      const tempLikes = toy.likes + 1
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: tempLikes}),
    })
    .then(response => response.json())
    .then(data => console.log("i still need to be written LIKES"))
    }
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
