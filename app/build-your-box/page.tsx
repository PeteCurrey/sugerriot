import BoxBuilder from '@/components/builder/BoxBuilder';

export const metadata = {
  title: 'Build Your Riot Box | Sugar Riot',
  description: 'Pick your sweets. Choose your size. We’ll do the rest. The ultimate interactive pick & mix experience.',
};

export default function BuildYourBoxPage() {
  return (
    <main className="min-h-screen bg-white">
      <BoxBuilder />
    </main>
  );
}
