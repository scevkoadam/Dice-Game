// Upozorenje: domaci rađen samostalno,
// te zbog toga kod nije optimalizovan
// Ipak, srećan sam što je igrica uspela.
// Iako je banalnost u pitanju, uživao sam radeći je.

var startBtn = document.querySelector('#startBtn');
var startView = document.querySelector('#startView');
var playView = document.querySelector('#playView');
var player1, player2;
var name1 = document.querySelector('.name1');
var name2 = document.querySelector('.name2');
var ukuprez1, ukuprez2;
var ukuprez = document.querySelector('.ukuprez');
var bacena1 = document.querySelector('#bacena1');
var bacena2 = document.querySelector('#bacena2');
var baci1Btn = document.querySelector('#baci1Btn');
var baci2Btn = document.querySelector('#baci2Btn');
var runda = document.querySelector('.runda');
var pponovoBtn = document.querySelector('#pponovoBtn');
var prva = document.querySelector('.prva');
var druga = document.querySelector('.druga');
var rndmBroj, rundaBroj, pom;
var promenaImena = true;



startBtn.addEventListener('click', startGame);
baci1Btn.addEventListener('click', actualisation1);
baci2Btn.addEventListener('click', actualisation2);
pponovoBtn.addEventListener('click', ponovo);

function startGame() {

  startView.style.display = "none";
  playView.style.display = "block";
  pponovoBtn.style.display = "none";
  prva.style.background = "white";
  druga.style.background = "white";

  rundaBroj = 1;
  pom = 0;
  rndmBroj = 0;
  ukuprez1 = 0;
  ukuprez2 = 0;
  baci1Btn.disabled = false;
  baci2Btn.disabled = false;

  if (promenaImena === true) {
    imena();
  }

  ukuprez.innerHTML = '<h4>Ukupan rezultat '+ukuprez1+' : '+ukuprez2+'</h4>';
  bacena1.innerHTML = '<h1>'+rndmBroj+'</h1>';
  bacena2.innerHTML = '<h1>'+rndmBroj+'</h1>';
  runda.innerHTML = '<h5>'+rundaBroj+'</h5>';
}

function imena() {
  player1 = prompt('Unesite ime prvog igrača');
  player2 = prompt('Unesite ime drugog igrača');
  player1 = '<h2>'+player1+'</h2>';
  player2 = '<h2>'+player2+'</h2>';
  name1.innerHTML = player1;
  name2.innerHTML = player2;
}


function actualisation1() {
  rndmBroj = Math.ceil(Math.random()*6);
  bacena1.innerHTML = '<h1>'+rndmBroj+'</h1>';
  ukuprez1 += rndmBroj;
  ukuprez.innerHTML = '<h4>Ukupan rezultat '+ukuprez1+' : '+ukuprez2+'</h4>';
  pom++;
  if (pom%2 === 0){
    rundaBroj++;
  }

  if (rundaBroj <= 10) {
    runda.innerHTML = '<h5>'+rundaBroj+'</h5>';
    baci1Btn.disabled = true;
    baci2Btn.disabled = false;
  } else {
    baci1Btn.disabled = true;
    baci2Btn.disabled = true;
    pponovoBtn.style.display = "block";

    if (ukuprez1 > ukuprez2) {
      prva.style.background = "lightgreen";
    } else if (ukuprez2 > ukuprez1) {
      druga.style.background = "lightgreen";
    } else {
      prva.style.background = "lightgreen";
      druga.style.background = "lightgreen";
    }
  }
}

function actualisation2() {
  rndmBroj = Math.ceil(Math.random()*6);
  bacena2.innerHTML = '<h1>'+rndmBroj+'</h1>';
  ukuprez2 += rndmBroj;
  ukuprez.innerHTML = '<h4>Ukupan rezultat '+ukuprez1+' : '+ukuprez2+'</h4>';
  pom++;
  if (pom%2 === 0){
    rundaBroj++;
  }

  if (rundaBroj <= 10) {
    runda.innerHTML = '<h5>'+rundaBroj+'</h5>';
    baci1Btn.disabled = false;
    baci2Btn.disabled = true;
  } else {
    baci1Btn.disabled = true;
    baci2Btn.disabled = true;
    pponovoBtn.style.display = "block";

    if (ukuprez1 > ukuprez2) {
      prva.style.background = "lightgreen";
    } else if (ukuprez2 > ukuprez1) {
      druga.style.background = "lightgreen";
    } else {
      prva.style.background = "lightgreen";
      druga.style.background = "lightgreen";
    }
  }
}

function ponovo() {
  promenaImena = confirm("Da li zelite da promenite imena?\nOK <=> DA\nCancel <=> NE")
  startGame();
}
