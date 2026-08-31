import { ArrowRight, Lock } from "lucide-react";
import { CONFIG } from "@/config/landing";
import { track } from "@/lib/tracking";

type Props = {
  label: string;
  location: string;
  variant?: "primary" | "gold";
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
      className={`${variant === "gold" ? "cta-gold" : "cta-primary"} ${className}`}
    >
      <span className="text-center">{label}</span>
      <ArrowRight className="size-4 shrink-0" />
    </a>
  );
}

export function TrustMicrocopy({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <p
      className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[0.72rem] ${
        tone === "light" ? "text-background/70" : "text-muted-foreground"
      }`}
    >
      <Lock className="size-3" /> Pagamento seguro
      <span aria-hidden>•</span> Acesso digital
      <span aria-hidden>•</span> Compra simples e rápida
      <span aria-hidden>•</span> {CONFIG.PRODUCT_PRICE}
    </p>
  );
}
