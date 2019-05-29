const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers.push(appetizerIn);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains.push(mainIn);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts.push(dessertIn);
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish ={
      name: dishName,
      price: dishPrice,
    }
    this[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName) {
    const dish = this[courseName];
    return dish[(Math.floor(Math.random() * dish.length))];
  },
  getRandomMeal() {
  	const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} for a total price of ${totalPrice}`;    
  }      
};

menu.addDishToCourse('appetizers', 'caesar salad', 10);
menu.addDishToCourse('appetizers', 'bruschetta', 9);
menu.addDishToCourse('appetizers', 'flatbread', 8);
menu.addDishToCourse('mains', 'spaghetti & meatballs', 11);
menu.addDishToCourse('mains', 'lamb chop & orzo', 18);
menu.addDishToCourse('mains', 'fresh catch of the day', 15);
menu.addDishToCourse('desserts', 'creme brulee', 8);
menu.addDishToCourse('desserts', 'chocolate mousse bomb', 11);
menu.addDishToCourse('desserts', 'key lime pie', 9);

const meal = menu.getRandomMeal();
console.log(meal);
