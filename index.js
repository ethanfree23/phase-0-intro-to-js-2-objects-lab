// Write your solution in this file!


const employee = {}
employee.name = "Sam" //key
employee.streetAddress = "11 Broadway" //value



function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,[key]:value} //we put {} because it is all together; without them, it throws an error
}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj
}
// boom! the above worked. I orginally had the below, but realized it was the same, just limited becasue of the "string"
// function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
//     employee.streetAddress = "12 Broadway" //AHH! this is what it is really saying:
//     // obj.key=value
//     return employee;
// }

// ^^ for the above, this is the example from the lesson.
// function destructivelyUpdateObject(obj, key, value) {
//     obj[key] = value; //Why are we using bracket notation here?
  
//     return obj;
//   }


function deleteFromEmployeeByKey(obj, key){
    return {...obj[key]}
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}




// const employee = {}
// employee.name = "Sam"
// employee.streetAddress = "11 Broadway"


// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return {
//         ...employee,
//         [key]: value,
//     }
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//         employee [key] = value;
//         // ^ the reason employee is the same, is becuase we are overriding it.
//         return employee;
// }

// function deleteFromEmployeeByKey(obj, key) {
//     const newEmployee = Object.assign({}, obj);
//     delete newEmployee[key];
//     return newEmployee;
// }


// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key];
//     return employee;
// }


/*
NOTES

Objects are great for more complex data
While arrays are [], objects are {}

const obj = { key: value };
*more complex below*
const obj = {
  key1: value1,
  key2: value2,
};

we can also have nested objects...
const obj = {
  key1: value1,
  key2: {
    innerKey1: innerValue1,
    innerKey2: innerValue2,
  },
};

to access values in an object, we can use:
DOT notation
address.street;
//=> { line1: "11 Broadway", line2: "2nd Floor" }

address.city;
//=> "New York"

address.state;
//=> "NY"

address.zipCode;
//=> "10004"


to access a specific value within the object (an object's object) - make another dot
ie
address.street.line1


We can also use bracket notation:
address["street"];
//=> { line1: "11 Broadway", line2: "2nd Floor" }

address["street"]["line1"];
//=> "11 Broadway"

address["street"]["line2"];
//=> "2nd Floor"

address["city"];
//=> "New York"

address["state"];
//=> "NY"

address["zipCode"];
//=> "10004"


^ We use dot notation becuase it is easier
** Unless we have non-standard keys


If we want to access documents dynamically, that is, using variables rather than specific identifiers:

const meals = {
  breakfast: "Oatmeal",
  lunch: "Caesar salad",
  dinner: "Chimichangas",
};

let mealName = "lunch";

meals[mealName];
//=> "Caesar salad"


We can also use bracket notation in the creation of an object

const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meals = {
  [morningMeal]: "French toast",
  [middayMeal]: "Personal pizza",
  [eveningMeal]: "Fish and chips",
};

meals;
//=> { breakfast: "French toast", lunch: "Personal pizza", dinner: "Fish and chips" }

pretty coolio

By wrapping the variable names in square brackets, we're letting JavaScript know that it needs to interpret the contents!


~
JavaScript's Object Methods

Object.keys(object name)

const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

Object.keys(wednesdayMenu);
//=> ["cheesePlate", "fries", "salad"]


Object.values(object name)
** returns the values, instead of keys

~~~~
~~~~

MODIFYING OBJECTS:


Can create an object from scratch:
const circle = {}; // Create `circle` and set it to an empty Object

circle;
//=> {}

circle.radius = 5; // Create the key inside `circle` and set its value to 5

circle;
//=> { radius: 5 }

Just like with arrays, we can modify the elements within, but we cannot reassign the variable itself

We can modify using dot notation, but it is destructive

To update non-destructively:

function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

const sundayMenu = nondestructivelyUpdateObject(
  tuesdayMenu,
  "fries",
  "Shoestring"
);

tuesdayMenu.fries;
//=> "Sweet potato"

sundayMenu.fries;
//=> "Shoestring"

we can use the delete operator to delete a value

const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

delete wednesdayMenu.salad;
//=> true

wednesdayMenu;
//=> { cheesePlate: { soft: "Brie", semiSoft: "Fontina", hard: "Provolone" }, fries: "Sweet potato" }



Arrays are objects:
typeof [];
//=> "object"


** remember these core things:

1) for accessing elements in an array, use integers
2) beware of setting object like properties on an array
3) all object keys are "strings"






 */