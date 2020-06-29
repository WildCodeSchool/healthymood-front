import React from 'react';
import ArticleContent from '../Components/ArticleContent';
import allArticles from '../allArticles.json';
import '../Styles/Article.css';

function Article (props) {
  const params = props.match.params;

  return (
    <div className='page-article'>
      {allArticles.filter(article => article.slug === params).map(a => {
        return (
          <>
            <h1>{a.title}</h1>
            <div className='article-content-container'>
              <ArticleContent history={props.history} currentArticle={a} />
            </div>
          </>
        );
      })}

    </div>
  );
}

export default Article;
