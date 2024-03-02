// selected all html id
const resetBtn = document.getElementById("reset-btn");
const submitBtn = document.getElementById("submit-btn");
const inputBox = document.getElementById("input-box");
const allText = document.getElementById("all-text");
const outPutText = document.getElementById("output-text");

// window.onload function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  resetBtn.addEventListener("click", function () {
    inputBox.value = "";
    allText.style.display = "none";
  });

  submitBtn.addEventListener("click", submitFrom);

  inputBox.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      submitFrom();
    }
  });
}

function submitFrom() {
  const name = inputBox.value;
  inputBox.value = "";
  if (!name) {
    alert("Please provide your name!");
  } else {
    allText.style.display = "block";
    outPutText.innerHTML = name;
  }
}
