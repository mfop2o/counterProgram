const decreaseBtn = document.getElementById("decreaseBtn"); // Corrected ID
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn"); // Corrected ID
const countLabel = document.getElementById("countLabel"); // Removed extra space

let count = 0;

increaseBtn.addEventListener("click", () => {
    count++;
    countLabel.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    count--;
    countLabel.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countLabel.textContent = count;
});

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(4));