//Arrays have toString implemented so it converts it to string whenever necessary
// == does typecast before check
// === doesn't typecast

console.log([] == 0); // '',0 => 0,0
console.log([] == ''); // '',''
console.log([] == '0');
console.log([] == []);
console.log([] == {});
console.log([] == true);
console.log([] == false); // '',false => false,false
console.log([]);
console.log([1, 2]);
console.log([1, 2] + 3); // '1,2'+3
console.log([1] + [1] - [1]); //'1'+'1'-1 => '11'-1 => 10
