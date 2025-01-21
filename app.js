import Usercentrics from '@usercentrics/cmp-web-sdk';

(async () => {
  try {
    // Initialize Usercentrics SDK
    const usercentrics = await Usercentrics.initialize({
      settingsId: '59ALCK1up-Knfu', // Replace with your Usercentrics Settings ID
    });

    console.log('Usercentrics SDK initialized:', usercentrics);

    // Event listener to show the consent banner
    document.getElementById('show-banner').addEventListener('click', () => {
      usercentrics.showFirstLayer();
    });

    // Event listener to log current consents
    document.getElementById('log-consents').addEventListener('click', () => {
      const consents = usercentrics.getConsents();
      console.log('Current Consents:', consents);
    });
  } catch (error) {
    console.error('Error initializing Usercentrics SDK:', error);
  }
})();
