import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const NewsDetailBlock = styled.div`
    border-top:80px solid blue;
    .row { padding-top:50px; text-align:center;
        p:nth-child(1) { font-size:25px;  }
        p:nth-child(2) {  margin:30px 0px;
            img { width:60% }
        }
        p:nth-child(3) {  font-size:20px;  }
    }
`;

const NewsDetail = (props) => {

    // console.log(props)
    const { location, history } = props;

    useEffect(
        () => { 
            if ( location.state === undefined ) {
                history.push('/')
            }
        }, []
    )

    if (location.state) {
        return (
            <div className="wrap">
                <Header />
                <NewsDetailBlock>
                    <div className="row">
                        <p>{location.state.title}</p>      
                        <p><img src={location.state.urlToImage} alt={location.state.title} /></p>      
                        <p>{location.state.description}</p>
                    </div>
                </NewsDetailBlock>
                <Footer />
            </div>
        );
    } else {
        return null;
    }
    
}

export default NewsDetail;







