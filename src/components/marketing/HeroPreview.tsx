export function HeroPreview() {
  return (
    <div className="vcf-hero-preview relative mx-auto w-full max-w-[520px] lg:mx-0">
      <div className="vcf-hero-preview-glow" aria-hidden />
      <div className="vcf-glass relative overflow-hidden rounded-2xl border border-white/10 p-5 shadow-2xl shadow-black/40">
        <div className="vcf-divider-gradient mb-4" />
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300">
            Live demo
          </span>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
            <p className="font-[family-name:var(--font-brand-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
              Narrative score
            </p>
            <div className="mt-2 flex items-end justify-between">
              <p className="font-[family-name:var(--font-vcf-display)] text-3xl font-semibold text-white">
                87
              </p>
              <p className="text-xs text-cyan-300">+12% vs last month</p>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full w-[87%] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #00D4FF 0%, #3B82F6 52%, #A855F7 100%)",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Channels", value: "6" },
              { label: "Story beats", value: "7" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-white/8 bg-white/[0.03] p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  {label}
                </p>
                <p className="mt-1 font-[family-name:var(--font-vcf-display)] text-xl font-semibold text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
            <div className="flex items-center gap-3">
              <div
                className="h-9 w-9 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.35) 0%, rgba(168,85,247,0.35) 100%)",
                }}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-white/90">
                  Clinical milestone post
                </p>
                <p className="font-[family-name:var(--font-brand-mono)] text-[11px] text-white/45">
                  {"{ Scientific Innovation }"} · 4.2% engagement
                </p>
              </div>
              <span className="rounded-md bg-cyan-400/15 px-2 py-1 text-[10px] font-medium text-cyan-300">
                Top
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
