let calculo = (cap,tasa,plazo,aporte) =>{
    let r = (tasa/100)/12
    let t = plazo*12
    let x = (1+r)
    let x1 =Math.pow(x,t)
    let balance = (cap*x1 + aporte*((x1-1)/(x-1))).toFixed(0)
    return balance;
}

//Constructor de objetos Inversiones
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
//M
function calcular(){
    let cap = document.getElementById("capIni").value;
    let tasa = document.getElementById("tasa").value;
    let plazo = document.getElementById("plazo").value;
    let aporte = document.getElementById("aportes").value; 
    
    let balFinal = calculo(cap,tasa,plazo,aporte)
    let bal = document.getElementById("balance")
    bal.innerText = `$${balFinal}`
    let tApor = document.getElementById(`aportesTotales`)
    tApor.innerText = `$${parseFloat(cap)+parseFloat(plazo*12*aporte)}`
    let tInteres = document.getElementById(`interesTotal`)
    tInteres.innerText =`$${balFinal-(parseFloat(cap)+parseFloat(plazo*12*aporte))}`
}

function guardar(){
    let cap = document.getElementById("capIni").value;
    let tasa = document.getElementById("tasa").value;
    let plazo = document.getElementById("plazo").value;
    let aporte = document.getElementById("aportes").value; 
    inversiones.push(new Inversiones({
        plazo: plazo,
        capital: cap,
        interes: tasa,
        aportes: aporte,
    }))
    //Agregar al local
    localStorage.setItem("misinversiones",JSON.stringify(inversiones))
}




document.getElementById("calcular").onclick = ()=>{
    let check = document.getElementById(`ch1`).checked;
    switch (check) {
        case true :
            guardar();
            calcular();
            break;
    
        default:
            calcular();
            break;
    }
}

document.getElementById("reiniciar").onclick = ()=>{
location.reload();
}

