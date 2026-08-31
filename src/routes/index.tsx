import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  ChefHat,
  ChevronDown,
  ClipboardCheck,
  Eye,
  Flame,
  ListChecks,
  Salad,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import { CONFIG, CTA, FAQ, INCLUDED, STEPS, TESTIMONIALS } from "@/config/landing";
import { Cta, TrustMicrocopy } from "@/components/landing/Cta";
import { VslPlayer } from "@/components/landing/VslPlayer";
import { BeforeAfterMarquee } from "@/components/landing/BeforeAfterMarquee";
import { Countdown } from "@/components/landing/Countdown";
import { BuyerNotifications } from "@/components/landing/BuyerNotifications";
import { track } from "@/lib/tracking";

const INCLUDED_ICONS = [ClipboardCheck, ChefHat, Salad, ListChecks, BookOpen, Sparkles, Smartphone];


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
    <section id={id} className={`px-5 py-14 sm:py-18 ${className}`}>
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-rose-burnt">{children}</p>;
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
      {/* 1 — VSL NO TOPO (REEL) + OFERTA */}
      <section className="px-5 pb-12 pt-8 sm:pb-16 sm:pt-12">
        <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="animate-rise order-1 lg:order-none">
            <VslPlayer reel />
          </div>

          <div className="animate-rise order-2 text-center lg:order-none lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-wine/20 px-3 py-1.5 eyebrow text-wine">
              <Sparkles className="size-3.5" /> Método feminino • Acesso digital
            </span>
            <h1 className="mt-5 font-display text-[2.05rem] font-bold leading-[1.08] text-ink sm:text-5xl">
              O método simples para conquistar um{" "}
              <em className="not-italic text-wine">bumbum e ancas mais definidos</em>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Receitas, checklist e dicas práticas num único guia. Assista ao vídeo e veja como
              organizar a sua rotina desde hoje.
            </p>

            <div className="mx-auto mt-7 max-w-sm lg:mx-0">
              <Cta label={CTA.hero} location="hero" />
              <p className="mt-3 text-center text-sm font-semibold">
                <s className="text-muted-foreground">{CONFIG.PRICE_BEFORE}</s>{" "}
                <span className="text-wine">{CONFIG.PRODUCT_PRICE}</span> • pagamento único
              </p>
              <div className="mt-2">
                <TrustMicrocopy />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.78rem] text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-1.5">
                <Star className="size-3.5 fill-gold text-gold" /> {CONFIG.BUYERS_COUNT} já compraram
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="size-3.5" /> {viewers} mulheres a ver esta página agora
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — PROVAS REAIS (DEPOIMENTOS + ANTES E DEPOIS EM MOVIMENTO) */}
      <Section id="provas" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Provas reais</Eyebrow>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight sm:text-4xl">
            Mensagens e resultados de quem já começou.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Cada corpo responde de maneira diferente. Estes são resultados individuais.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="card-premium overflow-hidden p-3">
              <img
                src={t.src}
                alt={`Depoimento de cliente em ${t.city}`}
                loading="lazy"
                className="max-h-[520px] w-full rounded-lg bg-card object-contain"
              />
              <figcaption className="flex items-center justify-between gap-2 px-1 pt-3">
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold">{t.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{t.city}</span>
                </span>
                <span className="flex shrink-0 gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-3 fill-gold text-gold" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12">
          <p className="mb-5 text-center eyebrow text-rose-burnt">Antes e depois</p>
          <BeforeAfterMarquee />
        </div>

        <div className="mx-auto mt-9 max-w-sm">
          <Cta label={CTA.decision} location="provas" />
        </div>
      </Section>

      {/* 3 — O QUE RECEBE + COMO FUNCIONA */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[330px]">
            <span
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-secondary"
              aria-hidden
            />
            <img
              src={CONFIG.PRODUCT_MOCKUP}
              alt="O que está dentro do guia Silicone em Pó"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full drop-shadow-xl"
            />
          </div>
          <div>
            <Eyebrow>O que você recebe</Eyebrow>
            <h2 className="mt-3 font-display text-[1.9rem] font-semibold leading-[1.1] sm:text-[2.6rem]">
              Tudo o que precisa para começar, num só lugar.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((i, idx) => {
                const Icon = INCLUDED_ICONS[idx % INCLUDED_ICONS.length]!;
                return (
                  <article
                    key={i}
                    className="card-premium flex items-center gap-3 p-4 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-rose-burnt">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="font-sans text-[0.92rem] font-semibold leading-snug tracking-normal text-ink">
                      {i}
                    </h3>
                  </article>
                );
              })}
            </div>
            <div className="mt-9 max-w-sm">
              <Cta label={CTA.offer} location="o-que-recebe" />
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.12] sm:text-[2.4rem]">
              Organize, prepare e mantenha.
            </h2>
          </div>
          <div className="step-line mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {STEPS.map((s) => (
              <article key={s.n} className="relative text-center sm:text-left">
                <span className="grid size-14 place-items-center rounded-full border border-border bg-card font-display text-xl font-semibold text-rose-burnt shadow-[var(--shadow-soft)] max-sm:mx-auto">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-wine">{s.t}</h3>
                <div className="rule-gold my-3 w-12 max-sm:mx-auto" />
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>


      {/* 4 — OFERTA + URGÊNCIA */}
      <Section id="oferta" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-wine/20 bg-card px-3 py-1.5 eyebrow text-wine">
            <Flame className="size-3.5" /> Condição especial por tempo limitado
          </span>
          <div className="mt-6">
            <Countdown />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {["O método", "Checklist", "Receitas", "Dicas", "Guia prático"].map((v, i, arr) => (
              <span key={v} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-card px-3 py-1.5 text-[0.8rem] font-semibold">
                  {v}
                </span>
                {i < arr.length - 1 && <span className="text-rose-burnt">+</span>}
              </span>
            ))}
          </div>

          <h2 className="mt-9 font-display text-[1.8rem] font-bold sm:text-4xl">
            Hoje você pode começar por apenas
          </h2>
          <p className="mt-4 text-muted-foreground">
            <s className="text-lg">{CONFIG.PRICE_BEFORE}</s>
          </p>
          <p className="font-display text-5xl font-bold text-wine sm:text-6xl">
            {CONFIG.PRODUCT_PRICE}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Pagamento único • Produto digital • Acesso após confirmação do pagamento
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <Cta label={CTA.offer} location="oferta-principal" />
            <div className="mt-3">
              <TrustMicrocopy />
            </div>
          </div>
        </div>
      </Section>

      {/* 5 — FAQ + DECISÃO */}
      <Section>
        <div className="mx-auto max-w-[760px]">
          <div className="text-center">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mt-3 font-display text-[1.7rem] font-bold leading-tight sm:text-4xl">
              Antes de decidir, talvez esteja a pensar…
            </h2>
          </div>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {FAQ.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.98rem] font-bold">
                  {f.q}
                  <ChevronDown className="size-4 shrink-0 text-rose-burnt transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          {CONFIG.GUARANTEE && (
            <div className="mt-6 card-premium p-6 text-center">
              <p className="eyebrow text-rose-burnt">Compre sem medo</p>
              <p className="mt-2 text-sm text-muted-foreground">{CONFIG.GUARANTEE}</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="font-display text-xl text-wine sm:text-2xl">
              Pode continuar a procurar uma dica diferente todos os dias — ou começar com tudo
              organizado num só lugar.
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <Cta label={CTA.final} location="urgencia-final" />
              <div className="mt-4">
                <Countdown compact />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto w-full max-w-[1120px] text-center">
          <p className="font-display text-lg font-bold text-wine">{CONFIG.BRAND_NAME}</p>
          <nav className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground">
              Política de Privacidade
            </a>
            <a href={`mailto:${CONFIG.CONTACT}`} className="hover:text-foreground">
              Contacto
            </a>
          </nav>
          <p className="mx-auto mt-6 max-w-2xl text-[0.72rem] leading-relaxed text-muted-foreground">
            Este material tem finalidade informativa e educacional. Não substitui acompanhamento
            médico ou nutricional individualizado. Resultados podem variar de pessoa para pessoa e
            dependem de diversos fatores, incluindo características individuais, alimentação, rotina
            e consistência.
          </p>
          <p className="mt-4 text-[0.7rem] text-muted-foreground">
            © {new Date().getFullYear()} {CONFIG.BRAND_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* CTA FLUTUANTE MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 py-2.5 shadow-[0_-8px_24px_-12px_oklch(0.22_0.08_15/0.2)] backdrop-blur sm:hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="truncate text-[0.8rem] font-bold">{CONFIG.BRAND_NAME}</p>
            <p className="truncate text-[0.75rem] text-muted-foreground">
              <s>{CONFIG.PRICE_BEFORE}</s>{" "}
              <strong className="text-wine">{CONFIG.PRODUCT_PRICE}</strong>
            </p>
          </div>
          <Cta
            label={CTA.mobile}
            location="cta-mobile-fixo"
            className="w-auto px-5 py-3 text-[0.8rem]"
          />
        </div>
      </div>

      <BuyerNotifications />
    </main>
  );
}
