import Axios from 'axios';
import { randomNumber, checkURL, buildMeme } from './utils';
import { Meme } from './interfaces/meme';

const subreddits = {
    en: ["memes", "dankmemes", "meirl"],
    es: ["memesesp", "memesenespanol", "spanishmeme"],
    fr: ["FrenchMemes"],
    ru: ["CommunismMemes", "YouSeeComrade"],
    de: ["GermanMemes"],
    it: ["italianmemes"]
}

/**
 * Fetch a single random meme from top reddits or your selecter subreddit
 * @param subreddit A subreddit name
 */
export async function getRandomMeme(subreddit?: string) {

    const url = `https://www.reddit.com/r/${subreddit ? subreddit : randomReddit()}/hot/.json?count=100`

    return await buildMeme(url);

}

export async function getLocalRandomMeme(country: "en" | "es" | "fr" | "ru" | "de" | "it") {
    const url = `https://www.reddit.com/r/${randomReddit(country)}/hot/.json?count=100`

    return await buildMeme(url);
}

function randomReddit(lang?: string | string[]): String {
    if (!lang) return subreddits.en[randomNumber(subreddits.en.length)];

    switch(lang.toString()) {
        case "es":
            return subreddits.es[randomNumber(subreddits.es.length)];
        case "fr":
            return subreddits.fr[randomNumber(subreddits.fr.length)];
        case "de":
            return subreddits.de[randomNumber(subreddits.de.length)];
        case "it":
            return subreddits.it[randomNumber(subreddits.it.length)];
        case "ru":
            return subreddits.it[randomNumber(subreddits.ru.length)];
        default:
            return subreddits.en[randomNumber(subreddits.en.length)];
    }
}