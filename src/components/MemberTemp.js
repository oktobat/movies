import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const MemberTempBlock = styled.div`
    border-top:80px solid orange;
    .row { padding-top:100px; padding-bottom:100px; 
        h2 { font-size:30px; text-align:center }
    }
`;

const MemberTemp = ({children}) => {
    return (
        <div className="wrap">
            <Header />
            <MemberTempBlock>
                <div className="row">
                    <h2>MEMBERSHIP</h2>
                    {children}
                </div>
            </MemberTempBlock>
            <Footer />
        </div>
    );
};

export default MemberTemp;