export default function funcionamento() {
  const funcionamentos = document.querySelector('[data-semana]');
  const funDias = funcionamentos.dataset.semana.split(',').map(Number);
  const funHorario = funcionamentos.dataset.horario.split(',').map(Number);
  const dataAgora = new Date();
  const diaAtual = dataAgora.getDay();
  const diaHora = dataAgora.getHours();
  const funSemana = funDias.indexOf(diaAtual);
  if (diaHora >= funHorario[0] && diaHora < funHorario[1] && funSemana > 0) {
    funcionamentos.classList.add('aberto');
  }
}
