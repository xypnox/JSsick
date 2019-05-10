import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>PokeTime</h1>
        </header>
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* exact keyword prevents home from matching with starting / of contacts and about */}
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
