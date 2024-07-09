// Write your solution in this file!
let employee = {
  name: "Purity Jepkorir",
  streetAddress: "145 Tom Mboa Street",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  let newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}
updateEmployeeWithKeyAndValue(employee, "sam", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
