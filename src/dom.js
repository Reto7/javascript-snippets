'use strict'

// Elemente erstellen

// Füge ein Link Element ans Ende von body
let link = document.createElement('a')
link.setAttribute('href', 'https://www.ibw.ch')
link.innerText = 'Goto IBW'

document.body.appendChild(link)


// Elemente suchen
// Via CSS Selektor
// Finde erstes Link-Element
let firstLink = document.querySelector('a')
// Finde alle Link-Elemente
let allLinks = document.querySelectorAll('a')
// allLinks ist eine NodeList, kein Array
// Mache Array aus NodeList
let arr = Array.apply(null, allLinks)
let arr = [...allLinks]


// Events
for(link of allLinks){
    link.addEventListener('click', function onClick(ev){
        // this ist das DOM Element
        // ev das Event Object
    })
}