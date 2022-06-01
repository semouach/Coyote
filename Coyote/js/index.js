
var landingPage = document.getElementById("landing-page");
var gamePage = document.getElementById("game-page");
var restartButton = document.getElementById("restart");
var arrivedPlayers = [];

const COYOTE_RED = "red";
const COYOTE_YELLOW = "yellow";
const COYOTE_SPEED = 10;

function go() {
  landingPage.style.display ="none";
  gamePage.style.display = "flex";
  var bipbip = document.getElementById("bipbip");
  bipbip.className = "animation";
  restartButton.style.display = "none";
}

document.addEventListener("keydown", onKeyDown);


function onKeyDown(event) {

  var redCoyote = document.getElementById(COYOTE_RED);
  var yellowCoyote = document.getElementById(COYOTE_YELLOW);
  var leftRed = parseInt(window.getComputedStyle(redCoyote).getPropertyValue("left"));
  var leftYellow = parseInt(window.getComputedStyle(yellowCoyote).getPropertyValue("left"));
  var coyoteWidth = parseInt(window.getComputedStyle(redCoyote).getPropertyValue("width")) / 2;

  if (event.keyCode === 39)
    updatePlayerPosition(COYOTE_RED, leftRed += COYOTE_SPEED);
  else if (event.keyCode === 90)
    updatePlayerPosition(COYOTE_YELLOW, leftYellow += COYOTE_SPEED);
  var windowWidth = parseInt(window.innerWidth) - coyoteWidth;
  if (leftRed > windowWidth && !arrivedPlayers.includes(COYOTE_RED)) 
    checkWin(COYOTE_RED);
  
  else if (leftYellow > windowWidth && !arrivedPlayers.includes(COYOTE_YELLOW))
    checkWin(COYOTE_YELLOW);

  function checkWin(player) {
    restartButton.style.display = "block";
    var message = " perd.";

    if (arrivedPlayers.length === 0)
      message = " gagne !";

    alert("Coyote " + getCoyoteName(player) + message);
    arrivedPlayers.push(player);
  }

  function getCoyoteName(coyote){
    if (coyote === "red")
      return "rouge";
    return "jaune";
  }
}

function restartGame() {
  updatePlayerPosition(COYOTE_RED, 0);
  updatePlayerPosition(COYOTE_YELLOW, 0);

  gamePage.style.display = "none";
  landingPage.style.display = "flex";
  arrivedPlayers = [];
}

function updatePlayerPosition(player, position) {
  var coyote = document.getElementById(player);

  if (coyote != undefined)
    coyote.style.left = position + "px";
}

restartButton.addEventListener("click", restartGame);