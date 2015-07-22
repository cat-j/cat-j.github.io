//*-------- VARIABLES-----------*

var $adelgamate = "<img src='adelgamate.jpg' alt='Estamos adelgamateando con yerba ADELGAMATEEEEEE'>";

var $albanil = "<img src='albanil.png' alt='LADRILLO HUECO 27 CENTAVOS'>";

var $aluminio = "<img src='aluminio.png' alt='Aluminio'>";

var $aragone = "<img src='aragone.png' alt='ARAGOOOOONEEEEEEEEE'>";

var $cherashny = "<img src='cherashny.jpg' alt='Guillermo Cherashny'>";

var $cybercom = "<img src='cybercom.png' alt='CYBERCOM CYBERCOM, LLEGÓ CYBERCOM'>";

var $descuentometro = "<img src='descuentometro.png' alt='El Descuentómetrooooooooooo'>";

var $elcondor = "<img src='elcondor.png' alt='Mar del Plata, El Cóndor, Buenos Aires'>";

var $elcondor2 = "<img src='elcondor2.png' alt='Mar del Plata, El Cóndor, Necochea'>";

var $hierro = "<img src='hierro.png' alt='HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO'>";

var $ladrillohueco = "<img src='ladrillohueco.png' alt='LADRILLO HUECO 27 CENTAVOS'>";

var $manaos = "<img src='manaos.jpg' alt='¡VAMOS MANAOS!'>";

var $rizzo = "<img src='rizzo.png' alt='riiiiiiizzzzzooooooooooo'>";

var $springup = "<img src='springup.png' alt='ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP'>";


//*-------- FUNCIONES-----------*

var addImage = function(image) {
    $('.fin').append(image);
}


//*-------- MAIN-----------*

var user = prompt("Estás comprando chicles en un kiosco de Mar del Plata y te atiende Norbert Degoas diciendo CYBERCOM CYBERCOM, ¡LLEGÓ CYBERCOM! ¿Preferís PAGAR, CORRER o ADELGAMATEAR?").toUpperCase();

switch (user) {
    case 'PAGAR':
        var plata = prompt("¿Tenés plata?").toUpperCase();
        var cybercom = prompt("¿Querés hablar sin abono y sin costo fijo?").toUpperCase();
        if ((plata==="SÍ" || plata==="SI") && (cybercom==="SÍ" || cybercom==="SI")) {
            window.alert("Le comprás una tarjeta Cybercom a Norbert y podés hablar sin abono y sin costo fijo por el resto de tu vida, pero ahora Norbert te llama todos los días para decirte boludeces. FIN");
            $(document).ready(function() {
                addImage($cybercom);
            });
        } else if (plata==="SÍ" || plata==="SI"){
            var ladrillo = prompt("¿Querés hacer un trato con Norbert y comprarle un ladrillo hueco por 27 centavos para que te deje de stalkear?").toUpperCase();
            if (ladrillo==="SÍ" || ladrillo==="SI") {
                window.alert("¡LADRILLO HUECO 27 CENTAVOS! ¡LADRILLO HUECO 27 CENTAVOS! ¡LADRILLO HUECO 27 CENTAVOS! ¡Y NO! ¡TE! ¡MIENTO! LOS MEJORES PRECIOS, RIZZO REVESTIMIENTOS. RI-RIIIZZZZOOOOOO (FIN)");
                $(document).ready(function() {
                    addImage($ladrillohueco);
                });
            } else {
                window.alert("Un albañil, que en realidad también es Norbert, te tira un ladrillo hueco en la cabeza y te morís. LOSER. FIN");
                $(document).ready(function() {
                    addImage($albanil);
                });
            }
        } else if (cybercom==="SÍ" || cybercom==="SI") {
            var aragone = prompt("Aceptás el plan de Cybercom para hablar sin abono y sin costo fijo, pero no tenés plata. ¿Querés entrar a trabajar en hipermercados Aragone para poder pagarlo?").toUpperCase();
            if (aragone==="SÍ" || aragone==="SI") {
                window.alert("¡Felicitaciones por tu nuevo trabajo! Ahora vas a recibir descuentos y rebajas extra y bombas oferta en ARAGOOOONEEEEEE. Bolsa de dormir Hummer a tan sólo 11 pesitos con 90. FIN");
                $(document).ready(function() {
                    addImage($aragone);
                });
            } else {
                window.alert("Vas a tener que salir... A RRRRRROBAAAARRRRRR");
            }
        } else {
            window.alert("HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERRO HIERROS JUNCAL (FIN)");
            $(document).ready(function() {
                addImage($hierro);
            });
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
                    $(document).ready(function() {
                        addImage($elcondor);
                    });
                } else {
                    window.alert("Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Mar del Plata. Mar del Plata, El Cóndor, Buenos Aires. Buenos Aires, El Cóndor, Necochea. FIN")
                    $(document).ready(function() {
                        addImage($elcondor2);
                    });
                }
            } else {
                window.alert("rizzo");
                $(document).ready(function() {
                    addImage($rizzo);
                });
            };
        } else {
            var springup = prompt("El taxi sigue su camino hasta las afueras de Mar del Plata y te deja en la fábrica de Spring Up. ¿Querés entrar?").toUpperCase();
            if (springup==="SÍ" || springup==="SI") {
                var moneditas = prompt("Aparece el dueño de la fábrica, que es Norbert, con la oferta más insólita el mundo de Spring Up, a tan sólo shhhhhhhmoneditas. ¿Querés comprarla?").toUpperCase();
                if (moneditas === "SÍ" || moneditas === "SI") {
                    window.alert("ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP ESPRINAP (FIN)")
                    $(document).ready(function() {
                        addImage($springup);
                    });
                } else {
                    window.alert("VAMOS MANAOS");
                    $(document).ready(function() {
                        addImage($manaos);
                    });
                };
            } else {
                var aluminio = prompt("Le decís al tachero que preferís la Manaos y que te deje en otro lado, entonces te lleva a Aberturas Peralta Rrrrrrrrramos. ¿Puertas, ventanas, madera y aluminio?").toUpperCase();
                if (aluminio === "SÍ" || aluminio === "SI") {
                    window.alert("¡ALUMINIO DIJE! Justo estamos en el mes del aluminio (FIN)");
                    $(document).ready(function() {
                        addImage($aluminio);
                    });
                } else {
                    var cybercom2 = prompt("Norbert ya se está hartando de que no aceptes sus tratos, así que te vuelve a ofrecer la tarjeta Cybercom y te dice CYBERCOM CYBERCOM. ¿Querés aceptarla esta vez?").toUpperCase();
                    if (cybercom2 === "SÍ" || cybercom2 === "SI") {
                        window.alert("Aceptás la tarjeta Cybercom y Norbert está tan desesperado por escuchar tu sí que te la da gratis, pero en realidad era una trampa. Norbert está arreglado con la SIDE y ahora Guillermo 'Cherry' Cherashny tiene acceso a tu celular y a toda tu información personal. FIN");
                        $(document).ready(function() {
                            addImage($cherashny);
                        });
                    } else {
                        window.alert("Consultá EL DESCUENTÓMETROOOOOO. FIN");
                        $(document).ready(function() {
                            addImage($descuentometro);
                        });
                    }
                };
            };
        }
        break;
    case 'ADELGAMATEAR':
        window.alert("Estamos adelgamateando con yerba ADELGAMATEEEEEEEEEE");
        $(document).ready(function() {
            addImage($adelgamate);
        });
        break;
    default:
    window.alert("Vas a tener que salir... A RRRRRROBAAAARRRRRR");
}