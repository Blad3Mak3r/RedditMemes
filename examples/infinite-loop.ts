import { getRandomMeme } from '../lib';

async function init() {
    await getRandomMeme("dogs")
}

init().then(() => console.log("Done")).catch((e) => console.log(e));