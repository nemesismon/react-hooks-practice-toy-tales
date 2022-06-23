import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleToyDelete}) {

  const toyItem = toys.map(toy => {

  return (
    <div id="toy-collection" key={toy.name}>
        <ToyCard toy={toy} handleToyDelete={handleToyDelete}/>
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
