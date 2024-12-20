
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

console.log(" Q.11 ========== WAP To Find Remove Duplicate Elements Array =================");

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let index = 0; index < arr.length; index++) {
        if (uniqueArray.indexOf(arr[index] == -1)) {
            uniqueArray.push(arr[index]);
        }
    }
    return uniqueArray
}
let arr13 = [4,6,7,3,4,9,5,3,8,2,6];
console.log("Original array:",arr13);
let uniqueArray = removeDuplicates(arr13);
console.log("Array After Removing duplicates:",uniqueArray);

console.log(" Q.12 ========== WAP To Find Odd & Even No Elements Array =================");

function printEvenOddNumbers(arr) {
    let oddNumbers = [];
    let evenNumbers = [];
    for (let index = 0; index < arr.length; index++) {
     if (arr[index] % 2 == 0) {
        evenNumbers.push(arr[index]);
     } else{
        oddNumbers.push(arr[index]);
     }
    }
    console.log("Even Numbers:",evenNumbers);
    console.log("Odd Numbers:",oddNumbers);
}
let arr14 = [4,6,2,5,81,9,37];
console.log("Original Array:",arr14);
console.log("Even And Odd Numbers Of An Array:");
printEvenOddNumbers(arr14)

console.log(" Q.13 ========== WAP To Find Copy All Elements From One Array into another Array =================");

  console.log("======= Method : 1 ===========");
  let arr15 = [1,2,3,4,5];
  let newArr = [];
  for (let index = 0; index < arr15.length; index++) {
    newArr.push (arr15[index]);
  }
  console.log(newArr);
  
  console.log("======= Method : 2 ===========");
  let arr16 = [1,2,3,4,5];
  let newArr1 = arr16.slice();
  console.log(newArr1);
  
  console.log("======= Method : 3 ===========")
  let arr17 = [1,2,3,4,5];
  let newArr2 = [...arr17];
  console.log(newArr2);
  
  console.log(" Q.14 ========== WAP To Find The Frequency Of Each Element Array =================");

  let arr18 = [1,2,2,3,3,3,4,4,4,4];
  let Frequency = {};
  for (let index = 0; index < arr18.length; index++) {
    let element = arr18[index];
    if (Frequency[element]) {
        Frequency[element]++;
    }else{
        Frequency[element] = 1;
    }
  }
  console.log(Frequency);
  
  console.log(" Q.15 ========== WAP To Left Rotated Element Array =================");

  function LeftRotateArray(arr) {
    if (arr.length == 0) {
        return arr;   
    }
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
  }
  let arr19 = [1,2,3,4,5];
  console.log("Original array:",arr19);
  let rotatedArray1 = LeftRotateArray(arr19);
  console.log("Array after left rotation:",rotatedArray1);
  
  console.log(" Q.16 ========== WAP To Print Duplicate Element Array =================");

  console.log("============= Method 1 =================");

  function findDuplicates(arr) {
    const duplicates = [];
    for (let index = 0; index < arr.length; index++) {
        for (let j = index + 1; j < arr.length; j++) {
            if (arr[index] == arr[j] && !duplicates.includes(arr[index])) {
                duplicates.push(arr[index]);
            }
        }
    }
    return duplicates
  }
  const numbers = [2,4,8,5,6,3,2,4,6,6];
  const duplicateNumbers = findDuplicates(numbers);
  console.log("Duplicate numbers:",duplicateNumbers);

  console.log("============= Method 2 =================");
  
  function findDuplicatesOptimized(array) {
    const duplicates = [];
    const frequencyMap = {};
    for (let index = 0; index < array.length; index++) {
        const elements = array[index];
        if (frequencyMap[elements]) {
            if (!duplicates.includes(elements)) {
                duplicates.push(elements);
            }
            else{
                frequencyMap[elements] = true ;    
               }
        }
    }
    return duplicates
  }
  const numbers1 = [2,4,8,5,6,3,2,4,6,6];
  const duplicateNumbers1 = findDuplicatesOptimized(numbers1);
  console.log("Duplicates Numbers:",duplicateNumbers1);
  
  console.log("============= Method 3 =================");

  function printDuplicates(arr) {
    let elementCount = {};
    let duplicates = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (elementCount[element]) {
            elementCount[element]++;
        } else{
            elementCount[element] = 1;
        }
    }
    for (let element in elementCount) {
        if (elementCount[element] > 1) {
            duplicates.push(element);
        }
    }
    if (duplicates.length > 0) {
        console.log("Duplicate elements:",duplicates);
    } else{
        console.log("No Duplicates elements found");
    }
  }
  let arr20 = [2,4,8,5,6,3,2,4,6,6];
  printDuplicates(arr20)

  console.log(" Q.17 ========== WAP To Print Element Of Array =================");

    console.log("========== Method 1 ===  For Loop ===========");

    console.log("Using For Loop:");
    
    function printArrayElements(arr) {
        for (let index = 0; index < arr.length; index++) {
               console.log(arr[index]);
        }
    }
    let arr21 = [1,2,3,4,5];
    printArrayElements(arr21);

    console.log("========== Method 2 ===  While Loop ===========");

    console.log("Using While Loop:");

    function printArrayElementsWhile(arr) {
        let index = 0;
       while (index < arr.length) {
        console.log(arr[index]);
         index ++ ;
       };
    }
    let arr22 = [1,2,3,4,5];
    printArrayElementsWhile(arr22);
    
    console.log("========== Method 3 ===  Do While Loop ===========");

    console.log("Using Do While Loop:");

    function printArrayElementsDoWhile(arr) {
        let index = 0
        do {
            console.log(arr[index]);
            index ++ ;
        } while (index < arr.length);
    };
    let arr23 = [1,2,3,4,5];
    printArrayElementsDoWhile(arr23);

    console.log("========== Method 4 ===  For Each Loop ===========");

    console.log("Using For Each Loop:");

    function printArrayElementsForEach(arr) {
        arr.forEach(function (element) {
            console.log(element);
        });
    }
    let arr24 = [1,2,3,4,5];
    printArrayElementsForEach(arr24);


    console.log(" Q.18 ========== WAP To Print Reverse Element Of Array =================");

    console.log("========== Method 1 ===  While Loop ===========");

    console.log("Using While Loop:");

    function printArrayElementsReverseWhile(arr) {
        let i = arr.length-1;
        while (i >= 0) {
            console.log(arr[i]);
            i--;
        }
    }
    let arr25 = [1,2,3,4,5];
    printArrayElementsReverseWhile(arr25);

    
    console.log("========== Method 2 ===  Do While Loop ===========");

    console.log("Using Do While Loop:");

    function printArrayElementsReverseDoWhile(arr) {
        let index = arr.length-1;
        if (index < 0) return;
        do {
            console.log(arr[index]);
            index--;
        } while (index >= 0);
    }
    let arr26 = [1,2,3,4,5];
    printArrayElementsReverseDoWhile(arr26);


    console.log("========== Method 3 ===  For Loop ===========");

    console.log("Using For Loop:");

    function printArrayElementsReverseForLoop(arr) {
        for (let index = arr.length-1; index>=0 ; index--) {
             console.log(arr[index]);
            
        }
    }
    let arr27 = [1,2,3,4,5];
    printArrayElementsReverseForLoop(arr27);    

    console.log("========== Method 4 ===  For Each Loop ===========");

    console.log("Using ForEach Loop:");

    function printArrayElementsReverseForEach(arr) {
        arr.slice().reverse().forEach(element => {
            console.log(element);
        });
    }
    let arr28 = [1,2,3,4,5];
    printArrayElementsReverseForEach(arr28)

    console.log(" Q.19 ========== WAP To Print Element Of Array Even Position =================");

    function printElementsAtEvenPosition(arr) {
        for (let index = 1; index < arr.length; index=index+2) {
            console.log(arr[index]);
        }
    }
    let arr29 = [1,6,3,9,4,2,6,3,9,22,43];
    printElementsAtEvenPosition(arr29)

    console.log(" Q.20 ========== WAP To Print Element Of Array Odd Position =================");

    function printElementsAtOddPosition(arr) {
        for (let index = 0; index < arr.length; index=index+2) {
           console.log(arr[index]);
        }
    }
    let arr30 = [1,6,3,9,4,2,6,3,9,22,43];
    printElementsAtOddPosition(arr30)