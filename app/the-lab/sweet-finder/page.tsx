import SweetFinder from '@/components/lab/SweetFinder';
import LabGrid from '@/components/lab/LabGrid';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'Sweet Finder Quiz | The Lab | Sugar Riot',
  description: 'Our multi-step visual analysis that maps your personality to our current global sweet vault.',
};

export default function SweetFinderPage() {
  return (
    <LabGrid className="pt-[72px]">
      <Container>
        <SweetFinder />
      </Container>
    </LabGrid>
  );
}
