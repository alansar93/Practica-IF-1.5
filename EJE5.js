const MASCOTA_PERRO = "perro";
const MASCOTA_GATO = "gato";

let mascotasPaseo = prompt ("Que mascotas quiere que saquemos a pasear?")
let cantidadMascotas = prompt ("Cuantas mascotas tenes para sacar a pasear?");

if ((mascotasPaseo == MASCOTA_PERRO) && (cantidadMascotas <= 3)) {
    document.write ("Esta permitido poder pasear sus mascotas");
} else if ((mascotasPaseo == MASCOTA_GATO) && (cantidadMascotas <= 3)) {
    document.write ("Esta permitido poder pasear sus mascotas");
} else document.write ("No podremos brindarle el servicio solicitado");
