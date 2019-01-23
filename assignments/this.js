/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - "This" will always try to bind to the window.
* 2. Implicit Binding - When used inside of an object, "this" implicitly refers to the object it resides in.
* 3. New Binding - When the new keyword is used, "this" is referring to the constructor function.
* 4. Explicit Binding - When .call, .apply, or .bind are used, this is explicitly referring to the object being passed as an argument.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const cindy = {
  name: 'Cindy',
  breed: 'Shih-tzu',
  beg: function() {
    return `${this.name} the ${this.breed} is begging for food.`
  }
}
// Principle 3

// code example for New Binding
function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}
const coquito = new Dog('Coquito', 'Pomberanian', 10);
// Principle 4

// code example for Explicit Binding
