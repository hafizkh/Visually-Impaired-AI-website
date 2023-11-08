import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Navbar from './src/components/NavBar';
import Footer from './src/components/Footer';
import Home from './src/Pages/Home';
import About from './src/Pages/About';
import Contact from './src/Pages/Contact';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
