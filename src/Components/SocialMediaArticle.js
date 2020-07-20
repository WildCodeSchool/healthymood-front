import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';
import '../Styles/SocialMedia.css';

const SocialMedia = (props) => {
  const shareUrl = `${window.location.origin}/article/${props.id}`;
  const title = `${props.slug}`;
  return (
    <div className='social-media-container'>
      <div className='button-container'>
        <div className='sharebutton-icon'>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} />
          </FacebookShareButton>
        </div>
        <div className='sharebutton-icon'>
          <PinterestShareButton url={shareUrl}>
            <PinterestIcon size={32} />
          </PinterestShareButton>
        </div>
        <div className='sharebutton-icon'>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} />
          </LinkedinShareButton>
        </div>
        <div className='sharebutton-icon'>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={32} />
          </TwitterShareButton>
        </div>
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body='body'
          className='sharebutton-icon'
        >
          <EmailIcon size={32} />
        </EmailShareButton>

      </div>
    </div>
  );
};

export default SocialMedia;
