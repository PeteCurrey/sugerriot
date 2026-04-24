import { cn } from './Container';

export default function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full h-[1px] bg-[#E8E8E8]',
        className
      )}
    />
  );
}
