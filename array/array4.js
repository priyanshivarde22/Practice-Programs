//  comman element of two array

function arraysCommon(array1, array2) {
    return array1.filter(x => array2.includes(x));
  }
  const array1 = [1,2,3,4,5,6]
  const array2 = [3,4,5,6,7,8]
  console.log(arraysCommon(array1,array2))