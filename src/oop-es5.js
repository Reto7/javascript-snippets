'use strict'
// singleton
let validator = {
    valid: true,
    validate: function(input){
        this.valid = input.indexOf('test') !== -1
        return this.valid
    }
}
let r = validator.validate('buddha')
validator


// Konstruktor Funktion
function Auto(brand){
    this.distance = 0
    this.brand = brand

    // erstelle für jedes auto ein neues funktionsobjekt
    // => memory leak
    this.drive = function(distance){
        console.log('drive instance')
       this.distance += distance
    }
}

// Besser: erstelle die drive Funktion einmal im Prototyp Objekt,
// alle Instanzen von Auto verwenden dann diese Funktion
// Auto.prototype.drive = function(distance){
//     console.log('drive prototype')
//     this.distance += distance;
// }

let a1 = new Auto('Ford')
let a2 = new Auto('Tesla')
a1.drive(10)
a2.drive(340)


// Auto.prototype.drive = function(){
//     console.log('drive prototype overwrite')
// }

let a3 = new Auto('Tesla')
a3.drive(10)
a1.drive(10)

// Die Eigenschaft __proto__ zeigt auf das Prototyp-Objekt.
// Falls es keine prototype Definition gibt (Ctor.prototype.xy = ...)
// Zeigt es direkt auf eine Instanz von Object (Default Prototype eines Objektes)
console.log(a3.__proto__)

// Erstelle Objekt ohne Prototype
// => Sicherstellen, dass Lookup (z.B. einer Eigenschaft oder Methode) delegiert wird.
//    Nützlich wenn man ein Objekt erstellen will, welches z.B. als Hash-Map dient.
let empty = Object.create(null)
console.log(empty.__proto__)