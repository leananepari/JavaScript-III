/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding to 'this' happens when the function gets called from the global scope and has no other bindings
     applied to it.
* 2. Implicit Binding to 'this' happens when the function is a part of the object containig other properties to which in this case
     functions 'this' will be referrring.
* 3. New Binding to 'this' happens when we call the constructor function with the keyword 'new'; 'this' will refer to properties of the constructor function.
* 4. Explicit Binding to 'this' happens when we explicitely indicate what we want 'this' to refer to by using .call and .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let obj = {
    'name': 'Kitler',
    'foo': function() {
        console.log(this.name);
    }
}
let name = "Rosie";
let func = obj.foo;
console.log(func());  //even though obj has its own name property, the binding to 'this' falls into global scope

// Principle 2

// code example for Implicit Binding
console.log(obj.foo()) //since the function is being called as a part of the 'obj', 'this' binds to the 'obj's property 'name'.

// Principle 3

// code example for New Binding
function ConstructorFunc(obj) {
    this.name = obj;
}
let bob = new ConstructorFunc('Bob')
console.log(bob.name)

// Principle 4

// code example for Explicit Binding
let obj2 = {
    'name': 'Mary'
}
console.log(obj.foo.call(obj2));  //we explicitely indicate what we want 'this' to refer to; in this case, it's obj2's property 'name'.