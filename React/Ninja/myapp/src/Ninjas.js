import React from 'react';
import './Ninjas.css';

// Functional Component for displaying a ninja
function Ninja({ ninjas, deleteNinja }) {
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        <div className="Ninja" key={ninja.id}>
          <h1>Name: {ninja.name}</h1>
          <p>Age: {ninja.age} </p>
          <p>Belt: {ninja.belt}</p>
          <button type="button" onClick={ () => {deleteNinja(ninja.id)} }>Delete</button>
        </div>
      );
    }
    return null;
  });

  return <div className="ninjas">{ninjaList}</div>;
}

export default Ninja;
