let rpsUser = 0;
let rpsBot = 0;

let numberGame = () => {
    let userNum = parseInt(prompt('Guess my number 1-10:'));
    let botNum = Math.floor(Math.random()*10 + 1);
    //console.log(botNum);
    while(!userNum){
        userNum = parseInt(prompt('please enter number 1-10:'));
        //console.log(userNum);
    }
    console.log(botNum);
    let element = document.getElementById('mensaje');
    if(botNum==userNum){
        element.innerHTML = `Correct!!!! you guess my number ${botNum}`;
        element.classList.add("alert", "alert-success");
        //"alert alert-success"
    } else {
        element.innerHTML = `Wrong!!!! my number is ${botNum}`;
        element.classList.add("alert", "alert-danger");
        //"alert alert-danger"
    }
}

let countWords = () => {
    let re = /[a-z0-9]*\w/gm;
    let txt = document.getElementById('textInput').value;
    //console.log(txt.match(re).length);
    document.getElementById('resultCount').innerHTML = `${txt.match(re).length} words`;
}

let rpsGame = (rps) => {
    let botPick = randomPick();
    //console.log(rps.path[0].innerText);
    let userPick = rps.path[0].innerText;

    //rock 1 , paper 2, scissors 3
    if(botPick==1){
        botPick = 'Rock';
    } else if (botPick == 2){
        botPick = 'Paper';
    } else {
        botPick = 'Scissors';
    }

    if(userPick == botPick){
        document.getElementById('rpsWinLoose').innerHTML = `That was a tie, both picked ${userPick}`;
    } else if(userPick=='Rock' && botPick=='Scissors'){
        document.getElementById('rpsWinLoose').innerHTML = `You win`;
        document.getElementById('rpsWinLoose').classList.add("alert", "alert-success");
        rpsUser++;
    } else if(userPick=='Rock' && botPick=='Paper'){
        document.getElementById('rpsWinLoose').innerHTML = `You Loose`;
        document.getElementById('rpsWinLoose').classList.add("alert", "alert-danger");
        rpsBot++;
    } else if(userPick=='Paper' && botPick=='Scissors'){
        document.getElementById('rpsWinLoose').innerHTML = `You Loose`;
        document.getElementById('rpsWinLoose').classList.add("alert", "alert-danger");

        rpsBot++;
    } else if(userPick=='Paper' && botPick=='Rock'){
        document.getElementById('rpsWinLoose').innerHTML = `You win`;
        document.getElementById('rpsWinLoose').classList.add("alert", "alert-success");
        rpsUser++;
    } else if(userPick=='Scissors' && botPick=='Paper'){
        document.getElementById('rpsWinLoose').innerHTML = `You win`;
        document.getElementById('rpsWinLoose').classList.add("alert", "alert-success");
        rpsUser++;
    } else if(userPick=='Scissors' && botPick=='Rock'){
        document.getElementById('rpsWinLoose').innerHTML = `You Loose`;
        document.getElementById('rpsWinLoose').classList.add("alert", "alert-danger");
        rpsBot++;
    }

    document.getElementById('rpsResult').innerHTML = `You ${rpsUser} : Bot ${rpsBot}`

}
let randomPick = () =>{
    return Math.floor(Math.random()*3 + 1);
}
document.getElementById("rock").addEventListener("click", rpsGame);
document.getElementById("paper").addEventListener("click", rpsGame);
document.getElementById("scissors").addEventListener("click", rpsGame);

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}
    
function display_ct() {
    var x = new Date()
    var x1=x.toUTCString();// changing the display to UTC string
    var x2 = x.toLocaleString();
    var hh = x.getHours();
    var mm = x.getMinutes()
    var ss = x.getSeconds();
    document.getElementById('localTime').innerHTML = `<h4>${hh}:${mm}:${ss}</h4>`;
    document.getElementById('localTime').innerHTML += `<h4>${x2}</h4>`
    display_c();
}

window.onload = display_ct();

let imgId = 0;
let displayImg = () => {
    // background-image: url(img/contBcg-0.jpeg)
    document.getElementById('imgGallery').style.backgroundImage = `url(img/contBcg-${imgId}.jpeg)`;
}
let changeImgPlus = () => {
    imgId++;
    if(imgId>4){
        imgId=0;
    }
    document.getElementById('imgGallery').style.backgroundImage = `url(img/contBcg-${imgId}.jpeg)`;
}
let changeImgMin = () => {
    imgId--;
    if(imgId<0){
        imgId=4;
    }
    document.getElementById('imgGallery').style.backgroundImage = `url(img/contBcg-${imgId}.jpeg)`;
}
window.onload = displayImg();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function dealerLogic() {
//     blackjackGame['isStand'] = true;
//     while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
//         let card = randomCard();
//         updateScore(card, DEALER);
//         showCard(card, DEALER);
//         showScore(DEALER);
//         await sleep(1000);
//     }

const URL = 'https://randomuser.me/api/?results=10';

let fetchUsers = () => {
    fetch(URL).then(response => response.json())
                .then(data => {
                    console.log(data.results);
                    showUsers(data.results);
                })
                .catch(error => console.log(error))
}
async function showUsers(users) {
    let d = document.getElementById('users');
    //console.log((users[0]));
    users.forEach(async user => {
        //console.log(user);
        //d.innerHTML += `<div class="btn">${user.name.first} ${user.name.last} <img src="${user.picture.medium}"></div>`
        //await sleep(1000);
        showOneUser(user);
        
    })
    await sleep(1000);
    //alert('termino');
}
let showOneUser = async (user) => {
    let d = document.getElementById('users');
    //await sleep(1000);

    d.innerHTML += `<div>${user.name.first} ${user.name.last}<br><img src="${user.picture.medium}"></div>`
    //await sleep(1000);

}
let addNewUser = () => {
    let d = document.getElementById('users');
    let url_1user = 'https://randomuser.me/api/?results=1';
    fetch(url_1user).then(response => response.json())
                    .then(data =>{
                        //console.log(data.results[0]);
                        showOneUser(data.results[0]);
                    })
                    .catch(error => console.log(error))
    
}
window.onload = fetchUsers;

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });