import { getLocalRandomMeme, getRandomMeme } from '../api';
import { Meme } from '../interfaces/meme';

test('Get random meme', async () => {
    expect(await getRandomMeme()).toBeInstanceOf(Meme);
})