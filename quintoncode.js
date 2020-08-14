// --------------------

// Examples of using native javascript constructors

// let greeting = 'Hello World!'

// let greeting = new String('Hello World!')

// let num = 5

// let num = new Number(5)

// let bool = true

// let bool = new Boolean(true)

// --------------------

// Function Constructors

// function Animal (name, type, age, sound) {
//   this.name = name
//   this.type = type
//   this.age = age
//   this.sound = sound
// }

// let gerald = new Animal('Gerald', 'cow', 5, 'Mooo')
// let carlos = new Animal('Carlos', 'zebra', 2, 'Weee')

// console.log(gerald)
// console.log(carlos)

// function Movie (title, director, plot, isGood) {
//   this.title = title
//   this.director = director
//   this.plot = plot
//   this.isGood = isGood || true
//   this.printInfo = function () {
//     console.log(`
//       Title: ${this.title}
//       Director: ${this.director}
//       Plot: ${this.plot}
//     `)
//   }
// }

// let goodfellas = new Movie('Goodfellas', 'Martin Scorsese', 'short plot', true)
// let theRoom = new Movie('The Room', 'Tommy Wiseau', 'short plot')

// console.log(goodfellas, theRoom)

// goodfellas.printInfo()

// --------------------

// More Function Constructors

// function Person (name, age, email, address) {
//   this.name = name
//   this.age = age
//   this.email = email
//   this.address = address
//   this.printInfo = function () {
//     console.log(`
//       Name: ${this.name}
//       Age: ${this.age}
//       Email: ${this.email}
//       Address: ${this.address}
//     `)
//   }
// }

// function Student (name, age, email, address, grade, gpa) {
//   Person.call(this, name, age, email, address)
//   this.grade = grade
//   this.gpa = gpa
// }

// let student = new Student('Jack', 18, 'jack@gmail.com', '123 South St', 12, 3.8)

// student.printInfo()

// console.log(student)

// function Teacher (name, age, email, address, subject, room) {
//   Person.call(this, name, age, email, address)
//   this.subject = subject
//   this.room = room
// }

// let teacher = new Teacher('John', 47, 'john@gmail.com', '234 Main St', 'English', 403)

// console.log(teacher)

// --------------------

// Factory Functions

// const person = (name, age, email, address) => ({ name, age, email, address })

// const student = (name, age, email, address, grade, gpa) => ({
//   ...person(name, age, email, address),
//   grade,
//   gpa,
//   printInfo () {
//     console.log(`
//       Name: ${name}
//       Age: ${age}
//       Email: ${email}
//       Address: ${address}
//       Grade: ${grade}
//       GPA: ${gpa}
//     `)
//   }
// })

// const teacher = (name, age, email, address, subject, room) => ({
//   ...person(name, age, email, address),
//   subject,
//   room
// })

// let jack = student('Jack', 18, 'jack@gmail.com', '123 South St', 12, 3.8)

// jack.printInfo()

// let john = teacher('John', 47, 'john@gmail.com', '234 Main St', 'English', 407)

// console.log(jack, john)

// let john = person('John', 47, 'john@gmail.com', '123 Main St')

// console.log(john)

// --------------------

// Class Constructors

// class Person {
//   constructor (name, age, email, address) {
//     this.name = name
//     this.age = age
//     this.email = email
//     this.address = address
//   }

//   printName () {
//     console.log(this.name)
//   }
// }

// class Student extends Person {
//   constructor (name, age, email, address, grade, gpa) {
//     super(name, age, email, address)
//     this.grade = grade
//     this.gpa = gpa
//   }
// }

// let jack = new Student('Jack', 18, 'jack@gmail.com', '123 South St', 12, 3.8)

// jack.printName()

// console.log(jack)

// class Teacher extends Person {
//   constructor (name, age, email, address, subject, room) {
//     super(name, age, email, address)
//     this.subject = subject
//     this.room = room
//   }
// }

// let john = new Teacher('John', 47, 'john@gmail.com', '123 Main St', 'English', 407)

// console.log(john)

// let john = new Person('John', 47, 'john@gmail.com', '123 Main St')

// console.log(john)

// --------------------