let hearts = 0;
let coins = 100;
let copies = 0;

const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");

const cards = document.querySelectorAll("#cardGrid .card");

// heart button
for (const card of cards) {
  heartBtn = card.querySelector(".heart");
  heartBtn.addEventListener("click", function () {
    hearts += 1;
    heartCount.innerText = hearts;
    // heartBtn.innerHTML = '<span class="text-xl"><i class="fa-solid fa-heart" style="color:red"></i></span>';
  });
}

//copy number
for (const card of cards) {
  const copyBtn = card.querySelector(".copy");
  const serviceNumber = card.querySelector(".number").textContent;

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(serviceNumber);

    copies += 1;
    copyCount.innerText = copies;

    alert("Copied: " + serviceNumber);
  });
}

// Call Number
for (const card of cards) {
  const callBtn = card.querySelector(".call");
  const serviceName = card.querySelector("h4").textContent;
  const serviceNumber = card.querySelector(".number").textContent;

  callBtn.addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins to make a call. You need at least 20 coins.");
      return;
    }

    coins -= 20;
    if (coins < 0) {
      coins = 0;
    }
    coinCount.innerText = coins;
    alert("Calling: " + serviceName + " at " + serviceNumber);
  });
}
