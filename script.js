const url = "https://api.breakingbadquotes.xyz/v1/quotes";

async function fetchMessages() {
  const response = await fetch(url);
  const json = await response.json();

  const element = document.querySelector(".container");
  element.innerHTML = "";
  for (const item of json) {
    const quote = item.quote;
    const author = item.author;

    element.innerHTML += "<g>" + ' "' + quote +'" ' + "</g>" + "<g>" + author + "</g>";
  }

}
  fetchMessages()