"use client";

const tips: Record<number, { emoji: string; month: string; title: string; tip: string }> = {
  1:  { emoji: "❄️", month: "January", title: "Plan Now, Win Spring", tip: "Late winter is the perfect time to plan your spring landscaping projects — the best crews book up fast once the snow melts." },
  2:  { emoji: "📋", month: "February", title: "Spring Bookings Fill Fast", tip: "Start thinking about spring cleanup now. Slots in Macomb County go quickly — get on the schedule before it's too late." },
  3:  { emoji: "🌱", month: "March", title: "Aerate Before You Overseed", tip: "Loosen compacted soil before overseeding for best results. It lets water, air, and nutrients reach the roots where they're needed most." },
  4:  { emoji: "🌿", month: "April", title: "Stop Crabgrass Before It Starts", tip: "Apply pre-emergent now. Timing is everything — once crabgrass germinates, pre-emergent won't work. Don't wait until you see it." },
  5:  { emoji: "✂️", month: "May", title: "Raise Your Mower Blade", tip: "Cutting too short stresses Michigan grass as temps rise. Aim for 3–3.5 inches — taller grass shades the soil and holds moisture." },
  6:  { emoji: "💧", month: "June", title: "Water Deep, Not Daily", tip: "Water deeply 2–3 times per week rather than lightly every day. Deep watering builds deeper roots and a more drought-resistant lawn." },
  7:  { emoji: "☀️", month: "July", title: "Mow in the Morning", tip: "Avoid mowing during peak afternoon heat. Early morning is best — it reduces stress on the grass and gives it time to recover before nightfall." },
  8:  { emoji: "🌾", month: "August", title: "Best Time to Overseed", tip: "Late August is the ideal window to overseed thin spots in Michigan. Cooler nights and warm soil help new seed germinate quickly and establish before frost." },
  9:  { emoji: "🍂", month: "September", title: "Fall Fertilizing is Critical", tip: "Your lawn stores nutrients over winter and draws on them in spring. A fall fertilizer application is the single best investment you can make in your lawn." },
  10: { emoji: "🍁", month: "October", title: "Don't Skip Fall Cleanup", tip: "Leaves left on grass over winter smother turf and cause dead patches. Book your fall cleanup early — we fill up fast every October." },
  11: { emoji: "🌬️", month: "November", title: "Final Mow Height Matters", tip: "Cut to 2.5 inches before winter. Too tall and snow mold forms. Too short and the crown of the grass is exposed to freeze damage." },
  12: { emoji: "🧊", month: "December", title: "Stay Off Frozen Grass", tip: "Foot traffic on frozen or frost-covered turf crushes the cell structure. Those brown footprint-shaped dead patches in spring? That's why." },
};

export default function SeasonalTip() {
  const month = new Date().getMonth() + 1;
  const { emoji, month: monthName, title, tip } = tips[month];

  return (
    <section className="w-full py-16 px-6" style={{ backgroundColor: "#2C5F2E" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Icon + month */}
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div className="text-5xl mb-2">{emoji}</div>
          <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">{monthName} Tip</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px self-stretch bg-white/20" />

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h2
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
          >
            {title}
          </h2>
          <p className="text-white/75 leading-relaxed text-base max-w-2xl">
            {tip}
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 font-bold text-sm hover:bg-green-50 transition-colors whitespace-nowrap"
          >
            Get a Free Estimate →
          </a>
        </div>
      </div>
    </section>
  );
}
