import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/nav/Header';
import Footer from './common/nav/Footer';
import Home from './components/pages/Home';
import Experiences from './components/pages/Experiences';
import Contact from './components/pages/Contact';
import './App.scss';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className='page'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/experiences' element={<Experiences />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
