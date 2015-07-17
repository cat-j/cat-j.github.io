var user = prompt("Estás comprando chicles en un kiosco de Mar del Plata y te atiende Norbert Degoas diciendo CYBERCOM CYBERCOM, ¡LLEGÓ CYBERCOM! ¿Preferís PAGAR, CORRER o ADELGAMATEAR?").toUpperCase();

switch (user) {
    case 'PAGAR':
        var plata = prompt("¿Tenés plata?").toUpperCase();
        var cybercom = prompt("¿Querés hablar sin abono y sin costo fijo?").toUpperCase();
        if ((plata==="SÍ" || plata==="SI") && (cybercom==="SÍ" || cybercom==="SI")) {
            window.alert("Le comprás una tarjeta Cybercom a Norbert y podés hablar sin abono y sin costo fijo por el resto de tu vida, pero ahora Norbert te llama todos los días para decirte boludeces. FIN");
        } else if (plata==="SÍ" || plata==="SI"){
            var ladrillo = prompt("¿Querés hacer un trato con Norbert y comprarle un ladrillo hueco por 27 centavos para que te deje de stalkear?").toUpperCase();
            if (ladrillo==="SÍ" || ladrillo==="SI") {
                window.alert("¡LADRILLO HUECO 27 CENTAVOS! ¡LADRILLO HUECO 27 CENTAVOS! ¡LADRILLO HUECO 27 CENTAVOS!¡Y NO! ¡TE! ¡MIENTO! LOS MEJORES PRECIOS, RIZZO REVESTIMIENTOS. RI-RIIIZZZZOOOOOO (FIN)");
            } else {
                window.alert("Un albañil, que en realidad también es Norbert, te tira un ladrillo hueco en la cabeza y te morís. LOSER. FIN");
            }
        } else if (cybercom==="SÍ" || cybercom==="SI") {
            var aragone = prompt("Aceptás el plan de Cybercom para hablar sin abono y sin costo fijo, pero no tenés plata. ¿Querés entrar a trabajar en hipermercados Aragone para poder pagarlo?").toUpperCase();
            if (aragone==="SÍ" || aragone==="SI") {
                window.alert("¡Felicitaciones por tu nuevo trabajo! Ahora vas a recibir descuentos y rebajas extra y bombas oferta en ARAGOOOONEEEEEE. Bolsa de dormir Hummer a tan sólo 11 pesitos con 90. FIN");
            } else {
                window.alert("Vas a tener que salir... A RRRRRROBAAAARRRRRR");
            }
        }
        break;
    case 'CORRER':
        var taxi = prompt("Salís rajando, te subís a un taxi y le decís al tachero 'NO, NO, SACAME DE ACÁ, SACAME DE ACÁ'. El tachero se da vuelta y resulta que también es Norbert Degoas y te dice CYBERCOM CYBERCOM. ¿Querés bajarte del taxi?").toUpperCase();
        if (taxi==="SÍ" || taxi==="SI") {
            var condor = prompt("Te bajás del taxi, corrés hasta una terminal y ves un micro El Cóndor que va de Mar del Plata a Buenos Aires. ¿Querés subirte?").toUpperCase();
            if (condor==="SÍ" || condor==="SI") {
                var micro = prompt("Te subís al micro y ahí está de nuevo Norbert cantando 'Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata'. ¿Querés disfrutar de esto por 8 horas más?").toUpperCase();
                if (micro==="SÍ" || micro==="SI") {
                    window.alert("Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. FIN");
                } else {
                    window.alert("Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Necochea. FIN")
                }
            } else {
                window.alert("rizzo");
            }
        } else {
            var springup = prompt("El taxi sigue su camino hasta las afueras de Mar del Plata y te deja en la fábrica de Spring Up. ¿Querés entrar?").toUpperCase();
            if (springup=="SÍ" || springup=="SI") {
                var moneditas = prompt("Aparece el dueño de la fábrica, que es Norbert, con la oferta más insólita el mundo de Spring Up, a tan sólo shhhhhhhmoneditas. ¿Querés comprarla?").toUpperCase();
                if (moneditas == "SÍ" || moneditas == "SI") {
                    window.alert("ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP (FIN)"); else {
                        window.alert("VAMOS MANAOS (FIN)");
                    };
                };
            } else {
                var aluminio == prompt("Le decís al tachero que preferís la Manaos y que te deje en otro lado, entonces te lleva a Aberturas Peralta Rrrrrrrrramos. ¿Puertas, ventanas, madera y aluminio?").toUpperCase();
                if (aluminio == "SÍ" || aluminio == "SI") == "SI" {
                    window.alert("¡ALUMINIO DIJE! Justo estamos en el mes del aluminio (FIN)");
                } else {
                    var cybercom2 = prompt("Norbert ya se está hartando de que no aceptes sus tratos, así que te vuelve a ofrecer la tarjeta Cybercom y te dice CYBERCOM CYBERCOM. ¿Querés aceptarla esta vez?").toUpperCase;
                    if (cybercom2 == "SÍ" || cybercom2 == "SI") == "SI" {
                        window.prompt("Aceptás la tarjeta Cybercom y Norbert está tan desesperado por escuchar tu sí que te la da gratis, pero en realidad era una trampa. Norbert está arreglado con la SIDE y ahora Guillermo 'Cherry' Cherashny tiene acceso a tu celular y a toda tu información personal. FIN");
                    } else {
                        window.prompt("Consultá EL DESCUENTÓMETROOOOOO. FIN");
                    };
                };
            };
        }
        break;
    case 'ADELGAMATEAR':
        window.alert("Estamos adelgamateando con yerba ADELGAMATEEEEEEEEEE");
        break;
    default:
    window.alert("Vas a tener que salir... A RRRRRROBAAAARRRRRR");
}