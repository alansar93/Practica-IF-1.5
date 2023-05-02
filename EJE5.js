const titulo = document.querySelector("#titulo");
const indicaciones = document.querySelector("#indicaciones")
const pMensaje = document.querySelector("#mensaje");
const canPerroo = document.querySelector("#mascota");
const tipoMascota1 = document.querySelector("#mascota1");
const tiempoPaseo = document.querySelector("#tiempo-paseo");
const pCostos = document.querySelector("#costos");
const pagoFeriaCoin = document.querySelector("#pago");

titulo.innerHTML = "BIENVENIDOS A PASEO DE MASCOTAS DEVS";
titulo.style.color = "violet";
titulo.style.fontFamily = "fantasy";
indicaciones.innerHTML = "COMPLETE EL SIGUIENTE FORMULARIO";
indicaciones.style.color = "Green";
indicaciones.style.fontFamily = "sans-serif";
pCostos.innerHTML = "1 perro = $100 x hr " + "1 gato = $170 x hr";
pCostos.style.color = "blue";
pCostos.style.fontFamily = "cursive";
pCostos.style.fontSize = "12.5px";


function devs() {
    let canPerro = canPerroo.value
    let canGato = tipoMascota1.value
    let duracionPaseo = tiempoPaseo.value
    let pagoSN = pagoFeriaCoin.value
    let hora = 60
    let precioPerro = 100;
    let precioGato = 170;
    let precioTotal = ((((canPerro * precioPerro) / hora) * duracionPaseo) + ((canGato * precioGato) / hora) * duracionPaseo)



    if ((((canPerro >= "0") && (canPerro <= "2")) && (canGato >= "0") && (canGato <= "2")) && ((duracionPaseo >= "30") && (duracionPaseo <= "60")) && (pagoSN == "si")) {
        pMensaje.innerHTML = "Podemos realizar el paseo de  sus mascotas" + ". Su total es de $" + precioTotal + ". Usted ya abono el servicio"
        pMensaje.style.color = "green"
    } else if ((((canPerro >= "0") && (canPerro <= "2")) && ((canGato >= "0") && (canGato <= "2"))) && ((duracionPaseo >= "30") && (duracionPaseo <= "60")) && (pagoSN == "no")) {
        pMensaje.innerHTML = "Podemos realizar el paseo de  sus mascotas" + ". Su total es de $" + (precioTotal) + ". Usted no abono el servicio"
        pMensaje.style.color = "green"
    } else if ((canPerro <= "3") && (canGato >= 1) && ((duracionPaseo >= "30") && (duracionPaseo <= "60"))) {
        pMensaje.innerHTML = "No podemos realizar el paseo de  sus mascotas por que el maximo es de 2 gatos y 2 perros"
        pMensaje.style.color = "red"
    } else if (((canPerro > "2") && (canGato > "2")) && (((duracionPaseo >= "30") && (duracionPaseo <= "60")))) {
        pMensaje.innerHTML = "No podemos realizar el paseo de  sus mascotas por que el maximo es de 2 gatos y 2 perros"
        pMensaje.style.color = "red"
    } else if ((((canPerro >= "0") && (canPerro <= "2")) && (canGato >= "0") && (canGato <= "2")) && ((duracionPaseo < "30") || (duracionPaseo > "60"))) {
        pMensaje.innerHTML = "No podemos realizar el paseo de  sus mascotas por que el tiempo que usted eligio es de " + duracionPaseo + "min. El tiempo es de 30 a 60 min"
        pMensaje.style.color = "red"
    } else if (((((canPerro <= "0") && (canPerro > "2")) ||  (canGato <= "0") && (canGato > "2")) && ((duracionPaseo < "30") || (duracionPaseo > "60")))) {
        pMensaje.innerHTML = "No podemos realizar el paseo de  sus mascotas por que el maximo es de dos gatos y dos perros y el tiempo es de 30 a 60 min"
        pMensaje.style.color = "red"

    }

}


// ver las respuestas y tenes el ejercicio 5




