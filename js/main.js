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
    sessionStorage.setItem("misinversiones",JSON.stringify(inversiones))
}

//ver inversiones cargadas
let misGuardados = document.getElementById("misGuardados")
const renderisado = (inversiones)=>{
    misGuardados.innerHTML = ""
    inversiones.forEach(item => {
        let div = document.createElement(`div`);
        div.className = "d-flex justify-content-center m-2 border border-success border-2"
        div.innerHTML = `
        <p class="m-3 fs-6 fw-bold">CAPITAL:$${item.capital}</p>
        <p class="m-3 fs-6 fw-bold">PLAZO:${item.plazo} AÑOS</p>
        <p class="m-3 fs-6 fw-bold">RENDIMIENTO:${item.interes}</p>
        <p class="m-3 fs-6 fw-bold">APORTES:$${item.aportes} MENSUALES</p>
        <p class="m-3 fs-6 fw-bold">BALANCE FINAL:$${calculo(item.capital,item.interes,item.plazo,item.aportes)}</p>
        `;
        misGuardados.append(div);
    });
}


document.getElementById("calcular").onclick = ()=>{
    Swal.fire({
        icon: 'question',
        title: 'Deseas guardar los datos?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `Solo calcular`,
      }).then((result) => {
        if (result.isConfirmed) {
            guardar();
            calcular();
            renderisado(inversiones);
          Swal.fire('Guardado', '', 'success')
        } else if (result.isDenied) {
            calcular();
          Swal.fire('Calculo realizado', '', 'info')
        }
      })
}
document.getElementById("reiniciar").onclick = ()=>{
    location.reload();
    sessionStorage.clear();
}
/*
let datadolar = document.getElementById("dolar");

fetch("https://dolarapi.com/v1/dolares")
  .then(response => response.json())
  .then(data => 
    data.forEach(key =>{
        let div = document.createElement(`div`);
        div.className = "d-flex justify-content-center m-2 border border-success border-2"
        div.innerHTML = `
        <div>
        <p class=" fs-6 fw-bold">DOLAR:${key.nombre}</p>
        <p class="fs-6 fw-bold">COMPRA:${key.compra}</p>
        <p class=" fs-6 fw-bold">VENTA:${key.venta}</p>
        </div>
        `;
        datadolar.append(div)
    })) ;

*/

let dolarblue = document.getElementById("dolarblue");
fetch("https://dolarapi.com/v1/dolares")
  .then(response => response.json())
  .then(data => 
    dolarblue.innerHTML = `
        <h2 class="">Dolar ${data[1].nombre}</h2>
        <div class="d-flex justify-content-center w-100">
            <p class="m-2 fs-3 fw-bold text-success">C: $${data[1].compra}</p>
            <p class="m-2 fs-3 fw-bold text-success">V: $${data[1].venta}</p>
        </div>
    `
);

let otros = document.getElementById("otrosdolar");
fetch("https://dolarapi.com/v1/dolares")
  .then(response => response.json())
  .then(data => {
    let exclu = data[1];
    data.forEach(item=>{
        if(item!==exclu){
            let div = document.createElement(`div`);
            div.className = "col m-1"
            div.innerHTML = `
            <div class=" d-flex justify-content-around align-items-center border border-success border-2">
            <p class="fs-4">${item.nombre}</p>
            <div class="d-flex justify-content-center">
              <p>compra</p>
              <p class="ms-2 fs-4">$${item.compra}</p>
            </div>
            <div  class="d-flex justify-content-center ">
              <p>venta</p>
              <p class="ms-2 fs-4">$${item.venta}</p>
            </div>
            </div>
        `;
        otros.append(div);
        }
    })
  }
    
);
  
/*<p class="fs-4">Dolar oficial</p>
              <div class="d-flex justify-content-center">
                <p>compra</p>
                <p class="ms-2 fs-4">$55</p>
              </div>
              <div  class="d-flex justify-content-center ">
                <p>venta</p>
                <p class="ms-2 fs-4">$55</p>
              </div>

<div class="bg-primary d-flex justify-content-around align-items-center">
              
</div>*/