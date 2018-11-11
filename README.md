# Giphenberg
## Search for and display GIFs from Giphy in a Gutenberg block
![Powered by Giphy logo](https://github.com/coreymcollins/giphenberg/blob/master/assets/images/powered-by-giphy.gif)

Giphenberg is a Giphy-integrated Gutenberg block to search for and display GIFs in your pages and posts. Simply enter a search term, select your GIF, and you're off to the races!

### How To Use It
#### Add The Block
![Animated GIF displaying how to add a Giphenberg block](https://dl.dropbox.com/s/rqpegragxuntrxg/giphenberg-how-to01.gif?dl=0)

Just like any other Gutenberg block, you can add this block when creating the layout of your page.

#### Search and Select
![Animated GIF displaying how to search for and insert a GIF from Giphy](https://dl.dropbox.com/s/opij4wd5ly72xbx/giphenberg-how-to02.gif?dl=0)

Search for the GIFs you want by keyword. Results are returned as still images which animate upon hover. Select the GIF you would like to use by clicking on it and it will receive a green border.

Clicking outside of the block will display the GIF as it will be seen on the frontend.

Clicking back into the block will allow you to deselect the current GIF, select another GIF, or start over with a fresh search.

### Setup Your Own App
For now, you'll need to setup your own Giphy API Key to power this plugin.

To setup Giphy API Keys, [follow their instructions at this link](https://developers.giphy.com/docs/#api-keys).

In the `/src/components/index.js` file, you'll find this line:
```
const url = `https://api.giphy.com/v1/gifs/search?q=${ searchTerm }&api_key=YOURAPIKEY&limit=15`;
```

Replace `YOURAPIKEY` with your Giphy API key. Please refer to Giphy's documentation for usage restrictions and terms of service. I am not responsible for anything that happens with the use of your API key. Be smart!

---

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

---

###### Feel free to tweet and say 👋 at me [@MrAhmadAwais](https://twitter.com/mrahmadawais/)

[![npm](https://img.shields.io/npm/v/create-guten-block.svg?style=flat-square)](https://www.npmjs.com/package/create-guten-block) [![npm](https://img.shields.io/npm/dt/create-guten-block.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/create-guten-block)  [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ahmadawais/create-guten-block) [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/create-guten-block.svg?style=social&label=Stars)](https://github.com/ahmadawais/create-guten-block/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers)
