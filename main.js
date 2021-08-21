// 1
function windowGreet() {
    document.write("hello there<br>");
}
windowGreet();

// 2
function greetWindow() {
    document.write("hello there David<br>");
}
greetWindow();

// 3
function greetingInput(input) {
    document.write(`hello there ${input}<br>`);
}
greetingInput("anat");

// 4
function inputToWindow(inputFirstName, inputLastName, inputAge) {
    document.write(`First name :${inputFirstName}<br>Last name :${inputLastName}<br>Age : ${inputAge}<br>`);
}
inputToWindow("Anat", "Mersha", 26);

// 5
var inputNameAge = document.getElementById('div');
function inputToDoc(inputName, inputAge) {
    inputNameAge.innerHTML = `${inputName} ${inputAge}`;
}
inputToDoc("anat", 26);
// 6
var firstDiv = document.getElementById('div1');
var secondDiv = document.getElementById('div2');
var thirdDiv = document.getElementById('div3');
function inputToDocument(inputFirstName, inputLastName, inputAge) {
    firstDiv.innerText += `${inputFirstName}`;
    secondDiv.innerText += `${inputLastName}`;
    thirdDiv.innerText += `${inputAge}`;
}
inputToDocument("anat", "mersha", 26);
// 7
var division = document.getElementById('div');
function inputToWindow(inputName, inputAge) {
    division.innerText = `${inputName}${inputAge}`;
}
inputToWindow("anat ", 26);
// 8
var division = document.getElementById('div1');
function inputToDoc(inputFirstName, inputLastName, inputAge) {
division.innerHTML = `<p>${inputFirstName}${inputLastName}${inputAge}</p>`;
}
inputToDoc("anat ", "mersha ", 26);
// 9
var parag = document.getElementById('para');
function inputToDocument(inputFirstName, inputLastName, inputAge) {
    parag.innerText = `${inputFirstName}${inputLastName}${inputAge}`;
}
inputToDocument("anat ", "mersha ", 26);
// 10
var division = document.getElementById('div1');
function inputToWindow(inputFirstName, inputLastName, inputAge) {
division.innerHTML = `${inputFirstName}${inputLastName}${inputAge}`;
}
inputToWindow("anat ", "mersha ", 26);
// 11
// א
var parag = document.getElementById('para');
function addFirstName(inputFirstName) {
    parag.innerText = `${inputFirstName}`;
}
addFirstName("anat");
// ב
var parag = document.getElementById('para');
function addLastName(inputLastName) {
     parag.innerText += ` ${inputLastName}`;
}
addLastName("mersha");
// 12
// א
var parag = document.getElementById('para');
function inputToDocument(inpuName) {
    parag.innerText = `${inpuName}`;
}
inputToDocument("anat");
// 13
const car = {};
function carObject(carObject ,carColor, carBrand, carCm) {
    carObject.color = carColor;
    carObject.Brand = carBrand;
    carObject.cm = carCm;
   document.write(`Color: ${carColor}, Brand: ${carBrand}, Cm: ${carCm}`);
}
carObject(car, "green", "mazda", 160);
// 14
const car = {};
function makeCarObject(carObject, carColor, carBrand, carCm) {
   var carYear = new Date().getFullYear();
   carObject.color = carColor;
   carObject.brand = carBrand;
   carObject.cm = carCm;
   carObject.year = carYear;
      carObject.year = carYear;
document.write(`Color: ${carColor}, Brand: ${carBrand}, Cm: ${carCm}, Year: ${carYear}`);
}
makeCarObject(car, "yellow", "toyota", 160);
//15
var division = document.getElementById('div');
const car = {};
function carObjectMake(carObject, carColor, carBrand, carCm) {
   carObject.color = carColor;
   carObject.brand = carBrand;
   carObject.cm = carCm;
   division.innerText = `Color: ${carColor}, Brand: ${carBrand}, Cm: ${carCm}`;
}
carObjectMake(car, "red", "reno", 160);
// 16
var division1 = document.getElementById('div1');
var division2 = document.getElementById('div2');
var division3 = document.getElementById('div3');
var division4 = document.getElementById('div4');
const car = {};
function carObject(carObject, carColor, carBrand, carCm) {
   var carYear = new Date().getFullYear();
   carObject.color = carColor;
   carObject.brand = carBrand;
   carObject.cm = carCm;
      carObject.year = carYear;
   division1.innerText = `car color: ${carColor}`;
   division2.innerText = `car brand: ${carBrand}`;
   division3.innerText = `car cm: ${carCm}`;
   division4.innerHTML = `car year: ${carYear}`;
}
carObject(car, "red", "volvo", 160);
// 17
var part1 = document.getElementById('division1');
var part2 = document.getElementById('division2');
var part3 = document.getElementById('division3');
var part4 = document.getElementById('division4');
const car = {};
function carObject(carObject, carColor, carBrand, carCm) {
   var carYear = new Date().getFullYear();
   carObject.color = carColor;
   carObject.brand = carBrand;
   carObject.cm = carCm;
   carObject.year = carYear;
   part1.innerText = `car color: ${carColor}`;
   part2.innerText = `car brand: ${carBrand}`;
   part3.innerText = `car cm: ${carCm}`;
   part4.innerHTML = `car year: ${carYear}`;
}
carObject(car, "orange", "toyota", 160);


