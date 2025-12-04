let myVar = 1;

{
    let myVar = 2;

    {
        let myVar = 3;

        for (let myVar = 4; myVar > 3; myVar--) {
            console.log(myVar);
        }

        console.log(myVar);
    }

    console.log(myVar);
}

console.log(myVar);