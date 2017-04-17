'use strict'
export default class {
    constructor(writer){
        this.writer = writer
    }
    warn(msg){
        this.writer('WARNING: ' + msg)
    }
    log(msg){
        this.writer('LOG: ' + msg)
    }
}

export const PI=3.141592653