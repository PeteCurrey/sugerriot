export default function DeliveryStrip() {
  const items = [
    { text: 'FREE UK SHIPPING OVER £25' },
    { text: 'GLOBAL EXPRESS LOGISTICS' },
    { text: '14-DAY SEALED RETURNS' },
  ];

  return (
    <div className="bg-[var(--sr-chrome)] border-y border-[var(--sr-fog)] py-8 px-1">
      <div className="flex flex-wrap justify-between gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1 h-1 bg-[var(--sr-riot)] rotate-45" />
            <span className="label-mono text-[10px] text-[var(--sr-steel)] tracking-[0.15em]">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

