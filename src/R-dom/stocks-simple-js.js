'use strict'
/**
 * Created by user on 28.04.2017.
 */
function refreshStockQuotes () {
    var stockQuote1Element = document.getElementById("stockQuote1").childNodes[0]; //Schritt 1
    var stockQuote1WertOld = stockQuote1Element.nodeValue;
    var stockQuote1WertNew = getStockQuote();
    stockQuote1Element.nodeValue = stockQuote1WertNew ;

    var stockQuote2Element = document.getElementById("stockQuote2").childNodes[0]; //Schritt 1
    var stockQuote2WertOld = stockQuote1Element.nodeValue;
    var stockQuote2WertNew = getStockQuote();
    stockQuote2Element.nodeValue = stockQuote2WertNew ;
}

function getStockQuote(){
    // random zu Testzwecken
    return getRandomInt(1,888);
}

// Gibt eine Zufallszahl zwischen min (inklusive) und max (exklusive) zurück
// Die Verwendung von Math.round() erzeugt keine gleichmäßige Verteilung!
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}