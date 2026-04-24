import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { cn } from '@/components/ui/Container';

interface LabCardProps {
  name: string;
  description: string;
  Icon: LucideIcon;
  href: string;
  status: 'live' | 'coming-soon';
}

export default function LabCard({ name, description, Icon, href, status }: LabCardProps) {
  const isLive = status === 'live';

  const CardWrapper = isLive ? Link : 'div';

  return (
    <CardWrapper 
      href={isLive ? href : '#'} 
      className={cn(
        "bg-white border rounded-sm p-10 transition-all duration-500 relative group flex flex-col items-start text-left",
        isLive ? "border-border hover:border-black shadow-none hover:shadow-xl" : "border-border/50 opacity-60"
      )}
    >
      {/* Badge */}
      <div className="absolute top-6 right-6">
        {isLive ? (
          <Badge variant="new">LIVE</Badge>
        ) : (
          <Badge className="bg-off-white text-text-muted border-border font-mono text-[9px]">COMING SOON</Badge>
        )}
      </div>

      {/* Icon */}
      <div className={cn(
        "w-12 h-12 flex items-center justify-center mb-8 rounded-sm",
        isLive ? "bg-off-white group-hover:bg-black text-magenta group-hover:text-white transition-colors" : "bg-off-white text-text-muted"
      )}>
        <Icon size={24} />
      </div>

      {/* Content */}
      <h3 className={cn(
        "text-[18px] font-semibold font-satoshi mb-4",
        isLive ? "text-text-primary" : "text-text-muted"
      )}>
        {name}
      </h3>
      <p className="text-body-sm text-text-secondary leading-relaxed mb-10 flex-grow">
        {description}
      </p>

      {/* CTA */}
      <span className={cn(
        "text-mono-xs font-mono font-bold uppercase tracking-widest",
        isLive ? "text-magenta group-hover:translate-x-2 transition-transform inline-flex items-center gap-2" : "text-text-muted"
      )}>
        {isLive ? "Try It →" : "Notify Me"}
      </span>

      {/* Subtle Grid Corner */}
      <div className="absolute bottom-4 right-4 text-mono-xs text-border font-mono pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        LAB_ID: {name.substring(0, 3).toUpperCase()}_0{Math.floor(Math.random() * 9)}
      </div>
    </CardWrapper>
  );
}
