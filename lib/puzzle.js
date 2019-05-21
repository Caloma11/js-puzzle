// todo
// const hintButton = document.querySelector('#show-hint');
// const hint = document.querySelector('.hint');

// hintButton.addEventListener('click', () => {
//   hint.classList.toggle('active');
// })

// Getting all the tiles

const tiles = document.querySelectorAll("td");


// Checking if a tile can move

const canMove = (tile) => {
	const empty = document.querySelector(".empty");

	// Find the position of the empty tile

	const emptRow = empty.parentElement.rowIndex;
	const emptCol = empty.cellIndex;

	// Find the position of the clicked tile

	const tileRow = tile.parentElement.rowIndex;
	const tileCol = tile.cellIndex;
	
	// Check if the positions allow a move

	return (
	emptRow === tileRow && emptCol === tileCol - 1 ||
	emptRow === tileRow && emptCol === tileCol + 1 ||
	emptRow === tileRow - 1 && emptCol === tileCol ||
	emptRow === tileRow + 1 && emptCol === tileCol
	)
}


// "Moving" a tile

const moveIt = (tile) => {
	const empty = document.querySelector(".empty");
	const tileText = tile.innerText;
	empty.innerText = tileText;
	tile.innerHTML = "";
	tile.classList.add("empty");
	empty.classList.toggle("empty");
}

// Checking if the user won based on the tiles order

const notSuck = () => {
	const tileArgh = Array.from(tiles);
	const order = tileArgh.map((element) => {
		return Number.parseInt(element.innerText, 10);
	})
	const key = order.join("");
	const notSuckingAtLifeTooHard = "123456789101112131415NaN";

	if (key === notSuckingAtLifeTooHard) {
		alert("You will never get these seconds of your life back");
	}
}

// Making all the tiles respond when clicked

const bindTiles = () => {
	tiles.forEach((tile) => {
		tile.addEventListener('click', () => {
	  if (canMove(tile)) {
	  	moveIt(tile);
	  	notSuck();
	  }
		});
	})
}

// Calling the 'bindTiles' function

bindTiles();
