import { Videos } from "./listVideos.js";

const list = document.querySelector("[data-list]");

const youTubeEmbed = "https://www.youtube.com/embed/";

export default function buildCard (videoJSON) {

    const video = document.createElement("li");

    video.classList.add("videos__item");

    video.innerHTML = `<iframe
                            width="100%" height="72%" src="${youTubeEmbed}${videoJSON.url}"
                            title="${videoJSON.title}" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>

                        <div class="viewAmount-video">

                            <img src="${videoJSON.image}" alt="logo canal alura">

                            <h3>${videoJSON.title}</h3>

                            <span>${videoJSON.viewAmount} visualizações</span>

                        </div>`;

    return video;
}

async function listVideos () {

    try{
        const gottenList = await Videos.getVideos();

        gottenList.array.forEach(element => {

            list.appendChild(buildCard(element));
        });
    }

    catch {
        list.innerHTML = `<li class="mensagem__titulo">
        Não foi possível carregar a lista de vídeos.
        </li>`;
    }
}

document.addEventListener("DOMContentLoaded", listVideos);