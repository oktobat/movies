import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const RoadMapBlock = styled.div`
    border-top:80px solid orange;
    padding-top:50px; 
`;

const RoadMap = () => {
    return (
        <RoadMapBlock>
           <Header />
           <div className="row" dangerouslySetInnerHTML={{ __html: `<iframe width="100%" height="800px" src="https://www.youtube.com/embed/ULGE90DD-wE?mute=1&amp;autoplay=1&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}}></div>
           <Footer />
        </RoadMapBlock>
    );
};

export default RoadMap;