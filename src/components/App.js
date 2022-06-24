import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect (() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(data => setToys(data))
  }, [])

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  }

  const handleToyDelete = (toy) => {
    setToys(toys.filter(item => item.id !== toy.id))
  }

  const handleToyLike = (toy) => {
    const updatedToys = toys.map(item => {
      if (item.id === toy.id) {
        return toy
      } else {
        return item
      }
    })
    setToys(updatedToys)
  }

  const handleAddToy = (toy) => {
    console.log(toy)
    setToys([...toys, toy])
  }
 
  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleToyDelete={handleToyDelete} handleToyLike={handleToyLike}/>
    </>
  );
}

export default App;
