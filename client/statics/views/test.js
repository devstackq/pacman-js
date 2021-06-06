'use strict';

export default class CommonWebWorker {
    constructor() {
        console.log("commonWebWorker invoked");
        this.onmessage = function(e) {
            this.postMessage((e.data === 'LOAD' ? 'Loading...' : 'Loading Error'));
        }
    }
}

// module.exports = CommonWebWorker;