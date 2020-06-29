import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SmallArticle from './SmallArticle';
import '../Styles/HomeArticles.css';

export default function HomeArticles () {
  const [lastArticles, setLastArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(res => {
        const articles = res.data.data;
        console.log(articles);
        setLastArticles(articles);
      });
  }, []);

  return (
    <div className='homepage-articles-container'>
      {lastArticles.map(article => {
        return (
          <SmallArticle a={article} />
        );
      })}
    </div>
  );
}
