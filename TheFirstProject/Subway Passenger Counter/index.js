let numDisplay = document.getElementById('num');
let saveText = document.getElementById('all-saved');
let addBtn = document.getElementById('plus-btn');
let saveBtn = document.getElementById('save-btn');
let resetBtn = document.getElementById('clr-btn');

let myNum = 0;
let oldOnes = [];

function showNum() {
  numDisplay.textContent = myNum;
}

addBtn.addEventListener('click', function () {
  myNum++;
  showNum();
});

saveBtn.addEventListener('click', function () {
  if (myNum > 0) {
    oldOnes.push(myNum);
    saveText.textContent = oldOnes.join(' - ');
    myNum = 0;
    showNum();
  }
});

resetBtn.addEventListener('click', function () {
  myNum = 0;
  showNum();
});

showNum();
