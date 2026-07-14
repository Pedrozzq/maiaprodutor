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
    start: "2026-07-09",
    end: "2026-07-12",
    name: "Festival Harmoniza",
    link: "https://www.sympla.com.br/evento/festival-harmoniza/3477064?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnriFpCTdViwKRaye8Oh82eu_YvQuGXa5TmqKwQY6t10222SDInTdRc1h0DcY_aem_Dt03fOcqyWC5m8-3wlxXsg&utm_id=97760_v0_s00_e0_tv3&referrer=l.instagram.com&referrer=l.instagram.com"
  },
  {
    start: "2026-07-17",
    end: "2026-07-19",
    name: "Inverno à Mesa",
    link: "https://www.instagram.com/festivalgastronomicoop/"
  },
  {
    start: "2026-07-19",
    end: "2026-07-19",
    name: "Casa Trapaça",
    link: "https://seudominio.com/vendas"
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
