'use strict'
/**
 * Created by user on 07.04.2017.
 */

let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[1])

cars.push("VW")  // push wie in java add

console.log(cars.length)

console.log("Cars: " + cars.toString())

// -----------------------------------

let persons = []
persons.push(
    {
        name: 'Hendrick'
    },
    {
        name: 'Marc'
    },
    {
        name: 'Anna'
    }
)

console.log("Persons : " +persons.toString())
console.log("Persons : " +persons[0].name)