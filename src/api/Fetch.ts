import { ServerUrl } from '../config';

export async function testGetRequest() {
    const response = await fetch(`${ServerUrl}?myarg1=yar1&myarg2=yar2`);
    const result = await response.json();
    console.log(result);
}

export async function testPostRequest() {
    const body = {
        helloArg: "hello",
        yoArg: "yo"
    };

    const response = await fetch(ServerUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const result = await response.json();
    console.log(result);
}