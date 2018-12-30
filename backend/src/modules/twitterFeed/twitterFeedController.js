import axios from 'axios'
import crypto from 'crypto';
import OAuth from 'oauth-1.0a';

const oauth = OAuth({
    consumer: { key: process.env.CONSUMER_KEY, secret: process.env.CONSUMER_SECRET},
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64');
    }
  });

const requestData = {
    url: 'https://api.twitter.com/1.1/collections/entries.json?id=custom-539487832448843776',
    method: 'GET'
}
const token  = {
    key: process.env.ACCESS_TOKEN,
    secret: process.env.TOKEN_SECRET
}
export const twitterFeedController = async (req, res) => {
    let authHeader = oauth.toHeader(oauth.authorize(requestData, token));
    await axios.get(requestData.url, {
        headers: authHeader
    }).then(({data}) => {
        console.log(data);
        return res.json(data)
    }).catch((res) => {console.log(res)})
}