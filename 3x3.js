const originalOrder = Array.from({ length: 9 }, (_, i) => i + 1);

function shuffleNumbers() {
  const shuffledNumbers = originalOrder.sort(() => Math.random() - 0.5);
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell, index) => {
    cell.textContent = shuffledNumbers[index];
  });
}
