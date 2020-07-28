import React from 'react';
import '../Styles/ArticleContent.css';
import authorImage from '../Images/author.png';
import publishedImage from '../Images/published.png';
import SocialMedia from './SocialMediaArticle';
import defaultBanner from '../Images/default-banner.jpg';

class ArticleContent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      a: this.props.a
    };
  }

  frenchDateFormat = () => {
    const a = this.props.a;
    const date = a.created_at.substr(0, 10);
    const month = date.substr(5, 2);
    const day = date.substr(8, 10);
    const year = date.substr(0, 4);
    return (`${day}-${month}-${year}`);
  }

  createArticle (props) {
    return { __html: this.props.a.content };
  }

  render () {
    const a = this.props.a;
    const date = a.created_at.substr(0, 10);
    const updateDate = a.updated_at && a.updated_at.substr(0, 10);
    return (

      <>
        <div className='article-container'>
          <div className='article-presentation'>
            <div
              className='banniere'
              style={
                this.state.a.image
                  ? { backgroundImage: `url('${this.state.a.image}')` }
                  : { backgroundImage: `url('${defaultBanner}')` }
              }
            />
            <div className='article-details'>
              <div className='author-container'>
                <span
                  className='picto-container'
                  style={{ backgroundImage: `url(${authorImage})` }}
                />
                <p>
                  {this.state.a.author
                    ? this.state.a.author.username
                    : 'non-renseigné'}
                </p>
              </div>
              <div className='published-container'>
                <span
                  className='picto-container'
                  style={{ backgroundImage: `url(${publishedImage})` }}
                />
                {this.state.a.updated_at !== '' && null ? (
                  <p>{this.frenchDateFormat(updateDate)}</p>
                ) : (
                  <p>{this.frenchDateFormat(date)}</p>
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
