var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//push and unshift MUTATE + returns number of elements in array

function addElementToBeginningOfArray (array, element) {
  //spread operator(...) COPIES ['object', ...arrayName]
  return [element, ...array];
}

//remove element from mid of array >> return copy of og array