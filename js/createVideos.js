import { locations } from "./locations.js";

const imgInput = document.querySelector("[data-image]");

const urlInput = document.querySelector("[data-url]");

const titleInput = document.querySelector("[data-title]");

async function cadastrateVideo (cadastratedVideo) {

    const args = {
    
        method: "POST",
    
        Headers: { "content-type": "application/json" },
    
        body: JSON.stringify({
    
          title: cadastratedVideo.title,
    
          url: cadastratedVideo.url,
    
          image: cadastratedVideo.image
        })
    }

    const response = await fetch(locations.resources, args);

    if (response.ok) return await response.json();

    throw new Error("Falha no envio do vídeo.\n\n" + response.body);
}

export async function createVideo (triggerEvent) {

    triggerEvent.preventDefault();

    const video = {

        title: titleInput.value,

        url: urlInput.value.replace("https://www.youtube.com", "").replace("/embed/", ""),

        image: imgInput.value
    }

    try{
        await cadastrateVideo(video);

        window.location.href = "../pages/sended.html";
    }

    catch (e) { alert(e); }
}