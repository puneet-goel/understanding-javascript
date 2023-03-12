//object have toString implemented which returns [object Object]
// == does typecast before check
// === doesn't typecast

console.log({} == 0);
console.log({} == '');
console.log({} == '0');
console.log({} == []);
console.log({} == {});
console.log({} == true);
console.log({} == false);
console.log({});
console.log({ hi: 1 } + 3); // '[object Object]'+3
