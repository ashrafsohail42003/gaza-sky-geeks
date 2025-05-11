const inputField = document.getElementById("input-link");
const addBtn = document.getElementById("btn-add");
const saveTabBtn = document.getElementById("btn-tab");
const clearBtn = document.getElementById("btn-clear");
const listDisplay = document.getElementById("list-display");

let savedLinks = [];

const linksFromStorage = JSON.parse(localStorage.getItem("myLinks"));
if (linksFromStorage) {
  savedLinks = linksFromStorage;
  renderLinks(savedLinks);
}

addBtn.addEventListener("click", function () {
  const link = inputField.value.trim();
  if (link) {
    savedLinks.push(link);
    inputField.value = ""; 
    localStorage.setItem("myLinks", JSON.stringify(savedLinks));
    renderLinks(savedLinks);
  }
});

saveTabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    savedLinks.push(tabs[0].url);
    localStorage.setItem("myLinks", JSON.stringify(savedLinks));
    renderLinks(savedLinks);
  });
});

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  savedLinks = [];
  renderLinks(savedLinks);
});

function renderLinks(links) {
  listDisplay.innerHTML = ""; 
  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank"; 
    a.textContent = link;
    li.appendChild(a);
    listDisplay.appendChild(li);
  });
}
