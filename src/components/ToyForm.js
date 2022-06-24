import React, {useState} from "react";

function ToyForm({handleAddToy}) {

  const [newToy, setNewToy] = useState({
    "name": "",
    "image": "",
    "likes": 0
  })

  const handleForm = (event) => {
    const name = event.target.name
    const value = event.target.value
  
    setNewToy({...newToy, [name]: value})  
  }

  const handleSubmit = (event) => {
    event.preventDefault()
      fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newToy),
      })
      .then(response => response.json())
      .then(data => handleAddToy(data))
    setNewToy({
      "name": "",
      "image": "",
      "likes": 0
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleForm}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleForm}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
