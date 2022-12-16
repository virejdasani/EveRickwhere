const gifs = [
  "./assets/rick001.gif",
  "./assets/rick002.gif",
  "./assets/rick003.gif",
  "./assets/rick004.gif",
  "./assets/rick005.gif",
  "./assets/rick006.gif",
  "./assets/rick007.gif",
  "./assets/rick008.gif",
  "./assets/rick009.gif",
];

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].src = chrome.runtime.getURL(
    gifs[Math.floor(Math.random() * gifs.length)]
  );
}
