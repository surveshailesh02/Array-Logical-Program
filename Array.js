
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

console.log(" Q.6 ========== WAP To Find 3rd Largest Elements Array =================");

function findThirdLargest(arr) {
    if (arr.length < 3) {
        return "Array doesn't have enough elements";
    }
    arr.sort(function (a,b) {
        return b - a;
    });
    return arr[2];
}
let arr8 = [5,4,6,8,3,9,1,4]
console.log("Third Largest numbers in the array:", findThirdLargest(arr8));

console.log(" Q.7 ========== WAP To Find 2nd Largest Elements Array =================");

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array doesn't have enough elements";
    }
    arr.sort(function (a,b) {
        return b - a;
    })
    return arr[1];
}
let arr9 = [5,7,1,8,4,9,3,2];
console.log("Second Largest numbers in the array:", findSecondLargest(arr9));

console.log(" Q.8 ========== WAP To Find Largest Elements Array =================");

function findLargestNumber(arr) {
    if (arr.length==0) {
        return "Array is Empty";
    }
    let Largest = arr[0];
    for (let index = 1; index < arr.length; index++){
        if (arr[index] > Largest) {
            Largest = arr[index];
        }
    }
    return Largest;
}
let arr10 = [5,8,3,6,9,2,7,4];
console.log("Largest number in the array:", findLargestNumber(arr10));

console.log(" Q.9 ========== WAP To Find 2nd Smallest Elements Array =================");

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array doesn't have enough elements";
    }
    let smallest = arr[0];
    let secondSmallest = arr[1];
    if (secondSmallest < smallest) {
        [smallest, secondSmallest] = [secondSmallest, smallest];
    }
    for (let index = 2; index < arr.length; index++) {
        if (arr[index] < smallest) {
            secondSmallest = smallest;
            smallest = arr[index];
        } else if (arr[index] < secondSmallest && arr[index] !== smallest) {
            secondSmallest = arr[index];
        }
    }
    return secondSmallest
}
let arr11 = [5,9,7,3,8,4,1,5,2];
console.log("Second smallest number in an array:", findSecondSmallest(arr11));

console.log(" Q.10 ========== WAP To Find Smallest Elements Array =================");

function findSmallestNumber(arr) {
    if (arr.length == 0) {
        return "Array is Empty"
    }
    let smallest = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < smallest) {
            smallest = arr[index];
        }
    }
    return smallest;
}
let arr12 = [4,7,3,6,9,2,8,5,1];
console.log("Smallest number in the array:", findSmallestNumber(arr12));
