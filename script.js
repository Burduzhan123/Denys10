
//const originalArray = [1, 2, 3, 4, 5];

//const reversedArray = originalArray.reverse();

//console.log(reversedArray);



/*const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const array3 = array1.concat(array2)
const uniqueValuesArray = [...new Set(array3)]
console.log(uniqueValuesArray)*/



/*const students = [ 
    { name: "Alice", age: 20, grade: 4.5 }, 
    { name: "Bob", age: 21, grade: 3.9 }, 
    { name: "Charlie", age: 19, grade: 4.8 } 
    ]; 
console.log(students)*/


function calculateAverageGrade(students) {
    return students.reduce((prev, students) => prev + students.grade, 0) / students.length;
  }
  
  let Alice = { name: "Alice", age: 25, grade: 4.5};
  let Bob = { name: "Bob", age: 30, grade: 3.9 };
  let Charlie = { name: "Charlie", age: 29, grade: 4.8 };
  
  let students = [ Alice, Bob , Charlie ];
  
  console.log(calculateAverageGrade(students))