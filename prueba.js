// la accion del operador (+)
console.log( 3 + "a") //"3a"
console.log( 3 + true ) // 4
console.log( true + 3 ) // 4
console.log( 3 + false ) // 3
console.log( false + 3 ) // 3
console.log( 3 + null ) // 3
console.log( null + 3 ) // 3
console.log( 3 + undefined ) // NaN
console.log( undefined + 3 ) // Nan
console.log( null + "a") // nulla
console.log( undefined + "a") // undefineda

// la accion del operador ( || )
console.log( 3 || true ) // 3
console.log( true || 3 ) // true
console.log( 3 || false ) // 3
console.log( false || 3 ) // 3
console.log( 3 || null ) // 3
console.log( null || 3 ) // 3
console.log (undefined || 3 ); // 3
console.log (undefined || undefined ); // undefined
console.log (undefined || null ); // null
console.log (undefined || null || 3 ); // 3
console.log (undefined || null || undefined ); // undefined

