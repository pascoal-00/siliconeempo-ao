import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Check,
  ChefHat,
  ChevronDown,
  ClipboardCheck,
  CreditCard,
  Eye,
  Instagram,
  ListChecks,
  MessageCircle,
  Plus,
  Salad,
  Smartphone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import {
  BEFORE_AFTER,
  BENEFITS,
  CONFIG,
  CTA,
  FAQ,
  INCLUDED,
  STEPS,
  TESTIMONIALS,
} from "@/config/landing";
import { Cta, TrustMicrocopy } from "@/components/landing/Cta";
import { VslPlayer } from "@/components/landing/VslPlayer";
import { BeforeAfterMarquee } from "@/components/landing/BeforeAfterMarquee";
import { Rail } from "@/components/landing/Rail";
import { Ticker } from "@/components/landing/Ticker";
import { Countdown } from "@/components/landing/Countdown";
import { BuyerNotifications } from "@/components/landing/BuyerNotifications";
import { track } from "@/lib/tracking";

const INCLUDED_ICONS = [ClipboardCheck, ChefHat, Salad, ListChecks, BookOpen, Sparkles, Smartphone];

const CARD_TONES = [
  "bg-ink",
  "bg-wine",
  "bg-coral",
  "bg-wine-deep",
  "bg-ink",
  "bg-coral",
  "bg-wine",
] as const;

const SEPARATE_COSTS = [
  "Consultas soltas para saber o que comer",
  "E-books avulsos de receitas",
  "Horas a procurar dicas na internet",
  "Tentativas sem checklist nem organização",
];

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Silicone em Pó — Bunda grande em pouco tempo" },
      {
        name: "description",
        content:
          "Método digital com receitas, checklist e dicas práticas para mulheres que querem organizar a alimentação e trabalhar o objetivo de melhorar a aparência do bumbum e das ancas.",
      },
      { property: "og:title", content: "Silicone em Pó — Bunda grande em pouco tempo" },
      {
        property: "og:description",
        content:
          "Receitas, checklist e dicas práticas num único guia digital. Acesso imediato após a confirmação do pagamento.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}

function LandingPage() {
  const [viewers, setViewers] = useState(148);

  useEffect(() => {
    track("PageView");
    track("ViewContent", { content_name: CONFIG.PRODUCT_NAME, value: 7500, currency: "AOA" });
  }, []);

  useEffect(() => {
    const id = window.setInterval(
      () => setViewers((v) => Math.min(213, Math.max(96, v + (Math.random() > 0.5 ? 1 : -1) * 3))),
      4500,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="bg-background pb-24 sm:pb-0">
      {/* 1 — HERO GRADIENTE ROSA */}
      <section className="surface-hero px-5 pb-16 pt-7 sm:pb-24">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="flex items-center justify-between">
            <p className="text-sm font-extrabold tracking-tight">{CONFIG.BRAND_NAME}</p>
            <span className="badge-tag bg-wine text-primary-foreground">Acesso digital</span>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-rise text-center lg:text-left">
              <h1 className="font-display text-[2.15rem] sm:text-[3.4rem]">
                O método simples para conquistar um{" "}
                <span className="accent-italic">bumbum e ancas mais definidos</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-primary-foreground/85 sm:text-lg lg:mx-0">
                Receitas, checklist e dicas práticas num único guia. Assista ao vídeo e veja como
                organizar a sua rotina desde hoje.
              </p>

              <div className="mx-auto mt-8 max-w-sm lg:mx-0">
                <Cta label={CTA.hero} location="hero" />
                <p className="mt-3 text-center text-sm font-bold">
                  <s className="opacity-70">{CONFIG.PRICE_BEFORE}</s>{" "}
                  <span>{CONFIG.PRODUCT_PRICE}</span> • pagamento único
                </p>
                <div className="mt-2">
                  <TrustMicrocopy tone="light" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.78rem] text-primary-foreground/85 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <Star className="size-3.5 fill-current" /> {CONFIG.BUYERS_COUNT} já compraram
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="size-3.5" /> {viewers} mulheres a ver esta página agora
                </span>
              </div>
            </div>

            <div className="animate-rise">
              <VslPlayer reel />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — BENTO GRID DE PREPAROS */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {PREPS.slice(0, 4).map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[3/4] w-full bg-blush object-cover"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>


      {/* 3 — POR QUE ESTÁ VIRALIZANDO */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-[420px]">
            <img
              src={TESTIMONIALS[0]!.src}
              alt="Mensagem de cliente sobre o método"
              loading="lazy"
              className="w-full rounded-[1.5rem] bg-card object-contain shadow-[var(--shadow-soft)]"
            />
            <span className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full bg-ink px-3 py-2 text-xs font-extrabold text-primary-foreground shadow-lg">
              <Instagram className="size-4" /> Viral no Instagram & TikTok
            </span>
          </div>
          <div>
            <p className="eyebrow text-magenta">Por que está viralizando</p>
            <h2 className="mt-3 font-display text-[1.9rem] sm:text-[2.6rem]">
              Mulheres reais a partilhar{" "}
              <span className="accent-italic text-magenta">o que mudou na rotina</span>
            </h2>
            <ul className="mt-7 space-y-3.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-magenta text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 max-w-sm">
              <Cta label={CTA.decision} location="viralizando" />
            </div>
          </div>
        </div>
      </Section>

      {/* 4 — CUSTO SEPARADO */}
      <Section className="bg-blush">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow text-coral">Se fosse comprar separado</p>
            <h2 className="mt-3 font-display text-[1.8rem] sm:text-[2.4rem]">
              Tudo isto custaria muito mais —{" "}
              <span className="accent-italic text-coral">e ainda ficaria desorganizado</span>
            </h2>
            <ul className="mt-7 space-y-3">
              {SEPARATE_COSTS.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3 text-[0.92rem] font-semibold"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                    <X className="size-3.5" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Aqui está tudo reunido num só material por{" "}
              <strong className="text-coral">{CONFIG.PRODUCT_PRICE}</strong> — pagamento único.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[320px]">
            <img
              src={CONFIG.PRODUCT_MOCKUP}
              alt="O que está dentro do guia Silicone em Pó"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* 5 — CONTRASTE VERMELHO/LARANJA */}
      <section className="surface-price px-5 py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            {PREPS.slice(3, 5).map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-[1.4rem] object-cover shadow-[var(--shadow-soft)]"
              />
            ))}
          </div>

          <div>
            <p className="eyebrow opacity-85">Como funciona</p>
            <h2 className="mt-3 font-display text-[1.85rem] sm:text-[2.5rem]">
              Organize, prepare e <span className="accent-italic">mantenha</span>.
            </h2>
            <div className="mt-8 space-y-5">
              {STEPS.map((s) => (
                <article key={s.n} className="flex items-start gap-4">
                  <span className="font-display text-3xl font-extrabold leading-none opacity-90">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold">{s.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/85">{s.d}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-9 max-w-sm">
              <Cta label={CTA.vsl} location="como-funciona" variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* 6 — TICKER */}
      <Ticker items={["Receitas", "Checklist", "Rotina organizada", "Acesso imediato", "Método feminino"]} />

      {/* 7 — PREÇO */}
      <section id="oferta" className="surface-price px-5 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[640px] text-center">
          <span className="badge-tag bg-wine text-primary-foreground">
            <Sparkles className="size-3.5" /> Condição especial por tempo limitado
          </span>
          <div className="mt-6">
            <Countdown />
          </div>

          <div className="mt-8 rounded-[1.75rem] bg-card p-7 text-left text-foreground shadow-[var(--shadow-soft)] sm:p-9">
            <p className="eyebrow text-magenta">Acesso completo</p>
            <p className="mt-3 text-lg">
              <s className="text-muted-foreground">{CONFIG.PRICE_BEFORE}</s>
            </p>
            <p className="font-display text-5xl font-extrabold text-coral sm:text-6xl">
              {CONFIG.PRODUCT_PRICE}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pagamento único • Produto digital • Acesso após confirmação do pagamento
            </p>
            <ul className="mt-6 space-y-2.5">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-center gap-3 text-[0.92rem] font-semibold">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-magenta text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Cta label={CTA.offer} location="oferta-principal" />
              <div className="mt-3">
                <TrustMicrocopy />
              </div>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <CreditCard className="size-4" /> Multicaixa Express • Transferência • Cartão
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — DEPOIMENTOS EM CARROSSEL */}
      <Section id="provas">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-magenta">Provas reais</p>
          <h2 className="mt-3 font-display text-[1.85rem] sm:text-[2.5rem]">
            Mensagens e resultados de{" "}
            <span className="accent-italic text-magenta">quem já começou</span>.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Cada corpo responde de maneira diferente. Estes são resultados individuais.
          </p>
        </div>

        <div className="mt-10">
          <Rail count={TESTIMONIALS.length}>
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className={`w-[270px] overflow-hidden rounded-[1.5rem] bg-card p-3 shadow-[var(--shadow-soft)] sm:w-[320px] ${
                  i % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
                }`}
              >
                <img
                  src={t.src}
                  alt={`Depoimento de cliente em ${t.city}`}
                  loading="lazy"
                  className="max-h-[460px] w-full rounded-[1.1rem] bg-card object-contain"
                />
                <figcaption className="flex items-center justify-between gap-2 px-1 pt-3">
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-extrabold">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.city}</span>
                  </span>
                  <span className="flex shrink-0 gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="size-3 fill-magenta text-magenta" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            ))}
          </Rail>
        </div>

        {/* 9 — ANTES E DEPOIS EM CARROSSEL */}
        <div className="mt-16">
          <p className="mb-7 text-center eyebrow text-coral">Antes e depois</p>
          <BeforeAfterMarquee />
        </div>

        <div className="mx-auto mt-12 max-w-sm">
          <Cta label={CTA.decision} location="provas" />
        </div>
      </Section>

      {/* 10 — O QUE VOCÊ RECEBE (CARDS SÓLIDOS) */}
      <Section className="bg-blush">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-magenta">O que você recebe</p>
          <h2 className="mt-3 font-display text-[1.85rem] sm:text-[2.5rem]">
            Tudo o que precisa para começar,{" "}
            <span className="accent-italic text-magenta">num só lugar</span>.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((i, idx) => {
            const Icon = INCLUDED_ICONS[idx % INCLUDED_ICONS.length]!;
            const tone = CARD_TONES[idx % CARD_TONES.length]!;
            return (
              <article
                key={i}
                className={`${tone} rounded-[1.5rem] p-6 text-primary-foreground transition-transform duration-300 hover:-translate-y-1`}
              >
                <span className="grid size-11 place-items-center rounded-full bg-primary-foreground/15">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{i}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-primary-foreground/85">
                  <Plus className="size-3.5" /> Incluído no acesso
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-primary-foreground/85">
                  <Plus className="size-3.5" /> Disponível pelo celular
                </p>
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-10 max-w-sm">
          <Cta label={CTA.offer} location="o-que-recebe" />
        </div>
      </Section>

      {/* 11 — FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {BEFORE_AFTER.slice(0, 4).map((t, i) => (
                  <img
                    key={i}
                    src={t.src}
                    alt=""
                    loading="lazy"
                    className={`size-11 rounded-full border-2 border-background bg-blush object-cover ${i > 0 ? "-ml-3" : ""}`}
                  />
                ))}
              </div>
              <span className="badge-tag bg-magenta text-primary-foreground">+5.000</span>
            </div>
            <h2 className="mt-6 font-display text-[1.8rem] sm:text-[2.3rem]">
              Ainda com dúvidas? <span className="accent-italic text-magenta">Fale connosco</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {CONFIG.BUYERS_COUNT} já compraram e {viewers} mulheres estão a ver esta página agora.
              A nossa equipa responde antes da sua compra.
            </p>
            <a
              href={`mailto:${CONFIG.CONTACT}`}
              className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-extrabold text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <MessageCircle className="size-4" /> Contactar suporte
            </a>
          </div>

          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details key={f.q} className="group rounded-[1.25rem] bg-blush px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.98rem] font-extrabold">
                  <span className="flex items-start gap-3">
                    <span className="font-display text-sm font-extrabold text-magenta">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                  <ChevronDown className="size-4 shrink-0 text-magenta transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
            {CONFIG.GUARANTEE && (
              <div className="card-premium p-6 text-center">
                <p className="eyebrow text-magenta">Compre sem medo</p>
                <p className="mt-2 text-sm text-muted-foreground">{CONFIG.GUARANTEE}</p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="surface-hero px-5 py-14">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-xl font-extrabold">{CONFIG.BRAND_NAME}</p>
              <p className="mt-3 max-w-xs text-sm text-primary-foreground/85">
                Método digital feminino: receitas, checklist e organização da rotina.
              </p>
            </div>
            <div>
              <p className="eyebrow opacity-80">Navegar</p>
              <nav className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/85">
                <a href="#provas" className="hover:text-primary-foreground">
                  Provas reais
                </a>
                <a href="#oferta" className="hover:text-primary-foreground">
                  Oferta
                </a>
                <a href={CONFIG.CHECKOUT_URL} className="hover:text-primary-foreground">
                  Comprar agora
                </a>
              </nav>
            </div>
            <div>
              <p className="eyebrow opacity-80">Oficial</p>
              <nav className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/85">
                <a href="#" className="hover:text-primary-foreground">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-primary-foreground">
                  Política de Privacidade
                </a>
                <a href={`mailto:${CONFIG.CONTACT}`} className="hover:text-primary-foreground">
                  Contacto
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-2" aria-hidden>
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className={`h-1.5 rounded-full bg-primary-foreground/50 ${d === 0 ? "w-6" : "w-1.5"}`}
              />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-[0.72rem] leading-relaxed text-primary-foreground/80">
            Este material tem finalidade informativa e educacional. Não substitui acompanhamento
            médico ou nutricional individualizado. Resultados podem variar de pessoa para pessoa e
            dependem de diversos fatores, incluindo características individuais, alimentação, rotina
            e consistência.
          </p>
          <p className="mt-4 text-center text-[0.7rem] text-primary-foreground/75">
            © {new Date().getFullYear()} {CONFIG.BRAND_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={`mailto:${CONFIG.CONTACT}`}
        aria-label="Falar com o suporte"
        className="fixed bottom-24 right-4 z-50 grid size-12 place-items-center rounded-full bg-ink text-primary-foreground shadow-lg sm:bottom-6"
      >
        <MessageCircle className="size-5" />
      </a>

      {/* CTA FLUTUANTE MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 py-2.5 backdrop-blur sm:hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="truncate text-[0.8rem] font-extrabold">{CONFIG.BRAND_NAME}</p>
            <p className="truncate text-[0.75rem] text-muted-foreground">
              <s>{CONFIG.PRICE_BEFORE}</s>{" "}
              <strong className="text-coral">{CONFIG.PRODUCT_PRICE}</strong>
            </p>
          </div>
          <Cta
            label={CTA.mobile}
            location="cta-mobile-fixo"
            className="w-auto px-5 py-1.5 text-[0.8rem]"
          />
        </div>
      </div>

      <BuyerNotifications />
    </main>
  );
}
