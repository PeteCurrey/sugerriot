'use client';

import { TradeSidebar } from '@/components/trade/TradeDashboard';
import BulkOrderBuilder from '@/components/trade/BulkOrderBuilder';

export default function TradeProductsPage() {
  return (
    <main className="trade-portal bg-white min-h-screen flex">
      {/* Sidebar */}
      <TradeSidebar />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col pt-20">
        <BulkOrderBuilder />
      </div>
    </main>
  );
}
