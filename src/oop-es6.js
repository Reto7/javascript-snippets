'use strict'
class Auto{
    constructor(brand){
        this.brand = brand
        this.distance = 0
    }
    drive(distance){
        this.distance += distance
    }
    toString(){
        return `Ich bin ein ${this.brand} und schon ${this.distance}km gereist.`
    }
}
let a1 = new Auto('VW')
a1.drive(193)
console.log(a1.toString())


class ElektroAuto extends Auto{
    constructor(brand, batterieLeistung){
        super(brand)
        this.batterieLeistung = batterieLeistung
    }
    toString(){
        return super.toString() + ` Ich leiste zudem ${this.batterieLeistung} :)`
    }
}

let a2 = new ElektroAuto('Tesla', 174)
a2.drive(193)
console.log(a2.toString())