import React from 'react';
import '../Styles/Pwa.css';

let deferredPrompt;

class Pwa extends React.Component {
  constructor () {
    super();
    this.state = {};
    this.handleOnInstallBtnClick = this.handleOnInstallBtnClick.bind(this);
  }

  componentDidMount () {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });
    /* window.alert(this.handleOnInstallBtnClick()); */
  }

  handleOnInstallBtnClick () {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  }

  render () {
    return (
      <div>
        <button className='add-install' onClick={this.handleOnInstallBtnClick}>
          install
        </button>
      </div>
    );
  }
}

export default Pwa;
