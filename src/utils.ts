import { Meme } from './interfaces/meme';
import Axios from 'axios';

export function randomNumber(nm: number): number {
  return Math.floor(Math.random() * nm);
}

export function checkURL(url: string): boolean {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

export async function buildMeme(url: string) {
  try {
    const result = await Axios.get(url);

    if (result.status === 200) {
      const children = result.data.data.children;
      let post = children[randomNumber(children.length)].data;

      while (!checkURL(post.url)) {
        post = children[randomNumber(children.length)].data;
      }

      return new Meme(post);
    } else {
      throw new Error('Cannot get memes Yaiks...');
    }
  } catch (e) {
    throw e;
  }
}
