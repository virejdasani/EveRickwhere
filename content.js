const gifs = [
  "https://media.tenor.com/HuyTG8nfZ90AAAAC/rick_astley_oh_reallyy.gif",
  "https://media.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif",
  "https://media.tenor.com/IAWKXaW_52sAAAAd/rickroll.gif",
  "https://media.tenor.com/fGfybuB14fwAAAAM/rick-rolled.gif",
  "https://media.tenor.com/KYhQu2k8MioAAAAM/rick-rolled.gif",
  "https://media.tenor.com/-zKOgYpN_jsAAAAM/velocity-edit-rick-astley.gif",
  "https://media.tenor.com/hzxb6Dl7yFoAAAAC/izbandut-i%CC%87zbandut.gif",
  "https://media.tenor.com/j7syomE0JA4AAAAC/rick-roll-rick-astley.gif",
  "https://media.tenor.com/rkg-xjgb8tMAAAAd/rickroll.gif",
];

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].src = gifs[Math.floor(Math.random() * gifs.length)];
}
