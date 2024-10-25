
console.log(" Q.1 ========== WAP To Print Elements Array =================");

function PrintNumberOfElements(arr) {
    console.log(`Number of Elements In Array:`, arr.length);
}
let arr = [1,2,3,4,5,6];
PrintNumberOfElements(arr);

console.log(" Q.2 ========== WAP To Print Sum Of All Elements Array =================");

function calculateSum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
       sum = sum + arr[index];
    }
    return sum
}
let arr1 = [1,2,3,4,5,6];
console.log("Sum of all the items in the Array:", calculateSum(arr1));
 
console.log(" Q.3 ========== WAP To Print Right Rotate All Elements Array =================");

function rightRotateArray(arr) {
    if (arr.length == 0) {
        return arr;
    }
    let LastElement = arr.pop();
    arr.unshift(LastElement);
    return arr;
}
let arr2 = [1,2,3,4,5,6];
console.log("Original Array:",arr2);
let rotatedArray = rightRotateArray(arr2);
console.log("Array After Right Rotation",rotatedArray);

console.log(" Q.4 ========== WAP To Sort Ascending order Elements Array =================");

function sortArrayAscending(arr) {
    return arr.slice().sort(function (a,b) {
        return a - b;
    });
}
let arr3 = [4,8,5,3,2,7,1,9,3];
console.log("Original Array:", arr3);

let sortArray = sortArrayAscending(arr3);
console.log("Array after sorting in ascending order:", sortArray);

console.log(" Q.5 ========== WAP To Sort Descending order Elements Array =================");

function sortArraydescending(arr) {
    return arr.slice().sort(function (a,b) {
        return b - a;
    });
}
let arr4 = [4,8,5,3,2,7,1,9,3];
console.log("Original Array:",arr4);

let sortArray1 = sortArraydescending(arr4);
console.log("Array after sorting in descending order:", sortArray1);



