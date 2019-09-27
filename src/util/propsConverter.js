const arrReducer = (arr) => {

}

function convertToObject (arr) {
  let obj = {};

  return arr.reduce(arrReducer, obj)
}