import axios from 'axios';
import crypto from 'crypto';
import OAuth from 'oauth-1.0a';

const oauth = OAuth({
  consumer: {
    key: process.env.CONSUMER_KEY,
    secret: process.env.CONSUMER_SECRET,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto
      .createHmac('sha1', key)
      .update(base_string)
      .digest('base64');
  },
});

const requestData = {
  url:
    'https://api.twitter.com/1.1/collections/entries.json?id=custom-1079370365640544256&tweet_mode=extended',
  method: 'GET',
};
const token = {
  key: process.env.ACCESS_TOKEN,
  secret: process.env.TOKEN_SECRET,
};
export const twitterFeedController = async (req, res) => {
  let authHeader = oauth.toHeader(oauth.authorize(requestData, token));
  await axios
    .get(requestData.url, {
      headers: authHeader,
    })
    .then(({ data }) => {
      const tweets = data.objects.tweets;
      const users = data.objects.users;
      const response = [];
      for (const key in tweets) {
        if (tweets.hasOwnProperty(key)) {
          let tweet = tweets[key];
          let regex = /https:\/\/t\.co\/.*/g;
          let text = tweet.full_text.replace(regex, '');
          let src = './images/defaultTweet.jpg';
          if (tweet.entities.media) {
            src = tweet.entities.media[0].media_url;
          }
          response.push({
            id: tweet.id,
            text: text,
            user: users[tweet.user.id_str].screen_name,
            src: src,
          });
        }
      }
      return res.json(response);
    })
    .catch(res => {
      console.log(res);
    });
};
