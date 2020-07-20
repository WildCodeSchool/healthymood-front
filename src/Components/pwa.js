import '../Styles/Pwa.css';
import React, { useEffect, useState } from 'react';

let deferredPrompt;

const Pwa = () => {
  const [shouldShowInstallBanner, setShouldShowInstallBanner] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setShouldShowInstallBanner(true);
    });

    return () => {
      window.removeEventListener('beforeinstallPrompt', listener);
    };
  }, []);

  useEffect(() => {
    const listener = window.addEventListener('appinstalled', () => {
      // Hide the banner if the app has been installed
      setShouldShowInstallBanner(false);
    });

    return () => {
      window.removeEventListener('appinstalled', listener);
    };
  }, []);

  const showInstallPrompt = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    }
  };

  const hiddenInstallBanner = () => {
    setHidden(true);
  };

  return (
    <>
      {shouldShowInstallBanner && (
        <div className={hidden ? 'install-banner hidden' : 'install-banner'} onClick={showInstallPrompt}>
          <div className='install-validate'>
            <span className='install-icon' />
            <p>Installer</p>
          </div>
          <p className='close-install' onClick={hiddenInstallBanner}>Non merci</p>
        </div>
      )}
    </>
  );
};

export default Pwa;
