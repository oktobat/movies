import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NewsItemBlock = styled.div`
    display:flex; margin-bottom:20px; width:50%; max-height:110px; overflow:hidden;
    .thumbnail { width:30%;
        padding-right:20px;
        img { width:100% }
    }
    .contents {
        width:70%;
    }
`;

const NewsItem = ({article}) => {
    const {title, description, urlToImage } = article;

    return (
        <NewsItemBlock>
            { urlToImage && (
                <div className="thumbnail">
                    <Link to={{ pathname:'/news/detail', state:{urlToImage, title, description}}}>
                        <img src={urlToImage} alt={title} />
                    </Link>
                </div>
                )
            }
            { description && (
                <div className="contents">
                    <h2>
                        {title}
                    </h2>
                    <p>{description.slice(0,80)}...</p>
                </div>)
            }
        </NewsItemBlock>
    );
};

export default NewsItem;