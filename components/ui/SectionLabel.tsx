import { cn } from './Container';

export default function SectionLabel({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2 mb-5', className)}>
      <span className="text-mono-sm text-magenta font-mono">
        {text.toUpperCase()} ↗
      </span>
    </div>
  );
}
