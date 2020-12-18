import React from 'react';
import styled, { css } from 'styled-components';

const CategoryBlock = styled.div`
     border-top:80px solid #999;
     .row { display:flex; padding-top:50px; justify-content:center;  }
`;

const Cate = styled.div`
    color:black;  
    padding:0 20px; margin:0 20px; 
    cursor:pointer;
${
    props => props.active && css`
        color:#22b8cf;
        border-bottom:2px solid #22b8cf;
        font-weight:bold;
    `
}

`;


const categories = [
    { name:'all', text:'전체보기'},
    { name:'business', text:'비즈니스'},
    { name:'entertainment', text:'엔터테인먼트'},
    { name:'health', text:'건강'},
    { name:'science', text:'과학'},
    { name:'sports', text:'스포츠'},
    { name:'technology', text:'기술'}
 ]

const Category = ({category, onSelect}) => {
    return (
        <CategoryBlock>
            <div className="row">
            {
                categories.map( (data) => ( <Cate key={data.name} active={ category === data.name } onClick={()=>onSelect(data.name)}>{data.text}</Cate> ) )
            }
            </div>
        </CategoryBlock>
    );
};

export default Category;