import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export default function HomePage() {
  return (
    <Container className="py-20 text-center">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
          WAADFARM
        </h1>
        <p className="text-base text-stone-600 sm:text-lg">
          The technical foundation, App Router layout, design tokens, and scalable directory structure are configured.
        </p>
        <div className="flex justify-center gap-3 pt-4">
          <Button variant="primary">Architecture Initialized</Button>
          <Button variant="outline">Docs Ready</Button>
        </div>
      </div>
    </Container>
  );
}
