import { cn } from '@/components/ui/Container';

export default function LabGrid({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("relative min-h-screen bg-white", className)}>
      {/* Engineering Paper Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #0A0A0A 1px, transparent 1px),
            linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
