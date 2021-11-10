// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
};
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};
function deleteFromEmployeeByKey(obj, key) {
    const newObject = Object.assign({}, obj);
    delete newObject[key];
    return newObject;
};


function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key] 
    return obj;
}



// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     const newObject = Object.assign(employee, key);
//     return newObject[key];
// }
