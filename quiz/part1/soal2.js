// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// ```js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

// method splice
function dataHandling(input) {
    input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);
}

// method split
let arrayBulan = input[3].split("/");
if (arrayBulan[1] === '05') {
    console.log("Mei");
}

console.log(`["${arrayBulan[2]}", "${arrayBulan[0]}", "${arrayBulan[1]}"]`);

// method join
let stringBulan = arrayBulan.join('-');
console.log(stringBulan);

// method slice
let name = input[1].slice(0, 15);
console.log(name);

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */