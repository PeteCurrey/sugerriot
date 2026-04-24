export default function AdminDashboard() {
  return (
    <div className="p-10">
      <header className="mb-10">
        <h1 className="text-3xl font-medium tracking-tight mb-2">Platform Overview</h1>
        <p className="text-[#888]">Monitor stock, process wholesale applications, and manage your inventory.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#111] border border-[#222] p-6 rounded-lg">
          <span className="text-[10px] uppercase tracking-widest text-[#888] font-mono block mb-2">Total Sales</span>
          <p className="text-3xl font-medium">£12,450</p>
          <span className="text-[12px] text-green-500 mt-2 block">+14% from last week</span>
        </div>
        <div className="bg-[#111] border border-[#222] p-6 rounded-lg">
          <span className="text-[10px] uppercase tracking-widest text-[#888] font-mono block mb-2">Pending B2B Applications</span>
          <p className="text-3xl font-medium">4</p>
          <span className="text-[12px] text-[var(--sr-riot)] mt-2 block">Requires review</span>
        </div>
        <div className="bg-[#111] border border-[#222] p-6 rounded-lg">
          <span className="text-[10px] uppercase tracking-widest text-[#888] font-mono block mb-2">Low Stock Alerts</span>
          <p className="text-3xl font-medium">12</p>
          <span className="text-[12px] text-red-400 mt-2 block">Action required</span>
        </div>
      </div>

      <div className="bg-[#111] border border-[#222] rounded-lg overflow-hidden">
        <div className="p-6 border-b border-[#222] flex justify-between items-center">
          <h2 className="text-xl font-medium">Recent Activity</h2>
          <button className="text-sm text-[var(--sr-cloud)] hover:text-white transition-colors">View All</button>
        </div>
        <div className="p-6">
          <div className="text-center py-10 text-[#666]">
            Activity feed will load here from Supabase...
          </div>
        </div>
      </div>
    </div>
  );
}
