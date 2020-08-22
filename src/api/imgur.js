import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'c74ae4c9e5f9d1f';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        //https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
        const querystring = {


            client_id: CLIENT_ID,
            response_type:'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    },
    fetchImages(token) {
        //https://api.imgur.com/3/account/me/images
        //--header 'Authorization: Bearer {{accessToken}}'


        return axios.get(`${ROOT_URL}/3/account/me/images`, {headers:{
            Authorization:`Bearer ${token}`
        }})
        

    }
}
