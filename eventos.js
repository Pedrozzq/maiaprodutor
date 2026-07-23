/*
  ============================================================
  AGENDA DE EVENTOS - MAIA PRODUTOR
  ============================================================
  EDITE SEUS EVENTOS APENAS AQUI.
  As alterações aparecem automaticamente:
  - No calendário da agenda.html
  - No botão principal do index.html (mostra o próximo evento)

  Modelo para evento de vários dias:
  {
    start: "2026-07-09",
    end: "2026-07-12",
    name: "Festival Harmoniza",
    link: "https://seudominio.com/vendas"
  }

  Modelo para evento de apenas 1 dia:
  {
    start: "2026-07-19",
    end: "2026-07-19",
    name: "Casa Trapaça",
    link: "https://seudominio.com/vendas"
  }

  Dica: mantenha as datas no formato "AAAA-MM-DD".
  ============================================================
*/

const EVENTOS = [
  {
    start: "2026-08-22",
    end: "2026-08-22",
    name: "Arza",
    link: "https://byma.com.br/event/6a35815a11992a0004d735e3"
  },
  {
    start: "2026-08-22",
    end: "2026-08-22",
    name: "Matue em Viçosa",
    link: "https://stingressos.com.br/pt-BR/eventos/matue-em-vicosa-mg"
  },
  {
    start: "2026-08-29",
    end: "2026-08-29",
    name: "Arraiá Seven",
    link: "#"
  },
  {
    start: "2026-09-19",
    end: "2026-09-19",
    name: "Spring Break",
    link: "https://lmpass.com.br/evento/2678/SPRING_FESTIVAL_UNITY"
  },
  {
    start: "2026-10-17",
    end: "2026-10-17",
    name: "Micareta do Bloco Chapado",
    link: "#"
  },
  {
    start: "2026-11-21",
    end: "2026-11-21",
    name: "Mais Louco que o Batman",
    link: "#"
  }

];

/*
  Função usada pelo index.html para descobrir o próximo evento.
  Regra: pega o evento que ainda não terminou (fim >= hoje),
  com a data de início mais próxima. Se um evento estiver
  acontecendo hoje, ele é o escolhido.
*/
function getProximoEvento() {
  const hoje = new Date();
  const hojeKey = hoje.getFullYear() + "-" +
    String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
    String(hoje.getDate()).padStart(2, "0");

  const futuros = EVENTOS
    .filter(ev => (ev.end || ev.start) >= hojeKey)
    .sort((a, b) => a.start.localeCompare(b.start));

  if (futuros.length === 0) return null;

  const ev = futuros[0];
  return {
    ...ev,
    acontecendoAgora: ev.start <= hojeKey && (ev.end || ev.start) >= hojeKey
  };
}