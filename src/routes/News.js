import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import Category from '../components/Category';

const News = () => {

    const [category, setCategory ] = useState('all');
    const onSelect = useCallback( category => setCategory(category), [])

    return (
        <div className="wrap">
            <Header />
            <Category category={category} onSelect={onSelect} />
            <NewsSection category={category} />
            <Footer />
        </div>
    );
};

export default News;