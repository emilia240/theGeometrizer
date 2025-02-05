/* 
Calculate properties of a circle, using the definitions here. (http://math2.org/math/geometry/circles.htm)
• Store a radius into a variable.
• Calculate the circumference(omkreds) based on the radius, and output "The circumference is NN".
• Calculate the area based on the radius, and output "The area is NN". 
*/

/* definitions
 Circumference of Circle = PI x diameter
area = PI r2 
*/

let radius = [24, 5.5, 10, 376];

function pickRandomValues(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let randomRadius = pickRandomValues(radius);


let circleCircumference = Math.round(2 * 3.141592 * randomRadius);
let circleArea = Math.round(3.141592 * Math.pow(randomRadius, 2));

//Math.pow(base, exponent)
//Math.round(x)



console.log(`For a ${randomRadius} radius, the circumference is ${circleCircumference}, and the area is ${circleArea}.`);

//button and message

const circleButton = document.getElementById('calculate_button');
const resultMessage = document.getElementById('result');

// an event listener
circleButton.addEventListener('click', () => {
    let randomRadius = pickRandomValues(radius);
    let circleCircumference = Math.round(2 * 3.141592 * randomRadius);
    let circleArea = Math.round(3.141592 * Math.pow(randomRadius, 2));
    resultMessage.textContent = `For a ${randomRadius} radius, the circumference is ${circleCircumference}, and the area is ${circleArea}.`;
});

