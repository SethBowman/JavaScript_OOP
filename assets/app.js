// ========== Practice ========== //

// let jacket = {
//   color: null,
//   season: null,
//   size: null,
//   hasHood: null,
//   price: null,
// };

// let londonFog = object.create(jacket);

// londonFog.color = "blue";
// londonFog.season = "Winter";
// londonFog.size = "M";
// londonFog.hasHood = true;
// londonFog.price = 200.0;

// function Jacket(color, season, size, current, price) {
//   let obj = Object.create(jacket);

//   obj.color = color;
//   obj.season = season;
//   obj.size = size;
//   obj.current = current;
//   obj.price = price;

//   return obj;
// }

// let northface = Jacket("black", "Spring", "M", true, 50.0);

// let inventory = {
//   products: [],
//   length: 0,
//   addProduct: function (product) {
//     this.products.push(product);
//     this.length++;
//   },
//   displayProducts: function () {
//     this.products.forEach(function (value) {
//       console.log(
//         `| ${value.color} | ${value.season} | ${value.size} | ${value.price}`
//       );
//     });
//   },
// };

// let gap = Object.create(inventory);

// gap.addProduct(Jacket("red", "Summer", "M", true, 45.99));
// gap.addProduct(Jacket("black", "Winter", "L", false, 100.0));

// class OuterWear {
//   constructor(
//     color = "blue",
//     size = "L",
//     fabric = "polyester",
//     pockets = 0,
//     hood = false
//   ) {
//     this.color = color;
//     this.size = size;
//     this.fabric = fabric;
//     this.pockets = pockets;
//     this.hood = hood;
//   }
//   wear() {
//     console.log(`"Putting on the `);
//   }
// }

// class Jacket extends OuterWear {
//   constructor(color, size, fabric, pockets, hood, season, price) {
//     super(color, size, fabric, pockets, hood);
//     this.season = season;
//     this.price = price;
//   }
// }



// ========== Exercise ========== //

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  info() {
    let formattedHobbies = this.hobbies.join(", and ");
    console.log(
      `My name's ${this.name}. I have ${this.pets} pets. My hometown is ${this.residence}. My hobbies are ${formattedHobbies}.`
    );
  }

  greet(name) {
    console.log(`Hello ${name}!`);
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies, language) {
    super(name, pets, residence, hobbies);
    this.language = language;
  }
}

const seth = new Coder(
  "Seth",
  0,
  "Bham",
  ["gaming", "coding"],
  ["C#", "JavaScript"]
);

seth.info();
seth.greet(seth.name);
