import { Negociacao  } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);

alert(`Volume: ${negociacao.volume}`)