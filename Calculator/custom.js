const x = document.getElementById('FirstNumber');
const y = document.getElementById('SecondNumber');

const sub = document.getElementById("sub");
const add = document.getElementById("adding");
const div = document.getElementById("div");
const mul = document.getElementById("mul");
const mods = document.getElementById("mod");
const clear = document.getElementById("clear");

const calcBtn = document.querySelectorAll('button');

result = document.getElementById('result');


central()

calcBtn.forEach(function (i) {
    i.addEventListener('click', () => {
        central(i.id);
    });
});

function answer(operator) {
    document.getElementById('result').textContent = "Result:" + operator;
}

function central(id) {
    let operator;
    switch (id) {
        case "adding":
            operator = parseInt(x.value) + parseInt(y.value)
            return answer(operator)
        case "sub":
            operator = parseInt(x.value) - parseInt(y.value);
            return answer(operator)
        case "div":
            operator = parseInt(x.value) / parseInt(y.value);
            return answer(operator)
        case "mul":
            operator = parseInt(x.value) * parseInt(y.value);
            return answer(operator)
        case "mod":
            operator = parseInt(x.value) % parseInt(y.value);
            return answer(operator)
        case "clear":
            x.value = '';
            y.value = '';
    }
}


// POSSIBLE TO DO AND OTHER WAY: DOWN THERE

// function adding() {
//     let sum = parseInt(x.value) + parseInt(y.value);
//     document.getElementById('result').innerHTML = "Result:" + sum;
// }
//
// function substracting() {
//     let minus = parseInt(x.value) - parseInt(y.value);
//     document.getElementById('result').innerHTML = "Result:" + minus;
// }
//
// function dividing() {
//     let divide = parseInt(x.value) / parseInt(y.value);
//     document.getElementById('result').innerHTML = "Result:" + divide;
// }
//
// function multi() {
//     let mult = parseInt(x.value) * parseInt(y.value);
//     document.getElementById('result').innerHTML = "Result:" + mult;
// }
//
// function mod() {
//     let mode = parseInt(x.value) + parseInt(y.value) / 100;
//     document.getElementById('result').innerHTML = "Result:" + mode;
// }

// function reset() {
//     x.value = '';
//     y.value = '';
// }

// add.addEventListener('click', adding);
// sub.addEventListener('click', substracting);
// div.addEventListener('click', dividing);
// mul.addEventListener('click', multi);
// mods.addEventListener('click', mod);
// clear.addEventListener('click', reset);