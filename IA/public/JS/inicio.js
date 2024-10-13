function sendMessage() {
    // capturamos lo que dice el usuario
    let texto = document.getElementById("chatbot-input");
    let contenido = texto.value;
    let chatMensaje = document.getElementById("chatbot-messages");

    if (contenido ==="") {
        alert("Ingrese una pregunta")
    } else {
        // respuesta del bot
        let textoBot = document.createElement("p");
        let respuestaBot = "";
        switch (contenido) {
            case "tengo 18 años de edad, que productos de banorte me recomendarías para obtener mi primera tarjeta de credito":
                respuestaBot = "Hola con mucho gusto, de acuerdo a tus caracteristicas, te recomiendo que utilices los siguientes productos: Tarjeta de Crédito Banorte Básica,Tarjeta de Crédito Banorte Conmigo, esto, porque piden un nivel bajo de ingreso al mes, aproximadamente $2000.00";
                textoBot.textContent = respuestaBot;
                break;

            case "hola":
                respuestaBot = "Hola, ¿en que puedo ayudarte?";
                textoBot.textContent = respuestaBot;
                break;

            case "Gracias":
                respuestaBot = "Me alegro poder ayudar a resolver tu duda, no olvides en volverme a consultar si tienes alguna duda";
                textoBot.textContent = respuestaBot;
                break;
            
            default:
                respuestaBot = "Estoy teniendo problemas para resolver su problema!!";
                textoBot.textContent = respuestaBot;
                break;
        }
        // pregunta del usuario

        let p = document.createElement("p");
        p.classList.add("textoUsuario");
        p.textContent = "Tu: " + contenido;
        
        chatMensaje.appendChild(p);
        chatMensaje.appendChild(textoBot);
        texto.value ="";
    }
 }