import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <div className="mx-auto max-w-md space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-brand-900">
          Page Not Found
        </h2>
        <p className="text-sm text-stone-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <Link href="/">
            <Button variant="primary" size="sm">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
