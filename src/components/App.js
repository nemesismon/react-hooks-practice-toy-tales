import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [deleteToy, setDeleteToy] = useState([])

  useEffect (() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(data => setToys(data))
  }, [])

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  }

  const handleToyDelete = (toy) => {
    console.log(toy)
    // setToys(toys.filter(toy => toyToDelete !== toy))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleToyDelete={handleToyDelete}/>
    </>
  );
}

export default App;
