const greeter = (name) => 'Hello ' + name;

console.log(greeter('Tony'));

function greet(greetFunc, name) {
    return greetFunc(name);
}

console.log(greet((name) => 'Hi ' + name, 'Anthony'));

const greeter2 = { 
    name: 'Tony',
    greet: () => { 'Hello ' + this.name }
};

console.log(greeter2.greet());