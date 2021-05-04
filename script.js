let display = document.getElementById('expression');
let openBrace = document.getElementById('opening-brace');
openBrace.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += openBrace.innerHTML;
});

let closingBrace = document.getElementById('closing-brace');
closingBrace.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += closingBrace.innerHTML;
});

let modulus = document.getElementById('modulus');
modulus.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += modulus.innerHTML;
});

let allClear = document.getElementById('all-clear');
allClear.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML = '';
});

let seven = document.getElementById('seven');
seven.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += seven.innerHTML;
});

let eight = document.getElementById('eight');
eight.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += eight.innerHTML;
});

let nine = document.getElementById('nine');
nine.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += nine.innerHTML;
});

let divide = document.getElementById('division');
divide.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += divide.innerHTML;
});

let four = document.getElementById('four');
four.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += four.innerHTML;
});

let five = document.getElementById('five');
five.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += five.innerHTML;
});

let six = document.getElementById('six');
six.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += six.innerHTML;
});

let multiply = document.getElementById('multiply');
multiply.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += multiply.innerHTML;
});

let one = document.getElementById('one');
one.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += one.innerHTML;
});

let two = document.getElementById('two');
two.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += two.innerHTML;
});

let three = document.getElementById('three');
three.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += three.innerHTML;
});

let subtract = document.getElementById('minus');
subtract.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += subtract.innerHTML;
});

let zero = document.getElementById('zero');
zero.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += zero.innerHTML;
});

let decimal = document.getElementById('dot');
decimal.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += decimal.innerHTML;
});

let equal = document.getElementById('equals');
equal.addEventListener('click', ()=> {
    document.getElementById('answer').innerHTML = eval(display.innerHTML);
});

let addition = document.getElementById('add');
addition.addEventListener('click', ()=> {
    document.getElementById('expression').innerHTML += addition.innerHTML;
});


let arithemetic = function () {

}