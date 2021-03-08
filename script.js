document.addEventListener("DOMContentLoaded", start);

function start() {
  writetext();
}

function writetext() {
  console.log("writetext");
  let cooltext = document.querySelector(".cooltext").textContent;
  let container = document.querySelector(".cooltext");

  container.innerHTML = "";

  let letterArray = [];

  for (let i = 0; i < cooltext.length; i++) {
    let thisLetter = cooltext.substring(i, i + 1);

    letterArray.push(thisLetter);
  }

  for (let l = 0; l < letterArray.length; l++) {
    let thisspan = document.createElement("span");
    console.log("logger");
    if (letterArray[l] == " ") {
      thisspan.innerHTML = "-";
      thisspan.style.color = "white";
    } else {
      thisspan.innerHTML = letterArray[l];
    }
    container.appendChild(thisspan);
    thisspan.classList = "letterfadein";
    thisspan.style.setProperty("--delay", l / 70 + "s");
  }
}
