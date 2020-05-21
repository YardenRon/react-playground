import { ServerUrl } from '../config';
import qwest from 'qwest';

export function testGetRequest() {
    qwest.get(`${ServerUrl}?myarg1=yar1&myarg2=yar2`, null, { cache: true })
    .then((xhr, response) => console.log(response))
    .catch((e, xhr, response) => console.error('qwest get request failed'));
}

export function testPostRequest() {
    const body = {
        helloArg: "hello",
        yoArg: "yo"
    };

    qwest.post(ServerUrl, body, { cache: true, dataType: "json" ,headers: { "Content-Type": "application/json" } })
    .then((xhr, response) => console.log(response))
    .catch((e, xhr, response) => console.error('qwest post request failed'));
}