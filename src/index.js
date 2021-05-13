// .some()

//The some() method checks if any of the
// elements in an array pass a test (provided
// as a function). Returns a boolean response.

//can change NodeList to an Array by adding the following...
const hearts = Array.from(document.querySelectorAll(".heart"));

console.log(hearts);

//child node in this case is the black dot on left heart
const isHeartBroken = hearts.some((heart) => heart.hasChildNodes());

console.log(isHeartBroken);

// const scores = [23, 49, 50, 37];

// console.log(scores.some((score) => score >= 50));

// const countries = ['Afghanistan', 'Poland', 'Ireland', 'Czech Republic']

// console.log(countries.some(country => country === 'Ireland'))
