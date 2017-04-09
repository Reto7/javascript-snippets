var alben = [
    {
        titel: "Push the Sky Away",
        interpret: "Nick Cave",
        erscheinungsjahr: 2013
    },
    {
        titel: "No more shall we part",
        interpret: "Nick Cave",
        erscheinungsjahr: 2001
    },
    {
        titel: "Live from Mars",
        interpret: "Ben Harper",
        erscheinungsjahr: 2003
    },
    {
        titel: "The Will to Live",
        interpret: "Ben Harper",
        erscheinungsjahr: 1997
    }
];

//------------------------------------
// imperative programmierung
//------------------------------------
var vor2000 = [];
for(var i=0, l=alben.length; i<l; i++) {
    if(alben[i].erscheinungsjahr < 2000) {
        vor2000.push(alben[i]);
    }
}
console.log(vor2000);

//------------------------------------
//funktional: forEach
//------------------------------------
alben.forEach(function(interpret, index, alben) {
    console.log(interpret.titel);
});

// oder bei simplen array:
let phrase = "Please enter password:";
let phraseArray = [...phrase];
phraseArray.forEach(function(entry) {
    console.log(entry);
});

//------------------------------------
//funktional: filter
//------------------------------------
var vor2000 = alben.filter(function(album, index, alben) {
    return album.erscheinungsjahr < 2000;
});
console.log(vor2000);