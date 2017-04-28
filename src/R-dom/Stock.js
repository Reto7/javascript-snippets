'use strict'
/**
 * Created by user on 28.04.2017.
 */

function refreshStockQuotes () {
    let s1 = new Stock("NESN");
    console.log(s1);

    var stockName1Element = document.getElementById("stockName1").childNodes[0];
    console.log("stockName1Element.nodeValue:"+stockName1Element.nodeValue);
    stockName1Element.nodeValue = s1.getStockName();

    var stockQuote1Element = document.getElementById("stockQuote1").childNodes[0];
    console.log("stockQuote1Element.nodeValue:"+stockQuote1Element.nodeValue);
    stockQuote1Element.nodeValue = s1.getStockValue();

    let s2 = new Stock("GOOGL");
    console.log(s2);

    var stockName2Element = document.getElementById("stockName2").childNodes[0];
    console.log("stockName2Element.nodeValue:"+stockName2Element.nodeValue);
    stockName2Element.nodeValue = s2.getStockName();

    var stockQuote2Element = document.getElementById("stockQuote2").childNodes[0];
    console.log("stockQuote2Element.nodeValue:"+stockQuote2Element.nodeValue);
    stockQuote2Element.nodeValue = s2.getStockValue();
}

class Stock{

    constructor(stockName){
        console.log("running Stock.js")
        this.stockName = stockName
        //this.stockValue = stockValue
    }

    setStockName(stockName){
        this.stockName = stockName
    }

    setStockValue(stockValue){
        this.stockValue = stockValue
    }

    getStockName() {
        return this.stockName;
    }

    getStockValue() {
        // Gibt eine Zufallszahl zwischen min (inklusive) und max (exklusive) zurück
        // Die Verwendung von Math.round() erzeugt keine gleichmäßige Verteilung!
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        this.stockValue = getRandomInt(1,888);  // fake
        return this.stockValue;
    }

    toString(){
        return "Stock; ${this.stockName}, Value: ${this.stockValue}";
    }
}
