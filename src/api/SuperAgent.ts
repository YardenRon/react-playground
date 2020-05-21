import { ServerUrl } from '../config';
import superagent from 'superagent';

export function testGetRequest() {
    superagent
        .get(ServerUrl)
        .query({ myarg1: "yar1" })
        .query({ myarg2: "yar2" })
        .then(res => console.log(res.text));
}

export function testPostRequest() {
    const body = {
        helloArg: "hello",
        yoArg: "yo"
    };

    superagent
        .post(ServerUrl)
        .send(body)
        .set('Accept', "application/json")
        .then(res => console.log(res.text));
}