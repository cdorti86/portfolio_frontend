var ES1 = !!(Array.prototype && Array.prototype.join),
ES3 = !!(Array.protype && Array.prototype.pop),
ES51 = (function() {'use stric' ; return !this; })(),
ES6 = !!Object.assign,
ES7 = !!(Array.prototype && Array.prototype.includes);
    /*
    var ES51 = Modernirz.es5,
        ES6 = Modernizr.es6objetv
        ES7 = false;

if(ES7) {
    console.log('Tu navegador contiene características mínimas de ECMAScript 7');
} else if(ES6) {
    console.log('Tu navegador contiene características mínimas de ECMAScript 6');
} else if(ES51) {
    console.log('Tu navegador contiene características mínimas de ECMAScript 5.1');
} else if(ES3) {
    console.log('Tu navegador contiene características mínimas de ECMAScript 3');
} else if(ES1) {
    console.log('Tu navegador contiene características mínimas de ECMAScript 1');
} else {
    console.log('Tu navegador contiene características mínimas de ECMAScript Desconocidas');
}