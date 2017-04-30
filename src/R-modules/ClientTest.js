/**
 * Created by user on 17.04.2017.
 */
'use strict'


// zur Laufzeit : SyntaxError: Unexpected token import  ??  ES6 Problem...
// import durch gulp browserfiy aufloesen!
import {Auto, Reperatur} from './Autowerkstatt/AutowerkstattPublic'

let meinBmw = new Auto("BMW",180,"rot")

let arbeiten = new arbeiten([])

arbeiten.add(meinBmw)
arbeiten.add({
    modell: "VW Golf", hoechstgeschwindigkeit: 240, farbe:"rot-blau"
})

let autoSuche = arbeiten.findAll((p) => p.name.startsWith('ro'))


// arbeiten.remove(meinBmw)
// arbeiten.remove(pWithHa.pop())
