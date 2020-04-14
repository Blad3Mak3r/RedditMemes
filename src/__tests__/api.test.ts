import { getLocalRandomMeme, getRandomMeme } from '../api';
import { Meme } from '../interfaces/meme';

test('Get random meme', async () => {
    expect(await getRandomMeme()).toBeInstanceOf(Meme);
})

test('Get random meme from external reddit', async () => {
    expect(await getRandomMeme("trump")).toBeInstanceOf(Meme);
})

test('Get random meme from lang reddit ES', async () => {
    expect(await getLocalRandomMeme("es")).toBeInstanceOf(Meme);
})