let btn_menu = document.getElementById("hora_actual");
let hora_actual = new Date();
let hora_parseada = new Date().toLocaleDateString('es', { weekday:"long", year:"numeric", month:"long", day:"numeric"})
btn_menu.innerHTML = hora_parseada

let hora = document.getElementById("hora");
hora.innerHTML = hora_parseada