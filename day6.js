const hi = document.getElementById('h');
const we = document.getElementById('w');
const anss = document.getElementById('ans');
const b = document.querySelector('button');

function bmi() {
    let height = Number(hi.value);
    let weight = Number(we.value);

    let cbmi = (weight * 10000) / (height * height);

    if (cbmi < 18.5) {
        anss.innerHTML = "Underweight: " + cbmi.toFixed(2);//to fixed give only first two decimal value;
        anss.style.color="yellow";
    } else if (cbmi < 25) {
        anss.innerHTML = "Normal: " + cbmi.toFixed(2);
        anss.style.color="green";
    } else if (cbmi < 30) {
        anss.innerHTML = "Overweight: " + cbmi.toFixed(2);
        anss.style.color="darkorange";
    } else {
        anss.innerHTML = "Obese: " + cbmi.toFixed(2);
        anss.style.color="red";
    }
}

b.addEventListener('click', bmi);