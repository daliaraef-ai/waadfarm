import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/60 bg-sand-50/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold tracking-tight text-brand-900">
            WAADFARM
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-600">
            Foundation Ready
          </span>
        </div>
      </Container>
    </header>
  );
}
