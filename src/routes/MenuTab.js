import React, {useState, useCallback} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuList from '../components/MenuList';
import styled from 'styled-components';

const MenuTabBlock = styled.div`
    border-top:80px solid orange;
    padding-top:50px; 
`;

const MenuTab = () => {

    const [activeTab, setActiveTab] = useState(0)
    const onSelect = useCallback( activeTab => setActiveTab(activeTab), [])

    return (
        <MenuTabBlock>
           <Header />
           <MenuList activeTab={activeTab} onSelect={onSelect}  />
           <Footer />
        </MenuTabBlock>
    );
};

export default MenuTab;