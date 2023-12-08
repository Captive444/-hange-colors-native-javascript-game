
// Игра смена цветов на JavaScript

let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];

let field = document.querySelector('#field');

for (let tr = 0; tr < rows; tr++) {
	let row = document.createElement('tr');
  
	for (let td = 0; td < cols; td++) {
	  let cell = document.createElement('td');

	  cell.classList.add(`${randomElemFromArray(colors)}`)
	   cell.addEventListener('click', changeColor);
	  row.appendChild(cell);

	}

	field.appendChild(row);

  }

function  randomElemFromArray(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];	
  return randomElement;
}

let elem = document.querySelector('#elem')
let count = 0;
function changeColor(event) {
	let cell = event.target;
	
  
	let currentColor = cell.classList[0];
	let currentIndex = colors.indexOf(currentColor);
	let nextIndex = (currentIndex + 1) % colors.length;
	let nextColor = colors[nextIndex];
	cell.classList.remove(currentColor);
	cell.classList.add(nextColor);

	let victory = document.querySelector('#victory');
	let arr = [];
	let cells = document.querySelectorAll('table td');
  
	for (let i = 0; i < cells.length; i++) {
	  arr.push(cells[i].getAttribute('class'));
	
	}
  count++;
	  elem.textContent = count
	let lastClickedColor = cell.getAttribute('class');
	let filteredArr = arr.filter(color => color === lastClickedColor);
  if(9 === filteredArr.length) {
		victory.textContent = `Вы победили за ${count} шагов!`
		elem.textContent = ''
	  }
	  



  }
  

		
	 







