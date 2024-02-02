let map = L.map('map').setView([-6.2367,-77.8567],6)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,13);
})

var publicSectorBtn = document.getElementById("public_sector");
var juridicSectorBtn = document.getElementById("juridic_sector");
var educationSectorBtn = document.getElementById("education_sector");
var saludSectorBtn = document.getElementById("salud_sector");
var bloque1 = document.getElementById("bloque1");
var bloque2 = document.getElementById("bloque2");
var bloque3 = document.getElementById("bloque3");
var bloque4 = document.getElementById("bloque4");

function mostrarBloque1() {
  bloque1.style.display = "flex";
  bloque2.style.display = "none";
  bloque3.style.display = "none"
  bloque4.style.display = "none";
}
mostrarBloque1()

function mostrarBloque2() {
  bloque3.style.display = "none"
  bloque2.style.display = "flex";
  bloque1.style.display = "none";
  bloque4.style.display = "none";
}

function mostrarBloque3() {
  bloque3.style.display = "flex"
  bloque2.style.display = "none";
  bloque1.style.display = "none";
  bloque4.style.display = "none";
}

function mostrarBloque4() {
  bloque4.style.display = "flex";
  bloque3.style.display = "none";
  bloque2.style.display = "none";
  bloque1.style.display = "none";
}

publicSectorBtn.addEventListener("click", mostrarBloque1);
juridicSectorBtn.addEventListener("click", mostrarBloque2);
educationSectorBtn.addEventListener("click", mostrarBloque3);
saludSectorBtn.addEventListener("click", mostrarBloque4);

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})