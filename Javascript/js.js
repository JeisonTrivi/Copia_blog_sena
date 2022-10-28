let btn_menu = document.getElementById("hora_actual");
let hora_actual = new Date();
let hora_parseada = new Date().toLocaleDateString('es', { weekday:"long", year:"numeric", month:"long", day:"numeric"})
btn_menu.innerHTML = hora_parseada
let solo_hora =hora_actual.toLocaleTimeString()

let hora = document.getElementsByClassName("hora");
console.table(solo_hora)
for (let index = 0; index < hora.length; index++) {
    hora[index].innerHTML = solo_hora
    
}