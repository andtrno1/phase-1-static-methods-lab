class Formatter {
  //add static methods here
  static capitalize(string){
    let cap = string.charAt(0).toUpperCase()
    return cap
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titlelize(string){
    let exeptions = ['a' , 'an', 'but', 'of', 'for', 'at', 'by', 'from']
    let array = [];
    let sentence = string.split(" ");
    for ( let n = 0; n <sentence.length; n++ ) {
      if ( n == 0 ) {
        array.push( this.capitalize( sentence[n] ) )
      } else {
        if (exeptions.includes( sentence[n] ) ) {
          array.push( sentence[ n ] )
        } else {
          array.push( this.capitalize( sentence[n] ) )
        }
      }

    }
    return array.join( " " );
  }
}
