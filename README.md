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

# Compile and test it yourself
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

### **6.** Run the examples the project.
```shell script
npm run examples
```

### **7.** Build the project
```shell script
npm run build
```

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