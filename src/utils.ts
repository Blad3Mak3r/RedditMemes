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
      let trys: number = 0;

      while (!checkURL(post.url)) {
        post = children[randomNumber(children.length)].data;
        if (trys >= 50) {
          throw new Error('Cannot get image post from '+url)
          break;
        }
        trys++;
      }

      const meme = new Meme(post);

      if (meme === null) throw new Error("Null post");
      return meme;
    } else {
      throw new Error('Cannot get image post from '+url);
    }
  } catch (e) {
    throw new Error(e);
  }
}
