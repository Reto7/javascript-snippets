'use strict'
export default class {
    constructor(items){
        this.items = items || []
    }
    add(item){
        this.items.push(item)
    }
    remove(item){
        let itemIdx = this.items.indexOf(item)
        if(itemIdx > -1){
            this.items.splice(itemIdx, 1)
        }
    }
    findAll(matcher){
        return this.items.filter(matcher)
    }
}