Use class notation to create a class named Person
Declare the constructor() method with parameters name (string), pets (number), residence (string), and hobbies (array) allowed to be passed in
The constructor() method assigns this. properties to each parameter
Declare an info() method on the class that console.log's a string giving information about the Person object
You should display the name, number of pets, residence, and each hobby from the hobbies array
Declare a greeting() method that console.log's the sound of a Person... ex: greeting() {console.log("Hello fellow person!")}
Now we'll create a subclass Coder that inherits from our Person class
Use class notation to create a class named Coder that inherits from the Person class
Declare the constructor() method with parameters name (string), pets (number), residence (string), and hobbies (array) allowed to be passed in
Call the super() method inside the constructor method and pass in the given parameters
Still inside the constructor body, assign this.occupation to "Full Stack Web Developer"
Override the greeting() method to console.log a custom greeting from a coder…
Finally, let's create instances of our classes
Create a variable and assign a Person object to it using the new keyword followed by the class constructor
Create a variable and assign a Coder object to it using the new keyword followed by the class constructor
Call the object methods and console.log the object properties to test your work
BONUS
Refactor the greeting() methods to accept a name parameter and uses in to personalize the greeting output
Now when you call the coder.greeting() or person.greeting() methods, you can pass in the name property from an instantiated Person or Coder object
