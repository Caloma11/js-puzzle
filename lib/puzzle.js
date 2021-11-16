// todo
const hasWon = () => {

  let result = ""

  allTds.forEach((td) => {
    result += td.innerText;
  })

  const correct = '123456789101112131415'

  return (result === correct)

}

const checkWin = () => {
  if (hasWon()) {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
  }
}



// grab all the tds

const allTds = document.querySelectorAll('td');

const canMove = (td) => {
  const tdColumn = td.cellIndex;
  const tdRow = td.parentElement.rowIndex;

  const emptyGuy = document.querySelector('.empty');

  const emptyColumn = emptyGuy.cellIndex;
  const emptyRow = emptyGuy.parentElement.rowIndex;

  return ((tdColumn === emptyColumn && tdRow === emptyRow + 1) ||
  (tdColumn === emptyColumn && tdRow === emptyRow - 1) ||
  (tdRow === emptyRow && tdColumn === emptyColumn + 1) ||
  (tdRow === emptyRow && tdColumn === emptyColumn - 1))

}

const move = (event) => {
  const td = event.currentTarget;

  if (canMove(td)) {
    const emptyGal = document.querySelector('.empty');
    emptyGal.classList.remove("empty");
    td.classList.add("empty");

    emptyGal.innerText = td.innerText;
    td.innerText = "";
  }
}

const listenToClick = (td) => {
  td.addEventListener('click', (event) => {
    move(event)
    checkWin();
  })
}
// add event listener to each td

allTds.forEach(listenToClick)



// if so, move it

