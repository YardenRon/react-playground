import { ServerUrl } from '../config';
import axios from 'axios';

export function testGetRequest() {
    axios.get(`${ServerUrl}?myarg1=yar1&myarg2=yar2`)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
}

export function testPostRequest() {
    const body = {
        helloArg: "hello",
        yoArg: "yo"
    };

    axios.post(ServerUrl, body)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
}