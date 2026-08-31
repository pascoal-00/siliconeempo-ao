import { useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";
import { CONFIG } from "@/config/landing";
import { track } from "@/lib/tracking";

export function VslPlayer({ reel = false }: { reel?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const marks = useRef({ 25: false, 50: false, 75: false });

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.play();
    setStarted(true);
    track("VSLPlay");
  };

  const onTimeUpdate = () => {
    const v = ref.current;
    if (!v || !v.duration) return;
    const pct = (v.currentTime / v.duration) * 100;
    ([25, 50, 75] as const).forEach((m) => {
      if (pct >= m && !marks.current[m]) {
        marks.current[m] = true;
        track(`VSL${m}`);
      }
    });
  };

  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-[1.75rem] border border-border bg-ink shadow-[var(--shadow-soft)] ${
        reel ? "w-full max-w-[360px]" : "w-full"
      }`}
    >
      <video
        ref={ref}
        src={CONFIG.VSL_URL}
        playsInline
        controls={started}
        preload="metadata"
        onTimeUpdate={onTimeUpdate}
        className={`h-auto w-full bg-ink object-cover ${reel ? "aspect-[9/16]" : "aspect-video"}`}
      />
      {!started && (
        <button
          onClick={play}
          aria-label="Assistir ao vídeo"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/40 transition-colors hover:bg-ink/30"
        >
          <span className="grid size-16 place-items-center rounded-full bg-card shadow-lg sm:size-20">
            <Play className="ml-1 size-7 fill-current text-wine sm:size-9" />
          </span>
          <span className="eyebrow flex items-center gap-1.5 text-background">
            <Volume2 className="size-3.5" /> Toque para assistir com som
          </span>
        </button>
      )}
    </div>
  );
}
