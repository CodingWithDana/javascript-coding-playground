// // function reverseString(str) {
// //     // split string into array of characters
// //     let chars = str.split("");
// //     // reverse that array
// //     let reverseArray = chars.reverse();
// //     let rev = reverseArray.join("");

// //     return rev;
// // }

// // // Print the reversed string
// // console.log(reverseString("hello"));

// function print_every_character(str) {
// 	for (let i = 0; i < str.length; i++) {   //length - 1 bc index is 0
// 		console.log(str[i]);
// 	}
// }
// // Call the function directly, no console.log required around it
// print_every_character("hello");

let array = [ 1,2,3,4] 
array.forEach(item => { 
    if (item === 2) {
        array.push(10);
    } 
    console.log(item);
});