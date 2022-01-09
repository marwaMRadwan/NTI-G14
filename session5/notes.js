// class X{
// d(){
//     this
// }
// }

// a = new X()
// a.d()



// if (frm) {
// //   let IDs = datacustom.length  //0 1 2
// //   start = 5000  //5000
// //   for (let i = 0; i < datacustom.length; i++) { //0 1 2
// //     start++ //5000 5001 5002
// //   }
// start = 5000+datacustom.length
//   frm.addEventListener('submit', function (e) {
//     e.preventDefault()

//     customerheads.forEach(head => {
//       if (head.isDefault) {
//         user[head.name] = start //5000 5001 5002
//       } else user[head.name] = this.elements[head.name][head.DataStore]
//     })
// window.replace('jh) =>index
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// function isOddNumber(number) {
//     return number % 2;
// }
// const oddNumbers = numbers.filter(isOddNumber);
// console.log(oddNumbers);
// const oddNumbers = numbers.filter(
//     (number)=> {
//         return number % 2;
//     }
// );
// 1  => 1
// 2 =>0
// 4=>0
// 7=>1

// odd = []
// for(i=0;i<numbers.length; i++){
//     if(numbers[i]%2) odd.push(numbers[i])
// }


// var arr = ["a", "b", "c", "d"];
// for (let i = 0; i < arr.length; i++) {  // i=0 ; i<4; i++
//   setTimeout(function() {
// console.log('Index: ' + i + ', element: ' + arr[i]); }, 
// 3000);
// }

// Solution1:
// var show = function(n){
// return function(){
//   console.log('Index: ' + n + ', element: ' + arr[n]);
// }
// }; 

// var arr = ["a", "b", "c", "d"]; 
// for (var i = 0; i < arr.length; i++) { setTimeout(show(i), 3000); }


// Solution2:

// var arr = ["a", "b", "c", "d"]; 
// for (var i = 0; i < arr.length; i++) {
// setTimeout(
//     ( function(i_local) { return function() { console.log('Index: ' + i + ', element: ' + arr[i]); } })(i), 3000);
// }

// Solution3:

// var arr = ["a", "b", "c", "d"]; 
// for (let i = 0; i < arr.length; i++) {
// setTimeout(function(){
// console.log('Index: ' + i + ', element: ' + arr[i]);
// }, 3000);
// }




// let x=5
// for(let x=2;;){

// }

// i=0  5 => b3d 5 da2y2 3edy
// i=1   5 
// i=2  5
// i=3  5
// i=4     5



