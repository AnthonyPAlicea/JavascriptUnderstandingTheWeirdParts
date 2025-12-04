const greetings = ['Hello', 'Hi'];

const [a, b] = greetings;
console.log(a);
console.log(b);

let person = {
    firstname: 'Tony',
    lastname: 'Alicea'
};

let { f, l } = person;
console.log(f); // undefined
console.log(l); // undefined

let { firstname, lastname } = person;
console.log(firstname);
console.log(lastname);