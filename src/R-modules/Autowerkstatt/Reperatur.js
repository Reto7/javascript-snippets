/**
 * Created by user on 17.04.2017.
 */
'use strict'
export default class {
    constructor(arbeiten){
        this.arbeiten = arbeiten || []
    }
    add(item){
        this.arbeiten.push(item)
    }
    remove(item){
        let itemIdx = this.arbeiten.indexOf(item)
        if(itemIdx > -1){
            this.arbeiten.splice(itemIdx, 1)
        }
    }
    findAll(matcher){
        return this.arbeiten.filter(matcher)
    }
}