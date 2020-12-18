import React from 'react';
import styled, {css} from 'styled-components';
import ProductItem from './ProductItem';
import doctors from './doctors.json';

const ProductBlock = styled.div`
    border-top:80px solid green;
    padding-top:80px; 
    .tabs { display:flex; justify-content:center; margin-bottom:50px }
    .contents { display:flex; flex-wrap:wrap } 
    }
`;

const List = styled.div`
    margin:0 50px; cursor:pointer;
    padding:10px 20px; background:#ddd; border-radius:10px;
    ${
        props => props.active && css`
             background:#333; color:#fff;
        `
    }
`;

const prdList = doctors;

// const prdList = [
//     { name:"김영식",
//       depart:"가정의학과",
//       about:"심뇌혈관질환1차예방,건강증진,항노화진료,생활습관병관리,청소년건강,비만,평생건강관리클리닉(회원제),암예방클리닉(회원제)",
//       photo:"images/doctor1.jpg" },
//     { name:"박혜순",
//       depart:"가정의학과",
//       about:"비만,고도비만,대사질환(고혈압,고지혈증,당뇨병,지방간),비만수술 전후치료",
//       photo:"images/doctor2.jpg" },
//     { name:"선우성",
//       depart:"가정의학과",
//       about:"생활습관병관리,건강검진 이상소견,맞춤건강검진,성인병,금연클리닉,평생건강관리클리닉(회원제),암예방클리닉(회원제)",
//       photo:"images/doctor3.jpg" },
//     { name:"손기영",
//       depart:"가정의학과,암병원,유방암센터",
//       about:"생활습관병관리,성인병,노인건강,암생존자 건강관리,건강증진(검진 소견 상담)",
//       photo:"images/doctor4.jpg" },
//     { name:"조홍준",
//       depart:"가정의학과",
//       about:"성인병관리,건강증진,건강검진 이상소견의 확진,금연클리닉,평생건강관리클리닉(회원제),암예방클리닉(회원제)",
//       photo:"images/doctor5.jpg" }
//   ]

const obj = [
    { id:0, title:"파트1", part:prdList.part1 },
    { id:1, title:"파트2", part:prdList.part2 }
]

const Productsection = ({activeTab, onSelect}) => {
    return (
        <ProductBlock>
            <div className="row">
                <div className="tabs">
                    {
                        obj.map( (data)=>(
                        <List key={data.id} active={ activeTab === data.id } onClick={ ()=>onSelect(data.id) }>{data.title}</List>
                        ) )
                    }
                </div> 
                <div className="contents">
                    {
                       obj[activeTab].part.map( (data,index)=>(<ProductItem key={index} name={data.name} depart={data.depart} about={data.about} photo={data.photo} />) )
                    }
               </div>
            </div>
        </ProductBlock>
    );
};

export default Productsection;