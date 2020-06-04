import React from 'react';
import ArticleContent from '../Components/ArticleContent';
import article1 from '../article1.json';
import '../Styles/Article.css';

function Article () {
  return (
    <div className='page-article'>
      <h1>{article1.title}</h1>
      <div className='article-content-container'>
        <ArticleContent />
      </div>
    </div>
  );
}

export default Article;
