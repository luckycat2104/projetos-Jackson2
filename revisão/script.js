let hi = document.getElementById("HoraInicial");
let mi = document.getElementById("MinInicial");
let hf = document.getElementById("HoraFinal");
let mf = document.getElementById("MinFinal");
let resultado = document.getElementById("r");

function soma(){
    let somaHora =  Number(hi.value) +  Number(hf.value);
    let somaMinuto =  Number(mi.value) +  Number(mf.value);
    while(somaMinuto > 59) {
        somaMinuto -= 60;
        somaHora ++;
    }
    resultado.innerHTML = somaHora + ":" + somaMinuto;
}

function sub(){
    let momentoinicial = hi.value*60 + Number(mi.value);
    let momentofinal =  hf.value*60 +Number(mf.value);
    let resultadoEmMinutos = momentoinicial - momentofinal;
    if(resultadoEmMinutos < 0){
        resultadoEmMinutos *= -1;
    }
    let resultadoEmHoras = 0;
    while(resultadoEmMinutos > 59){
        resultadoEmHoras ++;
        resultadoEmMinutos -= 60;
    }
    resultado.innerHTML = resultadoEmHoras + ":" + resultadoEmMinutos;

}