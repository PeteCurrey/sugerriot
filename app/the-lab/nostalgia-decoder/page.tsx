import NostalgiaDecoder from '@/components/lab/NostalgiaDecoder';
import LabGrid from '@/components/lab/LabGrid';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'Nostalgia Decoder | The Lab | Sugar Riot',
  description: 'Enter a childhood memory and our AI will decode it into matching retro sweets.',
};

export default function NostalgiaDecoderPage() {
  return (
    <LabGrid className="pt-[72px]">
      <Container>
        <NostalgiaDecoder />
      </Container>
    </LabGrid>
  );
}
