class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`)
  }
}

const sample = new Person("sample");
sample.introduceSelf();

class Professor extends Person {
  teaches;
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }
  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`)
  }
  grade(paper) {
    const grade = Math.floor(Math.random() * (5-1) + 1);
    console.log(grade);
  }
}

const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();

walsh.grade("my paper");


class Students extends Person {
  #year;
  constructor(name, year) {
    super(name);
    this.#year = year;
  }
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }
  canStudyArchery() {
    return this.#year > 1;
  }
}

const summer = new Students("summer", 2);
summer.introduceSelf();
summer.canStudyArchery();


// Private Methods

class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }
  #somePrivateMethod() {
    console.log("You Called Me?")
  }
}

const myExample = new Example();
myExample.somePublicMethod();

// myExample.#somePrivateMethod();  // --> syntex Error