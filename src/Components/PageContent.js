import React from 'react';
import '../Styles/ArticleContent.css';

function PageContent ({ page }) {
  function createPage () {
    return { __html: page.content };
  }
  return (
    <div className='article-container'>
      <div dangerouslySetInnerHTML={createPage()} className='article-content' />
    </div>

  );
}

export default PageContent;
