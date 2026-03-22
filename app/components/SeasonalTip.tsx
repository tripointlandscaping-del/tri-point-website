"use client";

const tips: Record<number, { emoji: string; title: string; tip: string }> = {
  1:  { emoji: "❄️", title: "January Tip", tip: "Late winter is the perfect time to plan your spring landscaping projects — the best crews book up fast." },
  2:  { emoji: "📋", title: "February Tip", tip: "Start thinking about spring cleanup now. Bookings in Macomb County fill up quickly once the snow melts." },
  3:  { emoji: "🌱", title: "March Tip", tip: "Aerate your lawn before overseeding for best results. Loosening compacted soil lets water and nutrients reach the roots." },
  4:  { emoji: "🌿", title: "April Tip", tip: "Apply pre-emergent now to prevent crabgrass before it sprouts. Timing is everything — don't wait until you see it." },
  5:  { emoji: "✂️", title: "May Tip", tip: "Raise your mower blade. Cutting too short stresses grass in Michigan's warming temps. Aim for 3–3.5 inches." },
  6:  { emoji: "💧", title: "June Tip", tip: "Water deeply 2–3 times per week rather than lightly every day. Deep watering grows deeper roots and a more drought-resistant lawn." },
  7:  { emoji: "☀️", title: "July Tip", tip: "Avoid mowing during peak afternoon heat. Early morning is best — it reduces stress on the grass and your crew." },
  8:  { emoji: "🌾", title: "August Tip", tip: "Late August is the ideal window to overseed thin spots in Michigan. Cooler nights help new seed germinate fast." },
  9:  { emoji: "🍂", title: "September Tip", tip: "Fall is the best season to fertilize. Your lawn stores nutrients over winter and comes out stronger in spring." },
  10: { emoji: "🍁", title: "October Tip", tip: "Don't skip fall cleanup. Leaves left on grass over winter can smother and kill your turf. Book early — we fill up." },
  11: { emoji: "🌬️", title: "November Tip", tip: "Final mow before winter — cut to 2.5 inches to prevent snow mold from forming under heavy snow cover." },
  12: { emoji: "🧊", title: "December Tip", tip: "Keep foot traffic off frozen or frost-covered grass. Walking on frozen turf crushes the cell structure and causes dead patches." },
};

export default function SeasonalTip() {
  const month = new Date().getMonth() + 1;
  const { emoji, title, tip } = tips[month];

  return (
    <div
      className="border p-6 flex gap-4 items-start"
      style={{ backgroundColor: "#111111", borderColor: "rgba(44,95,46,0.3)" }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center shrink-0 text-lg"
        style={{ backgroundColor: "#2C5F2E" }}
      >
        {emoji}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#7ecb82" }}>
          {title}
        </p>
        <p className="text-white text-sm leading-relaxed">{tip}</p>
      </div>
    </div>
  );
}
