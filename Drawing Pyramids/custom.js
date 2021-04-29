const triangle = document.getElementById('triangle');
const pyramid = document.getElementById('pyramid');
const piramid = document.getElementById('reversePyramid');
const clean = document.getElementById('empty');


triangle.addEventListener('click', createTriangle)
pyramid.addEventListener('click', createPyramid)
piramid.addEventListener('click', reversePyramid)
clean.addEventListener('click', clear)


function createTriangle() {
    for (let i = 0; i < 7; i++) {
        let output = '';
        for (let k = 0; k < i; k++)
            output += '* ';
        outputOut(output)
    }
}

function createPyramid() {
    for (let i = 0; i < 7; i++) {
        let output = '';
        for (let j = 0; j < 7 - i; j++)
            output += '&nbsp';
        for (let k = 0; k <= i; k++)
            output += '* ';
        outputOut(output)
    }
}

function reversePyramid() {
    for (let i = 0; i < 7; i++) {
        let output = '';
        for (let j = 0; j <= i; j++)
            output += '&nbsp';
        for (let k = 0; k < 7 - i; k++)
            output += '* ';
        outputOut(output)
    }
}

function outputOut(output) {
    document.getElementById('output').innerHTML += output + "<br>";
}

function clear() {
    document.getElementById('output').innerHTML = '';
}

// function reversePyramid() {
//     for (let i = 0; i < 7; i++) {
//         let output = '';
//         for (let j = 0; j < i; j++)
//             output += '.';
//         for (let k = 0; k < 7 - i - 1; k++)
//             output += '*';
//         for (let l = 0; l < 7 - i; l++)
//             output += '*';
//         outputOut(output)
//     }
// }
