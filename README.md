# Reddit Memes 

### A small async wrapper to get reddit memes ``(post with images)`` from the best Reddits memes, this project is actively used as API by [HUGE](https://huge.blademaker.tv) in [HugeMemesAPI](https://memes.blademaker.tv)

You can also get this package for other programming languages:

| Packages                                               |
|--------------------------------------------------------|
| [Java](https://github.com/Blad3Mak3r/Memes4J)  |
| [TS/JS](https://github.com/Blad3Mak3r/RedditMemes)     |


[![npm](https://img.shields.io/npm/v/@blad3mak3r/reddit-memes?style=for-the-badge)](https://www.npmjs.com/package/@blad3mak3r/reddit-memes)
[![GitHub top language](https://img.shields.io/github/languages/top/blad3mak3r/redditmemes?style=for-the-badge)](https://github.com/Blad3Mak3r/RedditMemes/search?l=TypeScript&type=Code)
[![GitHub](https://img.shields.io/github/license/blad3mak3r/redditmemes?style=for-the-badge)](https://github.com/Blad3Mak3r/RedditMemes/blob/master/LICENSE)
[![Website](https://img.shields.io/website?down_color=black&down_message=Down&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fmemes.blademaker.tv)](https://memes.blademaker.tv)

# Getting started
## How to install
Inside your npm project run the following command
```shell script
npm install @blad3mak3r/reddit-memes --save
```
Or
```shell script
npm i -S @blad3mak3r/reddit-memes
```

## Compile and test it yourself
### **1.** [Fork](https://github.com/Blad3Mak3r/RedditMemes/fork) this repository.

### **2.** Clone your repository.
```shell script
git clone https://github.com/<YOUR_USERNAME_HERE>/RedditMemes.git
```

### **3.** Access the repository folder and install the dependencies.
```shell script
cd RedditMemes
npm install
```
### **4.** Compile the project.
```shell script
npm run build
```
### **5.** Test the project.
```shell script
npm run test
```

### **6.** Run the examples.
```shell script
npm run examples
```

### **7.** Enjoy

### You can see how this project works by watching the [live demo](https://memes.blademaker.tv/api).

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

# License
This project is under the Apache 2.0 license, [read license](LICENSE).
