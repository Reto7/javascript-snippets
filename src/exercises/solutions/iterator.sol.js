'use strict'
// Variante 1
function Reverse(arr){
    this[Symbol.iterator] = ()=>{
        let idx = arr.length
        return {
            next(){
                return {
                    done: --idx < 0,
                    value: arr[idx]
                }
            }
        }
    }
}

// Variante 2
// Array implementiert ebenfalls das iterator Protokoll.
// Nachdem der original Array mit reverse gedreht wurde, kann man dessen Iterator retournieren.
// function Reverse(arr){
//     return arr.reverse()[Symbol.iterator]()
// }

for(let x of new Reverse([1,2,3])){
    console.log(x)
}