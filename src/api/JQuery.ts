import { ServerUrl } from '../config';
import $ from 'jquery';

export function testGetRequest() {
    $.ajax({
        url: `${ServerUrl}?myarg1=yar1&myarg2=yar2`
    })
    .done(data => console.log(data))
    .fail(() => console.error('jquery get request failed'))
}

export function testPostRequest() {
    const body = {
        helloArg: "hello",
        yoArg: "yo"
    };

    $.ajax({
        type: "POST",
        url: ServerUrl,
        data: JSON.stringify(body),
        contentType: "application/json",
        success: (res) => console.log(res),
        error: () => console.error('jquery post request failed')
    })
}