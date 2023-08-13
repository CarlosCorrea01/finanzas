
//funcion para caclular el interes
function interesCompuesto(capital,interes,periodo,aporte){
    let r = (interes/100)/12
    let t = periodo*12
    let x = (1+r)
    let primera = Math.pow(x,t)
    let segunda = (1+r)
    let capitalFinal = capital*primera + aporte*((primera-1)/(segunda-1))

    return capitalFinal
}
//constructora de objetos (inversiones)
class Inversiones {
    constructor(info){
        this.plazo = info.plazo;
        this.capital = info.capital;
        this.interes = info.interes;
        this.aportes = info.aportes;
    
    }

}
//array donde se almacenan los objetos (inversiones)
const inversiones = []

//funcion agregar y calcular interes
function agregar(){
    //capturar valores
    let capitalInicial = document.getElementById("capitalInicial").value;
    let tasaInteres = document.getElementById("rentabilidad").value;
    let periodoAhorro = document.getElementById("plazo").value;
    let aportesMesuales = document.getElementById("aportes").value;
    //dar informacion y calcular
    alert(`Agrego correctamente su inversion con un capital inicial de $${capitalInicial} a un plazo de ${periodoAhorro} AÑOS, con aportes de $${aportesMesuales} MENSUALES a una tasa de interes del ${tasaInteres}% ANUAL`)
    let calculo = interesCompuesto(capitalInicial,tasaInteres,periodoAhorro,aportesMesuales).toFixed(2)
    alert(`Su capital al finalizar el plazo sera de $${calculo}`)
    alert(`De los cuales $${10*12*aportesMesuales} son aportes y $${calculo-(10*12*aportesMesuales)-capitalInicial} son intereses`)
    //agegar al array la nueva inversion
    inversiones.push(new Inversiones({
        plazo: periodoAhorro,
        capital: capitalInicial,
        interes: tasaInteres,
        aportes: aportesMesuales,
    }))
}
//Ejecutar la funcion cuando se preciona el boton
document.getElementById("agregar").onclick = function (){
    agregar();
}

