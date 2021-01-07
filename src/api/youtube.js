import axios from 'axios';

const KEY = 'AIzaSyDbbkSB9MlMJY1E9ln2-1pLv2HMx9gGxOk';

/**
 * Create a pre configured axios url so we can just append parts to it.
 */
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        q: 'surfboards'
    }
});