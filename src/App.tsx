import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/nav/Header';
import Footer from './common/nav/Footer';
import Home from './components/pages/Home';
import Experiences from './components/pages/Experiences';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';
import './App.scss';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className='page'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/experiences' element={<Experiences />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
