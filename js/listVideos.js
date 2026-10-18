import { locations } from "./locations.js";

async function getVideos () {

    const json = await fetch(locations.resources);

    const list = await json.json();

    return list;
}

async function query (typed) {

    const researchTerms = typed.toLowerCase.raplace("  ", " ").raplace(" ", "+");

    const json = await fetch(locations.resources + "?q=" + researchTerms);

    const list = await json.json();

    return list;
}

export const linkAPI = { getVideos, query }