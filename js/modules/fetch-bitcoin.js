export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / json.BRL.sell).toFixed(6);
    })
    .catch((erro) => console.log(Error(erro)));
}
//https://blockchain.info/ticker
