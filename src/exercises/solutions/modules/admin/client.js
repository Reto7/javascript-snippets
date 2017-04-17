'use strict'
import {Person, Store} from './admin.module'

let p1 = new Person('Agatha', 'Kurnikova')

let store = new Store([])

store.add(p1)
store.add({
    name: 'Hans', vorname: 'Meier'
})

store.remove(p1)

let pWithHa = store.findAll((p) => p.name.startsWith('Ha'))
pWithHa

store.remove(pWithHa.pop())

store