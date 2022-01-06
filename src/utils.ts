import Axios from 'axios';
import { Meme } from './interfaces/meme';
import { SearchFilter } from './api';

export function randomNumber(nm: number): number {
  return Math.floor(Math.random() * nm);
}

export function checkURL(url: string): boolean {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

export async function buildMeme(url: string, searchFilter?: SearchFilter) {
  const allowNsfw = searchFilter?.allowNSFW ?? true

  try {
    const result = await Axios.get(url);

    if (result.status === 200) {
      const children = result.data.data.children;
      let post = children[randomNumber(children.length)].data;
      let trys: number = 0;

      let validPost = false

      while (!validPost) {
        post = children[randomNumber(children.length)].data;
        if (trys >= 50) {
          throw new Error('Cannot get image post from '+url);
        }
        trys++;
        if (post.over_18 && !allowNsfw) continue
        validPost = checkURL(post.url)
      }

      const meme = new Meme(post);

      if (meme === null) throw new Error("Null post");
      return meme;
    } else {
      throw new Error('Cannot get image post from '+url);
    }
  } catch (e) {
    throw e;
  }
}
