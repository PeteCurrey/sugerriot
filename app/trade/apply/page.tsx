import TradeApplication from '@/components/trade/TradeApplication';

export const metadata = {
  title: 'Apply for a Trade Account | Sugar Riot',
  description: 'Join the UK’s most premium sweet supply network. Step-by-step application for professional wholesale partners.',
};

export default function TradeApplyPage() {
  return (
    <main className="trade-portal bg-white min-h-screen pt-[120px]">
      <TradeApplication />
    </main>
  );
}
