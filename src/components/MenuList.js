import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import styled, {css} from 'styled-components';

const MenuListBlock = styled.div`
    .tabs { display:flex; justify-content:center; }
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
const obj = [
    { id:0, title:"탭메뉴1", tabCont:<First /> },
    { id:1, title:"탭메뉴2", tabCont:<Second /> },
    { id:2, title:"탭메뉴3", tabCont:<Third /> }
]

const MenuList = ({activeTab, onSelect}) => {

    return (
        <MenuListBlock>
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
                        obj[activeTab].tabCont
                    }
                </div>
            </div>
        </MenuListBlock>
    );
};

export default MenuList;