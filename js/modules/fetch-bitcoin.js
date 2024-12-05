export default function fetchBitcoin(url, precoBTC) {
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(precoBTC);
      btcPreco.innerText = (100 / json.BRL.sell).toFixed(6);
    })
    .catch((erro) => console.log(Error(erro)));
}
