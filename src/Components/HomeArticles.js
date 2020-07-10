import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SmallArticle from './SmallArticle';
import '../Styles/HomeArticles.css';

export default function HomeArticles () {
  const [lastArticles, setLastArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/articles?per_page=4&sort_by=created_at&sort_order=desc')
      .then(res => {
        const articles = res.data.data;
        console.log(articles);
        setLastArticles(articles);
      });
  }, []);

  return (
    <>
      <div className='homepage-articles-container'>
        {lastArticles.map(article => {
          return (
            <SmallArticle key={article.slug} a={article} />
          );
        })}
      </div>
      <Link to='/conseils-astuces' className='link-article'>
        <button className='more'><p>Plus d'articles</p></button>
      </Link>
    </>
  );
}
