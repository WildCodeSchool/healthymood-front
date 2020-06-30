import React from 'react';
import '../Styles/Pwa.css';

class Pwa extends React.Component {
  constructor () {
    super();
    this.state = { deferredPrompt: null };
    this.handleOnInstallBtnClick = this.handleOnInstallBtnClick.bind(this);
  }

  componentDidMount () {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.setState({ deferredPrompt: e });
    });

    /* window.alert(this.handleOnInstallBtnClick()); */
  }

  handleOnInstallBtnClick () {
    this.setState({
      showButton: false
    });
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.deferredPrompt = null;
    });
  }

  render () {
    return (
      <div>
        {/* <button className="add-install" onClick={this.handleOnInstallBtnClick}>
          install
        </button> */}
      </div>
    );
  }
}

export default Pwa;
