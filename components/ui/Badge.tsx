import { cn } from './Container';

interface BadgeProps {
  variant?: 'new' | 'sale' | 'limited' | 'vegan' | 'halal' | 'gf' | 'vegetarian';
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = 'new',
  children,
  className,
}: BadgeProps) {
  const variants = {
    new: 'bg-[#0A0A0A] text-white',
    sale: 'bg-[#FF3CAC] text-[#000000]',
    limited: 'bg-[#784BA0] text-white',
    vegan: 'bg-[#E8F5E9] text-[#2E7D32] border-[1px] border-[#C8E6C9]',
    halal: 'bg-[#E3F2FD] text-[#1565C0] border-[1px] border-[#BBDEFB]',
    gf: 'bg-[#FFF8E1] text-[#F57F17] border-[1px] border-[#FFE082]',
    vegetarian: 'bg-[#E8F5E9] text-[#2E7D32] border-[1px] border-[#C8E6C9]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-[10px] py-1 font-mono text-[10px] font-normal tracking-[0.1em] uppercase rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
