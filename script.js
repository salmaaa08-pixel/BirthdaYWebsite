const correctPasscode = "170806";

const errorMsg = document.getElementById("error-msg");
const lockScreen = document.getElementById("lock-screen");
const celebrationPage = document.getElementById("celebration-page");
const mainPage = document.getElementById("main-page");

let enteredCode = "";
const dots = document.querySelectorAll(".dot");
const keys = document.querySelectorAll(".key[data-num]");
const deleteKey = document.getElementById("delete-key");
const enterKey = document.getElementById("enter-key");
const continueBtn = document.getElementById("continue-btn");

keys.forEach(function(key) {
  key.addEventListener("click", function() {
    if (enteredCode.length < 6) {
      enteredCode += key.getAttribute("data-num");
      updateDots();
    }
  });
});

deleteKey.addEventListener("click", function() {
  enteredCode = enteredCode.slice(0, -1);
  updateDots();
});

enterKey.addEventListener("click", checkPasscode);

function updateDots() {
  dots.forEach(function(dot, index) {
    if (index < enteredCode.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
  });
}

function checkPasscode() {
  if (enteredCode === correctPasscode) {
    lockScreen.classList.add("hidden");
    celebrationPage.classList.remove("hidden");
    launchConfetti();
  } else {
    errorMsg.textContent = "Wrong passcode, try again 💗";
    enteredCode = "";
    updateDots();
  }
}

continueBtn.addEventListener("click", function() {
  celebrationPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
});


const cupcake = document.getElementById("cupcake");
const balloon = document.getElementById("balloon");
const present = document.getElementById("present");

const cupcakeMessage = "You make everything sweeter 🧁";
const balloonMessage = "Here's to another year of you shining bright 🧁";


cupcake.addEventListener("click", function() {
  showHiddenNote(cupcakeMessage, cupcake);
});

balloon.addEventListener("click", function() {
  showHiddenNote(balloonMessage, balloon);
});




function showHiddenNote(message, eggElement) {
  const note = document.createElement("div");
  note.classList.add("popup-note");
  note.textContent = message;

  eggElement.parentElement.appendChild(note);

const eggTop = eggElement.offsetTop;
  const eggLeft = eggElement.offsetLeft;
  const eggWidth = eggElement.offsetWidth;

  note.style.top = (eggTop + 15) + "px";
  note.style.left = (eggLeft + eggWidth + 15) + "px";

  setTimeout(function() {
    note.remove();
  }, 2500);
}
function launchConfetti() {
  const colors = ["#f3a9bd", "#f9dde4", "#ffd6a5", "#fff0f3", "#d88ba0"];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti");

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(piece);

    setTimeout(function() {
      piece.remove();
    }, 5000);
  }
}
