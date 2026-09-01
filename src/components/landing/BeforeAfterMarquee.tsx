import { BEFORE_AFTER } from "@/config/landing";
import { Rail } from "./Rail";

/** Antes e depois em carrossel horizontal com dots. */
export function BeforeAfterMarquee() {
  return (
    <Rail count={BEFORE_AFTER.length}>
      {BEFORE_AFTER.map((img, i) => (
        <figure
          key={i}
          className={`w-[260px] overflow-hidden rounded-[1.5rem] bg-card p-2 shadow-[var(--shadow-soft)] sm:w-[320px] ${
            i % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="aspect-[3/4] w-full rounded-[1.1rem] bg-blush object-cover"
          />
        </figure>
      ))}
    </Rail>
  );
}
