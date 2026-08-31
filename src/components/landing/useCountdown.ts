import { useEffect, useState } from "react";
import { CONFIG } from "@/config/landing";

const KEY = "sep_offer_deadline";

function resolveDeadline(): number {
  if (CONFIG.OFFER_END_DATE) return new Date(CONFIG.OFFER_END_DATE).getTime();
  const stored = Number(window.localStorage.getItem(KEY));
  if (stored && stored > Date.now()) return stored;
  const next = Date.now() + CONFIG.OFFER_MINUTES * 60_000;
  window.localStorage.setItem(KEY, String(next));
  return next;
}

export type Countdown = {
  ready: boolean;
  expired: boolean;
  h: string;
  m: string;
  s: string;
};

export function useCountdown(): Countdown {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setDeadline(resolveDeadline());
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (deadline === null) return { ready: false, expired: false, h: "00", m: "00", s: "00" };

  const left = Math.max(0, deadline - now);
  const total = Math.floor(left / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    ready: true,
    expired: left <= 0,
    h: pad(Math.floor(total / 3600)),
    m: pad(Math.floor((total % 3600) / 60)),
    s: pad(total % 60),
  };
}
