import React from 'react';

function Ninja({ ninjas }) {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="Ninja" key={ninja.id}>
        <h1>Name: {ninja.name}</h1>
        <p>Age: {ninja.age} </p>
        <p>Belt: {ninja.belt}</p>
      </div>
    );
  });

  return <div className="ninjas">{ninjaList}</div>;
}

export default Ninja;
