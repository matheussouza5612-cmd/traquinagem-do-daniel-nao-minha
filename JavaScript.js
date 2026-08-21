
const divDoFilmi = document.querySelector(".teste23");

async function pegaOfilme() {

    const player = document.createElement("iframe");

    player.src = "https://embedplayapi.top/embed/1314829";

    player.width = "100%";
    player.height = "200";
    player.frameBorder = "0";

    player.allowFullscreen = true;

    divDoFilmi.appendChild(player);

    console.log("Chegou até aqui");
}

pegaOfilme();

