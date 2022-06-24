import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleToyDelete, handleToyLike}) {

  const toyItem = toys.map(toy => {

  return (
    <div id="toy-collection" key={toy.id} name={toy.name}>
        <ToyCard toy={toy} handleToyDelete={handleToyDelete} handleToyLike={handleToyLike}/>
      </div>
  );
  })

  return (
    <>
    {toyItem}
    </>
  )
}

export default ToyContainer;
