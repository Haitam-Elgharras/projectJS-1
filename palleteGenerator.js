nameC = document.querySelectorAll(".nameC");
colorC = document.querySelectorAll(".color");
refresh = document.querySelector(".refresh button");
box = document.querySelectorAll(".box");
// refresh.style.display="none"

const generatePalette = function () {
  let i = 0;
  nameC.forEach((e) => {
    let hex = "";
    while (hex.length != 6) {
      /*a random integer between 0 and 0xffffff 
      (which represents the maximum value that can be represented by a 6-digit hexadecimal number) */
      hex = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .toUpperCase();
    }
    hex = "#" + hex;
    e.textContent = hex;
    colorC[i].style.backgroundColor = e.textContent;
    const litleBox = box[i];
    box[i].addEventListener("click", () => copy(litleBox, hex));
    i++;
  });
};

const copy = (boxE, hexE) => {
  const hexElement = boxE.querySelector(".nameC");
  navigator.clipboard.writeText(hexE).then(() => {
    hexElement.textContent = "COPIED";
  });
  setTimeout(() => {
    hexElement.textContent = hexE;
  }, 1300);
};
window.onload = generatePalette;
refresh.onclick = generatePalette;
