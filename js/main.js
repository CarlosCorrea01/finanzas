
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
function agregarCalcular(){
    //capturar valores
    let capitalInicial = document.getElementById("capitalInicial").value;
    let tasaInteres = document.getElementById("rentabilidad").value;
    let periodoAhorro = document.getElementById("plazo").value;
    let aportesMesuales = document.getElementById("aportes").value; 
    //agegar al array la nueva inversion
    inversiones.push(new Inversiones({
        plazo: periodoAhorro,
        capital: capitalInicial,
        interes: tasaInteres,
        aportes: aportesMesuales,
    }))
    //Agregar al local
    sessionStorage.setItem("misinversiones",JSON.stringify(inversiones))
    //
    let calculo = interesCompuesto(capitalInicial,tasaInteres,periodoAhorro,aportesMesuales).toFixed(2)

    let caja = document.createElement("div")
    caja.className = "cajaInver"
    caja.innerHTML =`
        <p>CAPITAL:$${capitalInicial}; PLAZO: ${periodoAhorro} AÑOS; INTERES: ${tasaInteres}%; APORTES: $${aportesMesuales}</p>
        <h4>CAPITAL FINAL $${calculo}</h4>
        `
        document.body.append(caja)
}

//Ejecutar la funcion cuando se preciona el boton
document.getElementById("agregar").onclick = function (){
    agregarCalcular();
    
}
