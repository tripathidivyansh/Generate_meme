const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.textContent = title;
  memeAuthor.textContent = `Meme by: ${author || "Unknown"}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    })
    .catch(() => {
      memeTitle.textContent = "Failed to load meme.";
      memeImage.setAttribute("src", "");
      memeAuthor.textContent = "";
    });
};

generateMemeBtn.addEventListener("click", generateMeme);
window.addEventListener("load", generateMeme);
