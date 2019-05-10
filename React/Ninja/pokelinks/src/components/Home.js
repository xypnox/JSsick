import React from 'react';
import Rainbow from '../hoc/Rainbow';

function Home(props) {
  console.log(props);

  return (
    <div className="Home">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis, sit ad ipsa
        laudantium esse porro aperiam eum illo eveniet ullam ex sed harum accusantium delectus quo,
        nihil aliquam vero.
      </p>
    </div>
  );
}

// Note that we have wrapped our compoent in a custom Higher order component
// See src/hoc/Rainbow for implementation detail
export default Rainbow(Home);
