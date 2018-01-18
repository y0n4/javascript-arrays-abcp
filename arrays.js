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