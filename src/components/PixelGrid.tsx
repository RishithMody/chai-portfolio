import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';

const GRID_COLS = 21; // wider rectangle; tweak as you like
const GRID_ROWS = 11;  // height of the rectangle
const ACTIVE_COLOR = '#16a34a';
const INACTIVE_COLOR = '#0b0b0f';
const BORDER_COLOR = '#1f1f2a';

type Ripple = { id: number; idx: number };

const PixelGrid = () => {
  const [active, setActive] = useState<Set<number>>(new Set());
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const total = useMemo(() => GRID_COLS * GRID_ROWS, []);

  // Load initial grid
  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase.from('pixels').select('idx, active');
      if (!error && data) {
        setActive(new Set(data.filter((p) => p.active).map((p) => p.idx)));
      }
    };
    load();
  }, []);

  // Realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel('pixels-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'pixels' }, (payload) => {
        const { idx, active: isActive } = payload.new as { idx: number; active: boolean };
        setActive((prev) => {
          const next = new Set(prev);
          if (isActive) next.add(idx);
          else next.delete(idx);
          return next;
        });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const triggerRipple = (idx: number) => {
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, idx }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 900);
  };

  const setPixel = async (idx: number, next: boolean) => {
    // optimistic
    setActive((prev) => {
      const copy = new Set(prev);
      if (next) copy.add(idx);
      else copy.delete(idx);
      return copy;
    });
    await supabase.from('pixels').upsert({ idx, active: next });
  };

  return (
    <div className="py-12 px-6 md:px-12">
      <style>{`
        @keyframes pixel-ripple {
          0% { transform: scale(0); opacity: 0.8; }
          60% { opacity: 0.35; }
          100% { transform: scale(4); opacity: 0; }
        }
      `}</style>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-section-title mb-6">mood board</h2>
        <div
          className="grid gap-1 md:gap-1.5"
          style={{ gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPixel(i, !active.has(i))}
              onDoubleClick={() => {
                triggerRipple(i);
                setPixel(i, true);
              }}
              className="relative overflow-hidden aspect-square rounded-sm border transition-all duration-150 hover:scale-[1.03] focus:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/80"
              style={{
                backgroundColor: active.has(i) ? ACTIVE_COLOR : INACTIVE_COLOR,
                borderColor: BORDER_COLOR,
                boxShadow: active.has(i)
                  ? '0 0 0 1px rgba(22,163,74,0.25), 0 6px 18px rgba(22,163,74,0.18)'
                  : '0 0 0 1px rgba(255,255,255,0.02)',
              }}
              aria-label={`pixel-${i}`}
            >
              {ripples
                .filter((r) => r.idx === i)
                .map((r) => (
                  <span
                    key={r.id}
                    className="pointer-events-none absolute inset-0 rounded-sm"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(22,163,74,0.5) 0%, rgba(22,163,74,0) 60%)',
                      animation: 'pixel-ripple 0.9s ease-out forwards',
                      willChange: 'transform, opacity',
                    }}
                  />
                ))}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PixelGrid;