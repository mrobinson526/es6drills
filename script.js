/* function favMovie(name = `Tommy Wiseau`, movie = `Borrowed Hearts`) {
    console.log(`My name is ${name}, My favorite movie is ${movie}`);
}
favMovie("Tommy Wiseau", "The Room"); // message and values print
favMovie(); //name and movie are undefined when default is not provided.  With default values, passed value is overriden, if different
Arrow Functions */
let favMovie = (name, movie) => console.log(`My name is  $(name)`, `My favorite movie is  $(movie)`);
favMovie(`Tony Williams`, `Borrowed Hearts`);


/* Function getFirstName */
let getFirstName = person => {
    const str = "  ";
    const firstName = str.split("  ");
    return (`$person.firstName`);
    console.log(`${person.firstName[1]}`);
}
/* concise body shorthand */
let getFirstNameConcise = person => {
    return `${person.firstName}`;
}
getFirstName('Tony Taylor');

getFirstNameConcise('Tony Williams'); 
/* doMath */
let doMath = (x, y) => ({
    product: x^y,
    exponent: x*y,
});
let result = doMath(3,5);
console.log(result);

/* Spread Syntax */
let getSpread = spread(name, location, favFood);
console.log(`${name}, ${location}, ${favFood}}`);
/* Array */
let addressArr = [`Paul`, `Birmingham`, `Kimchi`];
