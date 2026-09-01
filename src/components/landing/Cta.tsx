import { ArrowRight, Lock } from "lucide-react";
import { CONFIG } from "@/config/landing";
import { track } from "@/lib/tracking";

type Props = {
  label: string;
  location: string;
  variant?: "primary" | "light";
  className?: string;
};

export function Cta({ label, location, variant = "primary", className = "" }: Props) {
  return (
    <a
      href={CONFIG.CHECKOUT_URL}
      onClick={() => {
        track("CTA_Click", { location });
        track("Checkout_Click", { location, value: 7500, currency: "AOA" });
      }}
      className={`${variant === "light" ? "cta-light" : "cta-primary"} ${className}`}
    >
      <span
        aria-hidden
        className={`grid size-8 shrink-0 place-items-center rounded-full ${
          variant === "light" ? "bg-wine text-primary-foreground" : "bg-magenta text-primary-foreground"
        }`}
      >
        <ArrowRight className="size-4" />
      </span>
      <span className="text-center">{label}</span>
    </a>
  );
}

export function TrustMicrocopy({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <p
      className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[0.72rem] ${
        tone === "light" ? "text-primary-foreground/80" : "text-muted-foreground"
      }`}
    >
      <Lock className="size-3" /> Pagamento seguro
      <br />
      <span aria-hidden>•</span>
      <br />
      Compra simples e rápida
      <br />
      <span aria-hidden>•</span>
      <br />
      {CONFIG.PRODUCT_PRICE}
    </p>
  );
}
