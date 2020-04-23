require('dotenv').config();

module.exports = {
  env: {
    TWITTER_API_TOKEN: process.env.TWITTER_API_TOKEN,
    TWITTER_LABS_ENABLED: true,
    TWITTER_LABS_EXPANSIONS: 'attachments.poll_ids',
    // Enabling this will break the app, don't.
    TWITTER_LOAD_WIDGETS: false,
  },
};
