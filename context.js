function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
//eat(); // undefined because it is refferencing the global obj


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // prints 'Nemo eats fish food' because eat fun assgn to nemo obj then invoked


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food because we have yet to bind the func to an obj other than global


/********************************* Scenario 4 *********************************/
//nemo.swim(); // nemo swimming in the water


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // error
