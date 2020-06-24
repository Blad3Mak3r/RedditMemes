import { randomNumber, buildMeme } from './utils';

const subreddits = {
  "br": ['MemesBrasil', 'eu_nvr', 'DiretoDoZapZap'],
  "de": ['GermanMemes'],
  "en": ['memes', 'dankmemes', 'meirl'],
  "es": ['memesesp', 'memesenespanol', 'spanishmeme'],
  "fr": ['FrenchMemes'],
  "in": ['IndianDankMemes', 'IndianMeyMeys', 'desimemes'],
  "it": ['italianmemes'],
  "ru": ['CommunismMemes', 'YouSeeComrade'],
  "tr": ['burdurland', 'TurkeyJerky', 'TurkishMemeCommunity'],
};

/**
 * Fetch a single random meme from top reddits or your selecter subreddit
 * @param subreddit A subreddit name
 */
export async function getRandomMeme(subreddit?: string) {
  const url = `https://www.reddit.com/r/${subreddit ? subreddit : randomReddit()}/hot/.json?count=100`;

  return await buildMeme(url);
}

export async function getLocalRandomMeme(country: 'en' | 'es' | 'fr' | 'ru' | 'de' | 'it') {
  const url = `https://www.reddit.com/r/${randomReddit(country)}/hot/.json?count=100`;

  return await buildMeme(url);
}

function randomReddit(lang?: string | string[]): string {
  if (!lang) return subreddits.en[randomNumber(subreddits.en.length)];

  switch (lang.toString()) {
    case 'br':
      return subreddits.de[randomNumber(subreddits.br.length)];
    case 'de':
      return subreddits.de[randomNumber(subreddits.de.length)];
    case 'es':
      return subreddits.es[randomNumber(subreddits.es.length)];
    case 'fr':
      return subreddits.fr[randomNumber(subreddits.fr.length)];
    case 'in':
      return subreddits.fr[randomNumber(subreddits.in.length)];
    case 'it':
      return subreddits.it[randomNumber(subreddits.it.length)];
    case 'ru':
      return subreddits.ru[randomNumber(subreddits.ru.length)];
    case 'tr':
      return subreddits.ru[randomNumber(subreddits.tr.length)];
    default:
      return subreddits.en[randomNumber(subreddits.en.length)];
  }
}
