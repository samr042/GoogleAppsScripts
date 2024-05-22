function calculateStaffel(n) {
  /*
  * Graduated calculation of cost / Sliding scale / Staffel
  *
  * This function calculates the cost of
  * an ABN Zelf Beleggen Basis account
  * https://www.abnamro.nl/nl/prive/beleggen/beleggingsvormen/zelf-beleggen/index.html
  */

  var firstBracket  = .002;
  var secondBracket = .0012;
  var thirdBracket  = .0006;

  // Calculate first bracket: .2% over first 100,000
  if (n>100000) {
    var totValue = 100000*firstBracket;

    // Calculate second bracket: .12% over value between 100,000-400,000
    if (n<400000) {
      totValue += (n-100000)*secondBracket;
    } else {
      totValue += 300000*secondBracket;

      // Calculate third bracket: .06% over value over 400,000
      if (n>400000) {
        totValue += (n-400000)*thirdBracket
      };
    };
  } else {
    var totValue = n*firstBracket;
  };

  return parseFloat(totValue)
}