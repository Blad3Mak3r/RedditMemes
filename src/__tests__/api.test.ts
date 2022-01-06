import { getLocalRandomMeme, getRandomMeme } from '../api';
import { Meme } from '../interfaces/meme';

test('Get random meme', async () => {
    expect(await getRandomMeme()).toBeInstanceOf(Meme);
})

test('Get NSFW meme', async () => {
    const meme = await getRandomMeme("rule34", { allowNSFW: true })
    expect(meme).toBeInstanceOf(Meme);
    expect(meme.nsfw).toBe(true);
})

test('Filter NSFW meme', async () => {
    try {
        const meme = await getRandomMeme("rule34", { allowNSFW: false })
        expect(meme).toBeInstanceOf(Meme);
        console.info(meme)
        if (meme) expect(meme.nsfw).toBe(false);
    } catch(e) {
        expect(e).toBeInstanceOf(Error)
        expect((e as Error).message).toBe("Cannot get image post from https://www.reddit.com/r/rule34/hot/.json?count=100")
    }
})