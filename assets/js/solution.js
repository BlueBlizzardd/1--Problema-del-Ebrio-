const html = document.querySelector(".result"); 
const container = document.querySelector(".grid");
let sims = prompt("Selecciona numero de simulaciones: ");
let res = 1;

if(sims > 0) {
    for(let i = 0; i < sims; i++) {
      res = res * (16 / 221);
    }

    html.innerHTML = `La probabilidad resultante es de ${res.toString()} o ${(res*100).toFixed(10).toString()}%`;
} else {
    alert("El numero de simulaciones tiene que ser mayor que 0");
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(21, 21);
