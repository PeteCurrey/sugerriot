'use client';

import { TradeSidebar, TradeDashboard } from '@/components/trade/TradeDashboard';

export default function TradeDashboardPage() {
  return (
    <main className="trade-portal bg-white min-h-screen flex">
      {/* Sidebar */}
      <TradeSidebar />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col pt-20">
        <TradeDashboard />
      </div>
    </main>
  );
}
