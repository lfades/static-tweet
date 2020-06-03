import cheerio from 'cheerio';

function getTweetContent($) {
  const container = $('.EmbeddedTweet-tweetContainer');

  if (!container.length) return;

  const meta = {};
  const content = { meta };

  // This is the blockquote with the tweet
  const subject = container.find('[data-scribe="section:subject"]');

  // Tweet header with the author info
  const header = subject.children('.Tweet-header');
  const avatar = header.find('[data-scribe="element:avatar"]');
  const author = header.find('[data-scribe="component:author"]');
  const name = author.find('[data-scribe="element:name"]');
  const screenName = author.find('[data-scribe="element:screen_name"]');

  // Tweet body
  const tweet = subject.children('[data-scribe="component:tweet"]');
  const tweetContent = tweet.children('p');
  const tweetInfo = tweet.children('.TweetInfo');
  const fullTimestamp = tweetInfo.find('[data-scribe="element:full_timestamp"]');
  const heartCount = tweetInfo.find('[data-scribe="element:heart_count"]');

  // Tweet footer
  const callToAction = container.children('[data-scribe="section:cta component:news"]');
  const profileText = callToAction.children('[data-scribe="element:profile_text"]');
  const conversationText = callToAction.children('[data-scribe="element:conversation_text"]');

  meta.id = subject.attr('data-tweet-id');
  meta.avatar = {
    normal: avatar.attr('data-src-1x'),
  };
  meta.name = name.text();
  meta.username = screenName.text().substring(1); // Omit the initial @
  meta.createdAt = new Date(fullTimestamp.attr('data-datetime')).getTime();
  meta.heartCount = heartCount.text();
  meta.ctaType = profileText.length ? 'profile' : 'conversation';

  if (conversationText.length) {
    // Get the formatted count and skip the rest
    meta.ctaCount = conversationText.text().match(/^[^\s]+/)[0];
  }

  content.html = tweetContent.html();

  return content;
}

export function getTweetData(html) {
  const $ = cheerio.load(html, {
    decodeEntities: false,
    xmlMode: false,
  });
  const tweetContent = getTweetContent($);

  console.log('DATA', tweetContent);

  if (!tweetContent) return;

  tweetContent.meta.mainTweet = true;

  return tweetContent;
}
