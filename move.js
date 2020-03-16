var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box8 = document.querySelector('#box8');
var box12 = document.querySelector('#box12');
var box16 = document.querySelector('#box16');
var box15 = document.querySelector('#box15');
var box14 = document.querySelector('#box14');
var box13 = document.querySelector('#box13');
var box9 = document.querySelector('#box9');
var box5 = document.querySelector('#box5');


var d = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
var arrdiv = [box1, box2, box3, box4, box8, box12, box16, box15, box14, box13, box9, box5];


const player1 = document.getElementById("btn1");
const player2 = document.getElementById("btn2");
console.log(d.length)
console.log(player1);
console.log(player2);


window.onload = function() {
    player1.addEventListener('click', rolldice1);
    player2.addEventListener('click', rolldice2);
};




var person1 = ["pkp", 0, 1000];
var person2 = ["pkp1", 0, 1000];


function rolldice1() {
    let position = Math.floor((Math.random() * 6) + 1);
    console.log(" person1 play", position);
    changeposition1(person1[1], position);
}

function rolldice2() {
    let position = Math.floor((Math.random() * 6) + 1);
    console.log(" person2 play", position);
    changeposition2(person2[1], position);
}
var count = 0;

function changeposition1(old, current) {
    count++;
    var newposition = old + current;
    person1[1] = newposition;
    newposition = newposition % 11;
    var img = document.getElementById('img1');
    img.style.visibility = 'hidden';
    console.log(" count" + count);
    if (count > 1) {
        var elem = document.getElementById("img11");
        elem.remove();
    }

    let template = '<img src="./images/bB.png" id="img11" alt="red" style="width: 36px;">';
    arrdiv[newposition].innerHTML += template;
    console.log(" person1 play", person1[1]);
    changeMoney1(person1[1]);
}
var count1 = 0;

function changeposition2(old, current) {
    count++;
    var newposition = old + current;
    person2[1] = newposition;
    newposition = newposition % 11;
    var img = document.getElementById('img2');
    img.style.visibility = 'hidden';
    console.log(" count1" + count1);
    if (count1 > 1) {
        var elem = document.getElementById("img21");
        elem.remove();
    }

    let template = '<img src="./images/wB.png" id="img11" alt="blue" style="width: 36px;">';
    arrdiv[newposition].innerHTML += template;
    console.log(" person1 play", person1[1]);
    changeMoney2(person2[1]);
}

function changeMoney1(p2) {
    var updateMoney = 0;
    if (p2 < d.length) {
        updateMoney = person1[2] - d[p2 - 1];
    } else {
        p2 = p2 % 11;
        updateMoney = person1[2] - d[p2 - 1];
    }
    person1[2] = updateMoney;
    if (updateMoney > 0) {
        document.querySelector('.item3').innerHTML = updateMoney;

    } else {
        document.querySelector('.item3').innerHTML = "Player 1 Win";
    }

}

function changeMoney2(p2) {
    var updateMoney = 0;
    if (p2 < d.length) {
        updateMoney = person2[2] - d[p2 - 1];
    } else {
        p2 = p2 % 11;
        updateMoney = person2[2] - d[p2 - 1];
    }
    person2[2] = updateMoney;
    if (updateMoney > 0) {
        document.querySelector('.item4').innerHTML = updateMoney;

    } else {
        document.querySelector('.item4').innerHTML = "Player 1 Win";
    }

}