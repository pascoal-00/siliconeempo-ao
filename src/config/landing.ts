import ebookMockup from "@/assets/ebook-mockup.png";
import vslAsset from "@/assets/vsl.mp4.asset.json";
import ad1 from "@/assets/antes-depois-1.jpg.asset.json";
import ad2 from "@/assets/antes-depois-2.jpg.asset.json";
import ad3 from "@/assets/antes-depois-3.jpg.asset.json";
import ad4 from "@/assets/antes-depois-4.jpg.asset.json";
import ad5 from "@/assets/antes-depois-5.jpg.asset.json";
import ad6 from "@/assets/antes-depois-6.jpg.asset.json";
import ad7 from "@/assets/antes-depois-7.jpg.asset.json";
import ad8 from "@/assets/antes-depois-8.jpg.asset.json";
import prep1 from "@/assets/preparo-1.jpg.asset.json";
import prep2 from "@/assets/preparo-2.jpg.asset.json";
import prep3 from "@/assets/preparo-3.jpg.asset.json";
import prep4 from "@/assets/preparo-4.jpg.asset.json";
import prep5 from "@/assets/preparo-5.jpg.asset.json";
import dep1 from "@/assets/depoimento-1.jpg.asset.json";
import dep2 from "@/assets/depoimento-2.jpg.asset.json";
import dep3 from "@/assets/depoimento-3.jpg.asset.json";
import dep4 from "@/assets/depoimento-4.jpg.asset.json";
import dep5 from "@/assets/depoimento-5.jpg.asset.json";


/** Central config — edite tudo aqui. */
export const CONFIG = {
  BRAND_NAME: "Silicone em Pó",
  PRODUCT_NAME: "Silicone em Pó — Bunda grande em pouco tempo",
  PRODUCT_PRICE: "7.500 Kz",
  PRICE_BEFORE: "20.900 Kz",
  CHECKOUT_URL: "https://okandapay.com/checkout/silicone-em-po-bunda-grande-em-pouco-tempo-mtij7myq?pid=a78f4d55-216c-41b8-8771-ed2aa669e82d",
  VSL_URL: vslAsset.url,
  PRODUCT_MOCKUP: ebookMockup,
  /** Duração da condição especial por visitante (minutos). */
  OFFER_MINUTES: 29.79,
  /** Alternativa: data fixa ISO. Se definida, tem prioridade. */
  OFFER_END_DATE: null as string | null,
  BUYERS_COUNT: "+5.000 mulheres",
  CONTACT: "suporte@siliconeempo.com",
  GUARANTEE: null as string | null,
  META_PIXEL_ID: "[META_PIXEL_ID]",
  GA4_ID: "[GA4_ID]",
  GTM_ID: "[GTM_ID]",
};

export const CTA = {
  hero: "Quero conhecer o método",
  vsl: "Quero começar agora",
  offer: "Sim, quero o meu acesso",
  bar: "Quero o meu acesso",
  decision: "Quero começar",
  final: "Garantir meu acesso",
  mobile: "Comprar agora",
};

export const BEFORE_AFTER = [
  { src: ad1.url, alt: "Resultado individual — antes e depois" },
  { src: ad2.url, alt: "Resultado individual — antes e depois" },
  { src: ad3.url, alt: "Resultado individual — antes e depois" },
  { src: ad4.url, alt: "Resultado individual enviado por uma cliente" },
  { src: ad5.url, alt: "Resultado individual — antes e depois de uma cliente" },
  { src: ad6.url, alt: "Resultado individual enviado por uma cliente" },
  { src: ad7.url, alt: "Resultado individual enviado por uma cliente" },
  { src: ad8.url, alt: "Resultado individual enviado por uma cliente" },
];

/** Imagens de preparos/ingredientes do método. */
export const PREPS = [
  { src: prep1.url, alt: "Preparo em pó numa tigela de madeira" },
  { src: prep2.url, alt: "Preparo em pó com colher de madeira e folhas" },
  { src: prep3.url, alt: "Preparo em pó com sementes e ervas" },
  { src: prep4.url, alt: "Preparo em pó de amendoim numa tigela" },
  { src: prep5.url, alt: "Preparo em pó visto de cima numa tigela de madeira" },
];


export const TESTIMONIALS = [
  { src: dep1.url, name: "Cliente verificada", city: "Luanda" },
  { src: dep2.url, name: "Cliente verificada", city: "Talatona" },
  { src: dep3.url, name: "Cliente verificada", city: "Viana" },
  { src: dep4.url, name: "Cliente verificada", city: "Benguela" },
  { src: dep5.url, name: "Cliente verificado", city: "Luanda" },
];

export const INCLUDED = [
  "Checklist prático",
  "Receitas",
  "Dicas de alimentação",
  "Orientações para organizar a rotina",
  "Método estruturado",
  "Acesso pelo celular",
];

export const BENEFITS = [
  "Saiba o que preparar.",
  "Tenha as receitas organizadas.",
  "Tenha um checklist para acompanhar sua rotina.",
  "Pare de depender de informações espalhadas.",
  "Tenha um material que pode consultar sempre que precisar.",
  "Comece de forma simples.",
];

export const STEPS = [
  { n: "01", t: "Organize", d: "Entenda como estruturar a sua rotina." },
  { n: "02", t: "Prepare", d: "Tenha receitas práticas para saber o que preparar." },
  { n: "03", t: "Mantenha", d: "Use o checklist para acompanhar a sua consistência." },
];

export const FAQ = [
  { q: "É um produto físico?", a: "Não. É um produto digital." },
  {
    q: "Como recebo?",
    a: "Após a confirmação do pagamento, você recebe as instruções para acessar o material.",
  },
  { q: "Posso acessar pelo celular?", a: "Sim. O guia abre no celular, tablet ou computador." },
  {
    q: "Preciso de equipamentos?",
    a: "Não. O método é baseado em alimentação, receitas, dicas e organização da rotina.",
  },
  {
    q: "Preciso fazer academia?",
    a: "O guia é focado na alimentação e na rotina. Se você treina, o material complementa o seu treino. Se ainda não treina, pode começar pela parte alimentar.",
  },
  {
    q: "Funciona para todas?",
    a: "Cada corpo responde de maneira diferente. Os resultados dependem de características individuais, alimentação, rotina e consistência.",
  },
  { q: "Quanto custa?", a: `${CONFIG.PRODUCT_PRICE} — pagamento único.` },
];

/**
 * DEMO / PLACEHOLDER — dados de desenvolvimento.
 * Substituir por dados reais do checkout/backend antes de tratar como transações reais.
 */
export type BuyerNotification = {
  name: string;
  city: string;
  time: string;
  timestamp: number;
};

export const buyerNotifications: BuyerNotification[] = [
  { name: "Antónia", city: "Luanda", time: "há 2 minutos", timestamp: Date.now() - 120_000 },
  { name: "Maria", city: "Talatona", time: "há 4 minutos", timestamp: Date.now() - 240_000 },
  { name: "Joana", city: "Viana", time: "há 6 minutos", timestamp: Date.now() - 360_000 },
  { name: "Luísa", city: "Benguela", time: "há 9 minutos", timestamp: Date.now() - 540_000 },
  { name: "Esperança", city: "Cacuaco", time: "há 12 minutos", timestamp: Date.now() - 720_000 },
  { name: "Domingas", city: "Huambo", time: "há 15 minutos", timestamp: Date.now() - 900_000 },
  { name: "Beatriz", city: "Kilamba", time: "há 18 minutos", timestamp: Date.now() - 1_080_000 },
];
