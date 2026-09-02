import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { CONFIG } from "@/config/landing";
import { track } from "@/lib/tracking";

export function VslPlayer({ reel = false }: { reel?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const marks = useRef({ 25: false, 50: false, 75: false });
  const trackedPlay = useRef(false);
  const restarted = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlaying(true);
          if (!trackedPlay.current) {
            trackedPlay.current = true;
            track("VSLPlay");
          }
        })
        .catch(() => {
          // Autoplay bloqueado pelo browser: deixa o vídeo pausado.
        });
    }
  }, []);

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    const willUnmute = v.muted;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (willUnmute && !restarted.current) {
      // Primeira vez que o lead liga o som: recomeça o vídeo do início.
      restarted.current = true;
      marks.current = { 25: false, 50: false, 75: false };
      v.currentTime = 0;
    }
    if (!v.muted) {
      const p = v.play();
      if (p !== undefined) p.then(() => setPlaying(true)).catch(() => {});
    }
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
        autoPlay
        playsInline
        muted={muted}
        controls={playing}
        preload="metadata"
        onTimeUpdate={onTimeUpdate}
        className={`h-auto w-full bg-ink object-cover ${reel ? "aspect-[9/16]" : "aspect-video"}`}
      />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Ativar som" : "Desativar som"}
        className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-black/50 text-background backdrop-blur-sm transition-colors hover:bg-black/60"
      >
        {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
      </button>
    </div>
  );
}
