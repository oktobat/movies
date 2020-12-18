import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width:100%;
    padding:15px 0px;
    color:#fff;
    background:#999;
    border-radius:10px;
    border:none;
    &:hover { background:#333 }
`;

const Button = (props) => {
    return (
        <StyledButton {...props} />
    );
};

export default Button;