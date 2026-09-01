/** Faixa escura com texto em caps a repetir palavras-chave. */
export function Ticker({ items }: { items: string[] }) {
  const list = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden bg-wine-deep py-3.5">
      <div className="animate-marquee flex w-max items-center gap-6">
        {list.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6">
            <span className="eyebrow text-[0.72rem] text-primary-foreground">{t}</span>
            <span aria-hidden className="text-sm text-primary-foreground/50">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
