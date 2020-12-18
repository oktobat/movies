import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const NewsSectionBlock = styled.div`
    .row { padding-top:80px; display:flex; flex-wrap:wrap; }
    .loadWrap { min-height:800px; text-align:center; line-height:800px;
        .loadicon { font-size:100px; 
            animation: loadspin infinite 5s linear;
        }
        @keyframes loadspin {
            from { transform: rotate(0deg); }
            to { transform: rotate(3turn); }
        }
    }
`;

const NewsSection = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    const getNews = async () => {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=11ba08dfbd7e4f3c83ac93b27aa1dcb7`);
        console.log(response);
        setArticles(response.data.articles);
        setLoading(true);
    }
    useEffect(
        () => {
            getNews()
        }, [category]
    )

    if (!loading) {
        return (
            <NewsSectionBlock>
                <div class="loadWrap">
                    <AiOutlineLoading3Quarters className="loadicon" /> 
                </div>
            </NewsSectionBlock>
            )
    } else {
        if (!articles) {
            return <NewsSectionBlock></NewsSectionBlock>;
        } else {
            return (
                <NewsSectionBlock>
                    <div className="row">
                        {
                            articles.map( (article) => ( <NewsItem key={article.url} article={article} /> ) )
                        }
                    </div>
                </NewsSectionBlock>
            );
        }
    }
};

export default NewsSection;