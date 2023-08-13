
let capitalInicial = document.getElementById("capitalInicial").value;
let tasaInteres = document.getElementById("rentabilidad").value;
let periodoAhorro = document.getElementById("plazo").value;
let aportesMesuales = document.getElementById("plazo").value;

function interesCompuesto(capital,interes,periodo,aporte){
    let r = (interes/100)/12
    let t = periodo*12
    let x = (1+r)
    let primera = Math.pow(x,t)
    let segunda = (1+r)
    let capitalFinal = capital*primera + aporte*((primera-1)/(segunda-1))

    return capitalFinal
}

class Inversiones {
    constructor(info){
        this.plazo = info.plazo;
        this.capital = info.capital;
        this.interes = info.interes;
        this.aportes = info.aportes;
    
    }

}
const inversiones = []


function agregar(){
    let capitalInicial = document.getElementById("capitalInicial").value;
    let tasaInteres = document.getElementById("rentabilidad").value;
    let periodoAhorro = document.getElementById("plazo").value;
    let aportesMesuales = document.getElementById("plazo").value;
    
    inversiones.push(new Inversiones({
        plazo: periodoAhorro,
        capital: capitalInicial,
        interes: tasaInteres,
        aportes: aportesMesuales,
    }))
    alert(`Agrego correctamente su inversion con un capital inicial de $${capitalInicial} a un plazo de ${periodoAhorro} AÑOS, con aportes de $${aportesMesuales} MENSUALES a una tasa de interes del ${tasaInteres}% ANUAL`)
}

document.getElementById("agregar").onclick = function (){
    agregar();
}


//arrays
//inversiones.push(5) agrega al final
// inversiones.pop() saca al final de arreglo
// inversiones.shift() saca al principio
// inversiones.splice(1,2) Elimina varios elementos por el orden
// inversiones.indexof() Posicion de arreglo
//inversiones.includes () Busca si esta en el arreglo
