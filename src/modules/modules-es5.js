'use strict'

// Namespacing
// Datei1
let ProjectX = ProjectX || {}
ProjectX.TodoList = ProjectX.TodoList || {}
ProjectX.TodoList.items = [
    {
        text: 'Einkaufen',
        done: false
    }
]

// Datei2
let ProjectX = ProjectX || {}
ProjectX.TodoList = ProjectX.TodoList || {}
ProjectX.TodoList.create = function(text){
    this.items.push({
        text,
        done: false
    })
}
ProjectX.TodoList.create('Abwaschen')

// IIFE
// loose module augmentation pattern
let TodoList = (function(modul){
    let items = []
    modul.create = function(text){
        items.push({ text: text, done: false})
    }
    modul.getItems = function(){
        return items;
    }
    return modul

})(TodoList || {})

TodoList.create('Einkaufen')
TodoList