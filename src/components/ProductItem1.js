import React from 'react';
import styled from 'styled-components';

const ProductItemBlock = styled.div`
     width:50%; display:flex; margin-bottom:30px;
     img { width:130px; } 
     div { padding:0 10px; }
`;

const ProductItem = ({name, photo, about, depart}) => {
    return (
        <ProductItemBlock>
            <img src={photo} alt={name} />
            <div>
                <p>{name}</p>
                <p>{depart}</p>
                <p>{about}</p>
            </div>
        </ProductItemBlock>
    );
};

export default ProductItem;