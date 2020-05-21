import { ServerUrl } from '../config';

export function testGetRequest() {
    const request = new XMLHttpRequest();
    request.open('GET', `${ServerUrl}?myarg1=yar1&myarg2=yar2`);

    /* The onreadystatechange property specifies a function to be
       executed every time the status of the XMLHttpRequest changes */
    request.onreadystatechange = function() {
        console.log("State: " + this.readyState);
        if (this.readyState === 4 && this.status === 200) {
            console.log(request.responseText);
        }
    };

    request.send();
}

export function testPostRequest() {
    const request = new XMLHttpRequest();
    request.open('POST', ServerUrl);
    
    //Send the proper header information along with the request
    request.setRequestHeader("Content-Type", "application/json");

    request.onreadystatechange = function() {
        console.log("State: " + this.readyState);
        if (this.readyState === 4 && this.status === 200) {
            console.log(request.responseText);
        }
    };

    const body = {
        helloArg: "hello",
        yoArg: "yo"
    };
    request.send(JSON.stringify(body));
}

/*
XMLHttpRequest.readyState:

Value	State	            Description
0	    UNSENT	            Client has been created. open() not called yet.
1	    OPENED	            open() has been called.
2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	    LOADING             Downloading; responseText holds partial data.
4	    DONE	            The operation is complete.
*/