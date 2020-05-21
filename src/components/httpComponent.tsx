import * as XHR from '../api/XHR';
import * as JQuery from '../api/JQuery';
import * as Qwest from '../api/Qwest';
import * as SuperAgent from '../api/SuperAgent';
import * as Axios from '../api/Axios';
import * as Fetch from '../api/Fetch';
import React from 'react';

const HttpComponent = () => {
    // XHR.testGetRequest();
    // XHR.testPostRequest();
    // JQuery.testGetRequest();
    // JQuery.testPostRequest();
    // Qwest.testGetRequest();
    // Qwest.testPostRequest();
    // SuperAgent.testGetRequest();
    // SuperAgent.testPostRequest();
    // Axios.testGetRequest();
    // Axios.testPostRequest();
    Fetch.testGetRequest();
    Fetch.testPostRequest();

    return (
        <span> Look for console logs </span>
    );
};

export default HttpComponent;