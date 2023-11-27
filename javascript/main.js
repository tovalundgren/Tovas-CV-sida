//JavaScript kopierat från https://codepen.io/tommybickerdike/pen/vLxNmd
//justerat en del i koden och kommenterat för att förstå den, göra den mer organiserad och lättläst. Har även ändrat så att snön täcker hela webbsidan, snowmax till 100 för fler snöflingor, ändrat värdena i snowcolor för att göra snöflingorna synligare och ändrat sinkspeed för att öka hastigheten.

//deklarera variabler
const snowmax = 100;
const snowcolor = ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.7)"];
const snowletter = ["*", "❆", "❅", "❄"];
const sinkspeed = 1.2;
const snowmaxsize = 30;
const snowminsize = 8;
let snow = [];
let marginbottom, marginright;
let crds = [];
let lftrght = [];
let x_mv = [];

//skapa snöflingor när sidan laddas
for (let i = 0; i <= snowmax; i++) {
  document.write(`
    <span id='s${i}' class='snowflake' style='pointer-events:none;z-index:9999;position:fixed;top:-${snowmaxsize}px'>
      ${snowletter[randommaker(snowletter.length)]}
    </span>
  `);
}

//hantera event
window.onload = () => {
  initsnow();
  handleResize();
};

window.onresize = handleResize;

//funktion för att generera ett random nummer
function randommaker(o) {
  return Math.floor(o * Math.random());
}

//hantera ändring av skärmens storlek för att justera snöflingorna positon -> göra dem responsiva
function handleResize() {
  marginbottom = document.body.scrollHeight;
  marginright = window.innerWidth - 15;

  for (let i = 0; i <= snowmax; i++) {
    snow[i].posx = Math.random() * marginright;
    snow[i].posy = Math.random() * marginbottom;
    snow[i].style.left = `${snow[i].posx}px`;
    snow[i].style.top = `${snow[i].posy}px`;
  }
}

//starta snöanimation
function initsnow() {
  marginbottom = document.body.scrollHeight;
  marginright = window.innerWidth - 15;
  const o = snowmaxsize - snowminsize;

  //starta varje snöflinga
  for (let i = 0; i <= snowmax; i++) {
    crds[i] = 0;
    lftrght[i] = Math.random();
    x_mv[i] = 0.03 + Math.random() / 10;
    snow[i] = document.getElementById(`s${i}`);
    snow[i].size = randommaker(o) + snowminsize;
    snow[i].style.fontSize = `${snow[i].size}px`;
    snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
    snow[i].sink = sinkspeed * snow[i].size / 5;
    snow[i].posx = Math.random() * marginright;
    snow[i].posy = Math.random() * marginbottom;
    snow[i].style.left = `${snow[i].posx}px`;
    snow[i].style.top = `${snow[i].posy}px`;
  }

  //kalla på animationen och köra den
  movesnow();
}

//flytta snöflingorna på skärmen
function movesnow() {
  for (let i = 0; i <= snowmax; i++) {
    crds[i] += x_mv[i];
    snow[i].posy += snow[i].sink;
    snow[i].style.left = `${snow[i].posx + lftrght[i] * Math.sin(crds[i])}px`;
    snow[i].style.top = `${snow[i].posy}px`;

    //återställa snöflingans position om den når botten av sidan eller hamnar utanför
    if (snow[i].posy >= marginbottom - snow[i].size || parseInt(snow[i].style.left) > marginright - snow[i].size) {
      snow[i].posx = Math.random() * marginright;
      snow[i].posy = 0;
    }
  }

  //kalla på movesnow med en fördröjning på animationen
  setTimeout(movesnow, 50);
}