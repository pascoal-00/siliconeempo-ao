import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { buyerNotifications, type BuyerNotification } from "@/config/landing";

type Props = {
  /** Dados reais do checkout/backend quando disponíveis. */
  notifications?: BuyerNotification[];
};

export function BuyerNotifications({ notifications = buyerNotifications }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed || notifications.length === 0) return;
    let timer: number;
    const cycle = (show: boolean) => {
      setVisible(show);
      timer = window.setTimeout(
        () => {
          if (show) {
            cycle(false);
          } else {
            setIndex((i) => (i + 1) % notifications.length);
            cycle(true);
          }
        },
        show ? 5000 : 7000,
      );
    };
    timer = window.setTimeout(() => cycle(true), 4000);
    return () => window.clearTimeout(timer);
  }, [dismissed, notifications.length]);

  if (dismissed || !visible || notifications.length === 0) return null;
  const n = notifications[index];

  return (
    <div className="pointer-events-none fixed bottom-[5.5rem] left-3 z-40 sm:bottom-6 sm:left-6">
      <div className="animate-notif pointer-events-auto relative flex max-w-[19rem] items-center gap-3 rounded-2xl border border-border bg-card/95 py-2.5 pl-3 pr-9 shadow-[var(--shadow-soft)] backdrop-blur">
        <span className="grid size-9 shrink-0 place-items-center rounded-full surface-wine">
          <ShoppingBag className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[0.82rem] font-bold text-foreground">
            {n.name} acabou de comprar
          </p>
          <p className="truncate text-[0.72rem] text-muted-foreground">
            {n.city} • {n.time}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Fechar notificação"
          className="absolute right-2 top-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
