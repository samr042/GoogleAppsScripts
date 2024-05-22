function calculateStaffel(n) {
  /*
  * Graduated calculation of cost / Sliding scale / Staffel
  *
  * This function calculates the cost of
  * an ABN Zelf Beleggen Basis account
  * https://www.abnamro.nl/nl/prive/beleggen/beleggingsvormen/zelf-beleggen/index.html
  */

  // Brackets
  var firstBracket  = 100000; // €100,000
  var topBracket = 400000; // €400,000
  var middleBracket = topBracket - firstBracket; // €300,000

  // Cost brackets as  decimal values
  var firstBracketCost  = .002;  // .20%
  var middleBracketCost = .0012; // .12%
  var topBracketCost  = .0006; // .06%

  if (n>firstBracket) {
    // Calculate first bracket: .2% over first €100,000
    var totValue = firstBracket*firstBracketCost;

    // Calculate second bracket: .12% over value between €100,000-€400,000
    if (n<topBracket) {
      totValue += (n-firstBracket)*middleBracketCost;
    } else {
      totValue += middleBracket*middleBracketCost;

      // Calculate third bracket: .06% over value over €400,000
      if (n>topBracket) {
        totValue += (n-topBracket)*topBracketCost
      };
    };
  } else {
    // Calculate first bracket: .2% over below €100,000
    var totValue = n*firstBracketCost;
  };

  return parseFloat(totValue)
}