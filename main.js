let n=1;
let a=0;
while (a<10000) {
    n++;
    a += n;
}
document.getElementById('resultB1').innerHTML = "Số nguyên dương nhỏ nhất là: " + n;

// bài 2
function ex1() {
    let x2 = +document.getElementById('ex2-x').value;
    let n2 = +document.getElementById('ex2-n').value;
    let S = 0;
    for (let i = 1; i <= n2; i++) {
        S += Math.pow(x2,i); 
    }
    document.getElementById('resultB2').innerHTML = "S = " + S;
}
// bài 3

function ex3() {
    let n3 = +document.getElementById('ex3-n').value;
    let S = 1;
    for (let i = 1; i <=n3 ; i++) {
       S *= i; 
    }
    document.getElementById('resultB3').innerHTML = S;
}
// bai 4

function ex4() {
    let n4 = +document.getElementById('ex4-n').value;
    let resultB4 = document.getElementById('resultB4');
    for (let i = 1; i <= n4; i++) {
        if (i%2 == 1) {
            resultB4.innerHTML += '<div class="p-2" style="background-color: blue;">Div lẽ '+i+ '</div>'
        }
        else {
            resultB4.innerHTML += '<div class="p-2" style="background-color: red;">Div chẳn '+i+ '</div>';
        } 
    }
}

// bài 5

function soNT(n) {
    if(n<=2) return true ;
    if(n%2 ==0) return false;
    for (let i = 3; i <= Math.sqrt(n); i +=2) {
        if (n%i == 0) return false;
    }
    return true;
}

function ex5() {
    let n5 = +document.getElementById('ex5-n').value;
    let resultB5 = document.getElementById('resultB5');
    for (let i = 2; i <= n5; i++) {
        if (soNT(i)) resultB5.innerHTML += i +' ';
    }
}