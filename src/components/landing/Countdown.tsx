import { useCountdown } from "./useCountdown";

function Cell({ value, label, animate }: { value: string; label: string; animate?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        key={animate ? value : label}
        className={`min-w-[3.6rem] rounded-xl border border-wine/15 bg-wine px-2 py-2.5 text-center font-display text-3xl font-bold tabular-nums text-primary-foreground sm:min-w-[4.5rem] sm:text-4xl ${animate ? "animate-tick" : ""}`}
      >
        {value}
      </div>
      <span className="mt-1.5 eyebrow text-[0.6rem] text-rose-burnt">{label}</span>
    </div>
  );
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const { ready, expired, h, m, s } = useCountdown();

  if (!ready) return <div className="h-[86px]" aria-hidden />;

  if (expired) {
    return (
      <p className="mx-auto max-w-md text-sm font-semibold text-muted-foreground">
        A condição especial desta sessão foi encerrada. O valor apresentado abaixo é o preço atual do
        material.
      </p>
    );
  }

  return (
    <div
      className={`flex items-start justify-center gap-2 sm:gap-3 ${compact ? "scale-95" : ""}`}
      role="timer"
      aria-live="off"
    >
      <Cell value={h} label="Horas" />
      <span className="pt-2 font-display text-3xl text-rose-burnt">:</span>
      <Cell value={m} label="Min" />
      <span className="pt-2 font-display text-3xl text-rose-burnt">:</span>
      <Cell value={s} label="Seg" animate />
    </div>
  );
}
