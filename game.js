const dicebtn = document
  .querySelector(".dicebtn")
  .addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerText = randomNumber;
  });
