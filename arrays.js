var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//push and unshift MUTATE + returns number of elements in array
//spread operator (...) COPY ['object', ...arayName]

function addElementToBeginningOfArray (array, element) {
  return [element, ...array];
}

function destructiveAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

//slice COPY and return the length element (single num)
//return array thats kept (double num)

function removeElementFromBeginningOfArray(array){
  // or array.slice(1, lastIndex);
  var newArray = array.slice(1);
  return newArray;
}

//push MUTATES
function destructivelyRemoveElementFromEndOfArray(array){
 return array(splice(-1)); 
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length-1)
  return newArray;
}

//remove element from mid of array >> return copy of og array