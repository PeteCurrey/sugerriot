import Link from 'next/link';
import { Package, Users, ShoppingCart, BarChart, Settings, Home } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-[#1A1A1A] flex flex-col bg-[#0A0A0A]">
        <div className="p-6 border-b border-[#1A1A1A]">
          <h2 className="text-xl font-mono tracking-widest text-[var(--sr-riot)]">SUGAR RIOT</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#666] mt-1">Admin Portal</p>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 p-3 rounded hover:bg-[#1A1A1A] transition-colors text-sm font-medium">
            <BarChart size={18} className="text-[#888]" /> Dashboard
          </Link>
          <Link href="/admin/inventory" className="flex items-center gap-3 p-3 rounded hover:bg-[#1A1A1A] transition-colors text-sm font-medium">
            <Package size={18} className="text-[#888]" /> Inventory
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 p-3 rounded hover:bg-[#1A1A1A] transition-colors text-sm font-medium">
            <ShoppingCart size={18} className="text-[#888]" /> Orders
          </Link>
          <Link href="/admin/clients" className="flex items-center gap-3 p-3 rounded hover:bg-[#1A1A1A] transition-colors text-sm font-medium">
            <Users size={18} className="text-[#888]" /> B2B Clients
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 p-3 rounded hover:bg-[#1A1A1A] transition-colors text-sm font-medium mt-auto">
            <Settings size={18} className="text-[#888]" /> Settings
          </Link>
          <Link href="/" className="flex items-center gap-3 p-3 rounded hover:bg-[#1A1A1A] transition-colors text-sm font-medium text-[var(--sr-cloud)]">
            <Home size={18} className="text-[#888]" /> Back to Store
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-[#0F0F0F]">
        {children}
      </main>
    </div>
  );
}
