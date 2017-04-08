'use strict'
/**
 * Created by user on 07.04.2017.
 */

// Mit Array Parameter
function createGreeting(names = ['Welt']){
    let finalNames = names.join(', ')
    return `Hallo ${finalNames}`
}
console.log(createGreeting(["Hans","Fritz"]))


function createGreeting2(...names){
    // names ist ein array
    if(names.length === 0) {
        names.push('Welt')
    }
    let finalNames = names.join(', ')
    return `Hallo ${finalNames}`
}
console.log(createGreeting(["Hans","Fritz"]))