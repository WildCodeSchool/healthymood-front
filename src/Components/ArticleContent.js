import React from 'react';
import '../Styles/ArticleContent.css';
import authorImage from '../Images/author.png';
import publishedImage from '../Images/published.png';
import SocialMedia from './SocialMediaArticle';

class ArticleContent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      a: this.props.a
    };
  }

  createArticle (props) {
    return { __html: this.props.a.content };
  }

  render () {
    return (
      <>
        <div className='article-container'>
          <div className='article-presentation'>
            <div
              className='banniere'
              style={{ backgroundImage: `url(${this.state.a.image})` }}
            />
            <div className='article-details'>
              <div className='author-container'>
                <span
                  className='picto-container'
                  style={{ backgroundImage: `url(${authorImage})` }}
                />
                <p>{this.state.a.author.username}</p>
              </div>
              <div className='published-container'>
                <span
                  className='picto-container'
                  style={{ backgroundImage: `url(${publishedImage})` }}
                />
                {this.state.a.updated_at !== '' && null ? (
                  <p>{this.props.a.updated_at.substr(0, 10)}</p>
                ) : (
                  <p>{this.props.a.created_at.substr(0, 10)}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={this.createArticle()}
          className='article-content'
        />
        <div className='social-media-container'>
          <h5 className=''>Merci de partager : </h5>
          <SocialMedia />
        </div>
      </>
    );
  }
}

export default ArticleContent;
