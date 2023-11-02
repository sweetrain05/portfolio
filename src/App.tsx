import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.scss';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className='page'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
