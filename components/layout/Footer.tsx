import React from "react";
import { Container } from "@/components/common/Container";

export function Footer() {
  return (
    <footer className="border-t border-sand-200/60 bg-white py-8 text-sm text-stone-500">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© 2026 WAADFARM. All rights reserved.</p>
        <p className="text-xs">Technical Foundation Scaffold</p>
      </Container>
    </footer>
  );
}
