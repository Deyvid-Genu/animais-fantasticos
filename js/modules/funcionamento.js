export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horas = funcionamento.dataset.hora.split(',').map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horaAberto = horaAgora >= horas[0] && horaAgora < horas[1];

  if (semanaAberto && horaAberto) {
    funcionamento.classList.add('aberto');
  }
}
