import { Videos } from "./listVideos.js";

import { Show } from "./showVideos.js";

const searchBar = document.getElementById("pesquisar");

const list = document.querySelector("[data-list]");

export async function search (triggerEvent) {

    triggerEvent.preventDefault();

    const typedQuery = searchBar.value;

    const searchedVideo = await Videos.query(typedQuery);

    console.log(`Foi digitado "${typedQuery}"
        
        Eu achei o(s) seguinte(s) vídeo(s):
        
        ${searchedVideo}`);
    
    list.innerHTML = "";
    
    if (searchedVideo.length < 1) list.innerHTML = `<li class="mensagem__titulo">
    Não há vídeos com o termo "${typedQuery}".
    </li>`;

    else searchedVideo.array.forEach(element => {

        list.appendChild(Show.buildCard(element));
    });
}