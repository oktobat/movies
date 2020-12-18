import React from 'react';
import Header from '../components/Header';
import Homesection from '../components/Homesection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="wrap">
            <Header />
            <Homesection />
            <Footer />
        </div>
    );
};

export default Home;