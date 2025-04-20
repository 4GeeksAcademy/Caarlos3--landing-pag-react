import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import NavBar from './components/Navbar';
import JumboTron from './components/Jumbotron';
import Cards from './components/Cards';
import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <JumboTron />
    <Cards />
    <Footer />
  </React.StrictMode>,
)
