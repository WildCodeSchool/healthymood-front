import React, { useState, useEffect } from 'react';
import SmallArticle from '../Components/SmallArticle';
import AllArticles from '../allArticles.json';
import '../Styles/ConseilsAstuces.css';
import API from '../Services/Api';
import SearchArticles from '../Components/SearchArticles';


export default function ConseilsAstuces(props) {
    const [articles, setArticles] = useState([]);
    const [filter, setFilter] = useState(['']);

    function getCurrentFilter() {
        setFilter(props.filter);
    }

    useEffect(() => {
    })

    return (
        <div className='conseils-astuces-container'>
            <SearchArticles history={props.history} />
            <div className='all-articles-container'>
                <div className='articles-page-container'>
                    {AllArticles.results.filter(article => article.title.includes(filter[0])).map(a => {
                        return (
                            <SmallArticle a={a} key={a.name} currentFilter={filter} getCurrentFilter={getCurrentFilter} />

                        );
                    })}
                </div>
            </div>
        </div>
    )
}