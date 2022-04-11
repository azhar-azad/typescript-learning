var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
// for(let i = 0; i < sportsOne.length; i++) {
//   console.log(sportsOne[i]);
// }
// simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sportOne = sportsOne_1[_i];
    if (sportOne == "Cricket") {
        console.log(sportOne + " << My favourite");
    }
    else {
        console.log(sportOne);
    }
}
