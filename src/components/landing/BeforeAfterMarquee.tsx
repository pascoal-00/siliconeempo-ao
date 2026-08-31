import { BEFORE_AFTER } from "@/config/landing";

/** Antes e depois em movimento lateral contínuo. */
export function BeforeAfterMarquee() {
  const items = [...BEFORE_AFTER, ...BEFORE_AFTER];

  return (
    <div className="marquee-mask relative overflow-hidden">
      <div className="animate-marquee flex w-max gap-4">
        {items.map((img, i) => (
          <figure
            key={i}
            className="w-[240px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card sm:w-[300px]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[3/4] w-full bg-secondary object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
