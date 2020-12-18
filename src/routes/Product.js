import React, {useState, useCallback} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productsection from '../components/Productsection';

const Product = () => {

    const [activeTab, setActiveTab] = useState(0)
    const onSelect = useCallback( activeTab => setActiveTab(activeTab), [])

    return (
        <div className="wrap">
            <Header />
            <Productsection activeTab={activeTab} onSelect={onSelect} />
            <Footer />
        </div>
    );
};

export default Product;