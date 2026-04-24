'use client';

import { 
  LayoutDashboard, 
  ShoppingBag, 
  FileText, 
  Users, 
  Settings, 
  HelpCircle, 
  ArrowRight,
  PlusCircle
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import { cn } from '@/components/ui/Container';

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/trade/dashboard', Icon: LayoutDashboard },
  { name: 'Bulk Products', href: '/trade/products', Icon: ShoppingBag },
  { name: 'Order History', href: '/trade/orders', Icon: FileText },
  { name: 'Account Details', href: '/trade/account', Icon: Users },
  { name: 'Trade Settings', href: '/trade/settings', Icon: Settings },
  { name: 'Partner Support', href: '/trade/help', Icon: HelpCircle },
];

export function TradeSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[260px] border-r border-border h-screen sticky top-0 bg-white p-8 flex flex-col pt-[120px]">
      <nav className="space-y-2 flex-grow">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 py-3 px-4 rounded-sm transition-all text-mono-xs font-mono font-bold tracking-widest group",
                isActive 
                  ? "bg-magenta/5 text-magenta border-l-2 border-magenta" 
                  : "text-text-muted hover:text-text-primary hover:bg-off-white"
              )}
            >
              <item.Icon size={18} className={isActive ? "text-magenta" : "text-text-muted group-hover:text-text-primary"} />
              {item.name.toUpperCase()}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 pt-8 border-t border-border">
         <div className="bg-magenta p-6 rounded-sm text-white">
            <p className="text-mono-xs font-mono font-bold uppercase tracking-widest opacity-80 mb-2">Current Tier</p>
            <h4 className="text-display-xs font-clash font-extrabold mb-4">Silver Partner</h4>
            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden mb-4">
               <div className="h-full bg-white w-3/4 rounded-full" />
            </div>
            <p className="text-[10px] font-mono opacity-80 uppercase tracking-widest">£2.5k logic upgrade in 12 days</p>
         </div>
      </div>
    </div>
  );
}

export function TradeDashboard() {
  return (
    <div className="flex-grow p-12 space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <Badge variant="new" className="bg-magenta text-white border-none mb-4">SILVER TIER</Badge>
          <h1 className="text-display-md font-clash font-extrabold">Trade Dashboard.</h1>
          <p className="text-body-md text-text-secondary mt-2">Welcome back, Sweet Ventures. You have 12 active shipments.</p>
        </div>
        <Link href="/trade/products">
           <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-sm font-mono text-mono-xs font-bold uppercase hover:bg-magenta transition-all">
             <PlusCircle size={18} /> New Bulk Order
           </button>
        </Link>
      </header>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Spend This Month', value: '£4,280.00', change: '+12%', sub: 'vs last month' },
          { label: 'Avg. Order Value', value: '£356.50', change: '-2%', sub: 'vs last month' },
          { label: 'Current Margin', value: '42.5%', change: '+0.5%', sub: 'Silver Tier' },
          { label: 'Loyalty Credits', value: '1,240', change: '+120', sub: 'Redeemable' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-border p-8 rounded-sm hover:border-magenta transition-colors group">
            <p className="text-mono-xs font-mono text-text-muted uppercase tracking-widest mb-6">{stat.label}</p>
            <div className="flex items-baseline gap-4">
               <h3 className="text-heading-lg font-clash font-extrabold text-text-primary group-hover:text-magenta transition-colors">{stat.value}</h3>
               <span className={cn(
                 "text-mono-xs font-mono font-bold",
                 stat.change.startsWith('+') ? "text-emerald-600" : "text-red-500"
               )}>{stat.change}</span>
            </div>
            <p className="text-mono-xs font-mono text-text-muted mt-2 opacity-60">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="space-y-6">
        <h2 className="text-heading-md font-clash font-extrabold">Recent Logistics.</h2>
        <div className="w-full border border-border rounded-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-off-white border-b border-border">
                {['ORDER ID', 'DATE', 'ITEMS', 'STATUS', 'TOTAL', 'ACTIONS'].map(h => (
                  <th key={h} className="p-4 text-mono-xs font-mono text-text-muted uppercase tracking-widest font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#SR-91024', date: '28 MAR 2026', items: 12, status: 'Shipped', total: '£540.20' },
                { id: '#SR-91021', date: '24 MAR 2026', items: 8, status: 'Delivered', total: '£320.10' },
                { id: '#SR-91018', date: '21 MAR 2026', items: 42, status: 'Delivered', total: '£1,120.45' },
              ].map((row) => (
                <tr key={row.id} className="border-b border-border hover:bg-off-white/50 transition-colors">
                  <td className="p-4 font-mono text-mono-xs text-text-primary">{row.id}</td>
                  <td className="p-4 font-mono text-mono-xs text-text-muted">{row.date}</td>
                  <td className="p-4 font-satoshi text-body-sm text-text-secondary">{row.items} Cases</td>
                  <td className="p-4"><Badge className="bg-off-white text-text-primary">{row.status}</Badge></td>
                  <td className="p-4 font-clash font-extrabold text-text-primary">{row.total}</td>
                  <td className="p-4">
                    <button className="text-magenta hover:underline text-mono-xs font-mono font-bold">VIEW →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex justify-between items-center bg-off-white/20 border-t border-border">
             <button className="text-mono-xs font-mono font-bold text-text-muted hover:text-text-primary transition-colors">EXPORT ALL DATA (CSV)</button>
             <button className="flex items-center gap-2 text-mono-xs font-mono font-bold text-text-primary group">
                VIEW FULL HISTORY <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
