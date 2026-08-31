import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Eye, Flame, Sparkles, Star } from "lucide-react";
import { CONFIG, CTA, BENEFITS, BEFORE_AFTER, FAQ, INCLUDED, STEPS, TESTIMONIALS } from "@/config/landing";
import { Cta, TrustMicrocopy } from "@/components/landing/Cta";
import { VslPlayer } from "@/components/landing/VslPlayer";
import { Countdown } from "@/components/landing/Countdown";
import { BuyerNotifications } from "@/components/landing/BuyerNotifications";
import { track } from "@/lib/tracking";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Silicone em Pó — Bunda grande em pouco tempo" },
      {
        name: "description",
        content:
          "Conheça o método digital com receitas, checklist e dicas práticas para mulheres que querem organizar a alimentação e trabalhar o objetivo de melhorar a aparência do bumbum e das ancas.",
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
    <section id={id} className={`px-5 py-14 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}

function Eyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <p className={`eyebrow ${tone === "light" ? "text-gold" : "text-rose-burnt"}`}>{children}</p>
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
    <main className="pb-24 sm:pb-0">
      {/* HERO */}
      <section className="relative overflow-hidden surface-wine px-5 pb-14 pt-9 sm:pb-20 sm:pt-14">
        <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-3 py-1.5 eyebrow text-gold">
              <Sparkles className="size-3.5" /> Método feminino • Acesso digital
            </span>
            <h1 className="mt-5 font-display text-[2.05rem] font-bold leading-[1.08] text-background sm:text-5xl lg:text-[3.35rem]">
              Descubra o método simples para começar a trabalhar o seu objetivo de conquistar um{" "}
              <em className="not-italic text-gold">bumbum e ancas mais definidos</em>
            </h1>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-background/80 sm:text-lg">
              Receitas, checklist e dicas práticas reunidos num único guia para você deixar de
              depender de informações espalhadas e começar a organizar a sua rotina.
            </p>

            <div className="mt-7 max-w-sm">
              <Cta label={CTA.hero} location="hero" variant="gold" />
              <p className="mt-3 text-center text-sm font-semibold text-background/85">
                Acesso digital • Pagamento seguro •{" "}
                <span className="text-gold">{CONFIG.PRODUCT_PRICE}</span>
              </p>
              <p className="mt-2 text-center text-[0.75rem] italic text-background/60">
                Assista ao vídeo antes de decidir.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-background/70">
              <span className="flex items-center gap-1.5">
                <Star className="size-3.5 fill-gold text-gold" /> {CONFIG.BUYERS_COUNT} já compraram
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="size-3.5" /> {viewers} mulheres a ver esta página agora
              </span>
            </div>
          </div>

          <div className="animate-rise relative mx-auto w-full max-w-[420px]">
            <div className="absolute inset-6 rounded-full bg-gold/25 blur-3xl" aria-hidden />
            <img
              src={CONFIG.PRODUCT_MOCKUP}
              alt="Mockup do e-book Silicone em Pó no celular e tablet"
              width={1024}
              height={1024}
              className="relative w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CURIOSIDADE */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Talvez isto seja familiar</Eyebrow>
          <h2 className="mt-3 font-display text-[1.7rem] font-bold leading-tight sm:text-4xl">
            Você provavelmente já viu dezenas de dicas na internet…
          </h2>
          <div className="mt-6 space-y-1.5 text-[1rem] leading-relaxed text-muted-foreground sm:text-lg">
            <p>Uma receita aqui.</p>
            <p>Outra dica ali.</p>
            <p>Um vídeo dizendo uma coisa.</p>
            <p>Outro dizendo exatamente o contrário.</p>
            <p className="pt-3 font-semibold text-foreground">
              No final, você continua sem saber exatamente o que colocar em prática.
            </p>
          </div>
          <div className="rule-gold mx-auto my-7 w-24" />
          <p className="font-display text-xl text-wine sm:text-2xl">
            O Silicone em Pó foi criado para reunir essa informação num caminho simples e organizado.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-rose-burnt">
            Veja como funciona ↓
          </p>
        </div>
      </Section>

      {/* VSL */}
      <Section id="vsl" className="surface-wine">
        <div className="mx-auto max-w-[860px] text-center">
          <Eyebrow tone="light">Vídeo do método</Eyebrow>
          <h2 className="mt-3 font-display text-[1.8rem] font-bold text-background sm:text-4xl">
            Assista antes de decidir
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[0.95rem] text-background/80 sm:text-base">
            Em poucos minutos, entenda como funciona o método e descubra o que você vai encontrar
            dentro do guia.
          </p>
          <div className="mt-7">
            <VslPlayer />
          </div>
          <div className="mx-auto mt-7 max-w-sm">
            <Cta label={CTA.vsl} location="vsl" variant="gold" />
            <p className="mt-3 font-display text-2xl text-gold">{CONFIG.PRODUCT_PRICE}</p>
            <div className="mt-2">
              <TrustMicrocopy tone="light" />
            </div>
          </div>
        </div>
      </Section>

      {/* MECANISMO */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>O mecanismo</Eyebrow>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight sm:text-4xl">
            Por que este método é diferente?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Não é só um ficheiro para guardar no celular. É um caminho em três passos, para você
            saber o que fazer hoje, amanhã e na semana seguinte.
          </p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {STEPS.map((s) => (
            <article key={s.n} className="card-premium p-6">
              <span className="font-display text-4xl text-gold">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold uppercase tracking-wide text-wine">{s.t}</h3>
              <div className="rule-gold my-3 w-12" />
              <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* O QUE RECEBE */}
      <Section className="bg-secondary/60">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-[360px]">
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
            <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight sm:text-4xl">
              Tudo o que você precisa para começar, num só lugar.
            </h2>
            <ul className="mt-6 space-y-3">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-3 text-[0.98rem] font-medium">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full surface-wine">
                    <Check className="size-3" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-7 max-w-sm">
              <Cta label={CTA.offer} location="o-que-recebe" />
              <div className="mt-3">
                <TrustMicrocopy />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Benefícios</Eyebrow>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight sm:text-4xl">
            Pare de fazer tudo no improviso.
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b}
              className="rounded-xl border border-border bg-card p-5 text-[0.95rem] font-semibold transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="mb-3 block h-0.5 w-8 bg-gold" aria-hidden />
              {b}
            </div>
          ))}
        </div>
      </Section>

      {/* PROVA SOCIAL */}
      <Section className="bg-secondary/60">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Prova social</Eyebrow>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight sm:text-4xl">
            Elas já decidiram começar.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Mensagens recebidas por quem já está com o guia em mãos.
          </p>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="card-premium overflow-hidden">
              <img
                src={t.src}
                alt={`Depoimento de cliente em ${t.city}`}
                loading="lazy"
                className="aspect-[3/4] w-full bg-muted object-cover object-top"
              />
              <figcaption className="flex items-center justify-between gap-2 border-t border-border p-4">
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
      </Section>

      {/* ANTES E DEPOIS */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Antes e depois</Eyebrow>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight sm:text-4xl">
            Resultados que chamam atenção.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Cada corpo responde de maneira diferente. Estes resultados representam experiências
            individuais.
          </p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BEFORE_AFTER.map((img, i) => (
            <figure key={i} className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[3/4] w-full bg-muted object-cover"
              />
            </figure>
          ))}
        </div>
        <div className="mx-auto mt-9 max-w-sm">
          <Cta label={CTA.decision} location="antes-depois" />
        </div>
      </Section>

      {/* URGÊNCIA + OFERTA */}
      <Section id="oferta" className="surface-wine">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 eyebrow text-gold">
            <Flame className="size-3.5" /> Condição especial disponível por tempo limitado
          </span>
          <div className="mt-6">
            <Countdown />
          </div>

          {/* BARRA DE OFERTA */}
          <div className="mt-9 grid gap-3 rounded-2xl border border-gold/40 bg-background/10 p-4 text-left sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="eyebrow text-gold">Oferta especial</p>
              <p className="mt-1 font-display text-xl text-background">Acesso ao método</p>
              <p className="text-sm text-background/70">
                <s>{CONFIG.PRICE_BEFORE}</s>{" "}
                <strong className="text-gold">{CONFIG.PRODUCT_PRICE}</strong>
              </p>
            </div>
            <Cta label={CTA.bar} location="barra-oferta" variant="gold" className="sm:w-auto sm:px-7" />
          </div>

          {/* EMPILHAMENTO DE VALOR */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-background/90">
            {["O método", "Checklist", "Receitas", "Dicas", "Guia prático"].map((v, i, arr) => (
              <span key={v} className="flex items-center gap-2">
                <span className="rounded-full border border-gold/35 px-3 py-1.5 text-[0.8rem] font-semibold">
                  {v}
                </span>
                {i < arr.length - 1 && <span className="text-gold">+</span>}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-background/75">Tudo reunido num único material.</p>

          <h2 className="mt-9 font-display text-[1.8rem] font-bold text-background sm:text-4xl">
            Hoje você pode começar por apenas {CONFIG.PRODUCT_PRICE}.
          </h2>
          <p className="mt-4 text-background/60">
            <s className="text-lg">{CONFIG.PRICE_BEFORE}</s>
          </p>
          <p className="font-display text-5xl font-bold text-gold sm:text-6xl">
            {CONFIG.PRODUCT_PRICE}
          </p>
          <p className="mt-3 text-sm text-background/80">
            Pagamento único • Produto digital • Acesso após confirmação do pagamento
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <Cta label={CTA.offer} location="oferta-principal" variant="gold" />
            <div className="mt-3">
              <TrustMicrocopy tone="light" />
            </div>
          </div>
        </div>
      </Section>

      {/* OBJEÇÕES */}
      <Section>
        <div className="mx-auto max-w-[760px]">
          <div className="text-center">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mt-3 font-display text-[1.7rem] font-bold leading-tight sm:text-4xl">
              Antes de decidir, talvez você esteja pensando…
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
        </div>
      </Section>

      {/* DECISÃO */}
      <Section className="bg-secondary/60">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-[1.7rem] font-bold leading-snug sm:text-4xl">
            Você pode continuar procurando uma dica diferente todos os dias…
          </h2>
          <div className="rule-gold mx-auto my-6 w-24" />
          <p className="font-display text-xl text-wine sm:text-2xl">
            Ou pode começar com tudo organizado num único lugar.
          </p>
          <div className="mx-auto mt-7 max-w-sm">
            <Cta label={CTA.decision} location="decisao" />
            <p className="mt-3 font-display text-2xl text-wine">{CONFIG.PRODUCT_PRICE}</p>
          </div>
        </div>
      </Section>

      {/* URGÊNCIA FINAL */}
      <Section className="surface-wine">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow text-gold">Esta condição termina em:</p>
          <div className="mt-5">
            <Countdown compact />
          </div>
          <p className="mt-5 text-sm text-background/80">
            Garanta o seu acesso enquanto a oferta estiver disponível.
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <Cta label={CTA.final} location="urgencia-final" variant="gold" />
            <p className="mt-3 font-display text-2xl text-gold">{CONFIG.PRODUCT_PRICE}</p>
            <div className="mt-2">
              <TrustMicrocopy tone="light" />
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
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 py-2.5 shadow-[0_-8px_24px_-12px_oklch(0.22_0.08_15/0.35)] backdrop-blur sm:hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="truncate text-[0.8rem] font-bold">{CONFIG.BRAND_NAME}</p>
            <p className="truncate text-[0.75rem] text-muted-foreground">
              <s>{CONFIG.PRICE_BEFORE}</s>{" "}
              <strong className="text-wine">{CONFIG.PRODUCT_PRICE}</strong>
            </p>
          </div>
          <Cta label={CTA.mobile} location="cta-mobile-fixo" className="w-auto px-5 py-3 text-[0.8rem]" />
        </div>
      </div>

      <BuyerNotifications />
    </main>
  );
}
