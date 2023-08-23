/*function interesCompuesto(capital,interes,periodo,aporte){
    let r = (interes/100)/12
    let t = periodo*12
    let x = (1+r)
    let primera = Math.pow(x,t)
    let segunda = (1+r)
    let capitalFinal = capital*primera + aporte*((primera-1)/(segunda-1))

    return capitalFinal
}


let capitalInicial = Number(prompt("ingrese su capital inical"))
let tasaInteres = Number(prompt("Ingrese la tasa de interes anual estimada"))
let periodoAhorro = parseInt(prompt("Ingrese el tiempo que ahorrara en AÑOS"))
let aportesMesuales = Number(prompt("Ingrese monto del aporte mensual"))

if(capitalInicial==""){
    alert(`Por favor ingrese de un valor valido`)
}


let total = interesCompuesto(capitalInicial,tasaInteres,periodoAhorro,aportesMesuales).toFixed(2)
alert(`Con un capital inical de ${capitalInicial} a una tasa de interes del ${tasaInteres}% ANUAL y aportes mensuales de ${aportesMesuales} en ${periodoAhorro} AÑOS tendra un AHORRO TOTAL DE ARS$${total}`)
*/

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
    //Mensaje
    alert(`VAMOS A AGREGAR UNA NUEVA INVERSION`)
    //capturar valores
    let capitalInicial = Number(prompt("INGRESE SU CAPITAL INICIAL"))
    let tasaInteres = Number(prompt("INGRESE LA TASA DE INTERES ANUAL"))
    let periodoAhorro = parseInt(prompt("INGRESE PLAZO EN AÑOS"))
    let aportesMesuales = Number(prompt("INGRESE MONTO DE APORTES MENSUALES"))
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
//Ejecutar la funcion agregar inversion
agregar();
//pregunta si dedea agregar otra
let pregunta = prompt("Desea agregar otra? responda si o no")

while(pregunta != "no"){
    switch(pregunta){
        case "si":
            agregar(),
            alert(`Ahora tiene ${inversiones.length} cargadas`);
            for (const inversion of inversiones) {
                alert(`Sus inversiones son:
                -CAPITAL $${inversion.capital}
                -PLAZO ${inversion.plazo} AÑOS.
                -INTERES ${inversion.interes}% ANUAL
                -APORTES $${inversion.aportes} MENSUALES`)
            }
            break;
        default:
            alert(`Responda si o no`);
            break;
    }
    pregunta = prompt("Ingrese si o no")
}