# Reddit Memes
### A small async wrapper to get reddit memes ``(post with images)`` from the best Reddits memes

# How to install
Inside your npm project run the following command
```shell script
npm install @blad3mak3r/reddit-memes --save
```
Or
```shell script
npm i -S @blad3mak3r/reddit-memes
```

# How to use
> This package is perfect if you are using TypeSript in your project since it includes all the necessary definitions to avoid errors.

## Import the package
```shell script
import { getRandomMeme, getLocalRandomMeme } from '@blad3mak3r/reddit-memes';
```
```shell script
import * as memes from '@blad3mak3r/reddit-memes';
```

## Get a random meme ``Async/Await``
```TypeScript
getRandomMeme().then(console.info).catch(console.error);
```

## Get a random meme from a SubReddit ``Async/Await``
```TypeScript
getRandomMeme("memes").then(console.info).catch(console.error);
```

## Get country based random meme ``Async/Await``
> The country codes supported at the moment are ``en``, ``es``, ``fr``, ``ru``, ``de``, ``it``.
```TypeScript
getLocalRandomMeme("es").then(console.info).catch(console.error);
```

Try the [demo](https://memes.blademaker.tv/api)

# License
This project is under the Apache 2.0 license, [read license](LICENSE).