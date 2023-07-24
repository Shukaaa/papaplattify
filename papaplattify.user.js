// ==UserScript==
// @name        papaplattify
// @namespace   rip.shukaaa
// @match       https://www.youtube.com/
// @version     1.0
// @author      shukaaa
// @description put faces from papaplatte on every YouTube thumbnail
// ==/UserScript==

const images = [
    "https://media.discordapp.net/attachments/940659918900432976/1133125838058037398/pp-1.png?width=960&height=540",
    "https://media.discordapp.net/attachments/940659918900432976/1133125837621825646/pp-2.png?width=960&height=540"
]

window.onload = () => {
    addImage();
    setInterval(addImage, 1000);
}

function addImage() {
    let imgElements = document.getElementsByTagName("yt-image");

    for (let i = 0; i < imgElements.length; i++) {
        // if image already exists, skip
        if (imgElements[i].getElementsByTagName("img").length > 1) {
            continue;
        }

        // create new image, apply styles and add to yt-image
        const randomImage = images[Math.floor(Math.random() * images.length)];
        let img = document.createElement("img");

        img.src = randomImage;
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        img.style.zIndex = "1";
        img.style.pointerEvents = "none";

        imgElements[i].appendChild(img);
        console.log("papaplattified", i);
    }
}
