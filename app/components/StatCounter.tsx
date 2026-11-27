interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

// Render the final number in the HTML. A count-up that starts at 0 is what
// crawlers and no-JS visitors were seeing as "0.0★".
export default function StatCounter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
}: Props) {
  const display = decimals > 0 ? end.toFixed(decimals) : Math.floor(end).toString();

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}
