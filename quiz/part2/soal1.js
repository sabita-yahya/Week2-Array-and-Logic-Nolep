// ## Soal 1
// ```js
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, 
dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  let reverse = "";

  for (let i = kata.length - 1; i >= 0; i--) {
    reverse += kata[i];
  }
  return reverse === kata;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
