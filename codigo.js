//Este sistema determinara tu posible ingreso a centro de diversion nocturno, determinando segun tu edad, si ingresas o no y si es gratis o pagas depediendo la hora en la que ingreses (Horario de ingreso gratis 2 am)

let free = false;

const validarCliente = (time) =>{
    let edad = prompt("¿ Cual es tu edad ?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false){
            alert("Ingresas sin pagar, sos la primer persona despues de las 2 AM");
            free = true;
        } else {
            alert(`son las ${time}:00hs. y podes pasar pero tenes que pagar entrada`);
        }
    }else {
        alert("No mi rey, es imposible que ingreses sos un Baby anda a tomar la mema");
    }
}

validarCliente(3);
validarCliente(7);
validarCliente(2);
validarCliente(1);
validarCliente(5);