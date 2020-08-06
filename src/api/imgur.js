https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

import qs from 'qs';

const CLIENT_ID = 'c74ae4c9e5f9d1f';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type:'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringfy(querystring)}`
    }
}
