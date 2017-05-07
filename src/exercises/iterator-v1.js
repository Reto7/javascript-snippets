// 1
// Implementiere einen Array Iterator, der einen Array rückwärts interiert.
// Versuche zwei Varianten zu finden.
let meinArray = ['a','b','c'];
console.log(meinArray)

// 1-v1
console.log('-1-v1-----------------------')
function reverseIterator1(arr){
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
//
// NEIN so gehts nicht:
// console.log(new reverseIterator1(meinArray))
// SO GEHTS:
// Statische factory Methode, um nicht new ReverseIterator… verwenden zu müssen.
// Factory Methoden, wie .create, gelten als bessere Praxis, als new.
reverseIterator1.create = (arr)=>{
    return new reverseIterator1(arr)
}
//console.log(reverseIterator1.create(meinArray))
for(let x of reverseIterator1.create(meinArray)){
    console.log(x)
}





// 1-v2
console.log('-1-v2-----------------------')
function reverseIterator2(arr) {
    return arr.reverse();
}
console.log(reverseIterator2(meinArray))






// 2 
// Schreibe eine Funktion forFun, welche
// - ein Objekt welches Symbol.iterator implementiert
// - und eine callback Funktion
// entgegen nimmt.
// Iteriere über das iterable Objekt und rufe den Callback für jeden Wert auf, 
// solange bis alle Elemente iteriert sind.
//
console.log('-2-v1-----------------------')
function forFun(iteratable, forEach){
    let it = iteratable[Symbol.iterator](),
        item,
        idx = 0
    while((item = it.next()).done == false){
        forEach(item.value, idx++)
    }
}
forFun(new reverseIterator1([1,2,3]), console.log)  // TODO Bahnhof.... console.log ist die callback methode... ?