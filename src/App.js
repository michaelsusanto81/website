import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/about' component={About} />
      <Route path='/website'>
      	<Redirect to='/' />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
