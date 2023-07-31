function interesCompuesto(capital,interes,periodo,aporte){
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
