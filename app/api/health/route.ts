import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();

    // Verify client initialization without touching database tables
    const { error } = await supabase.auth.getSession();

    if (error) {
      return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
    }

    const keyConfigured = Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    return NextResponse.json({
      status: 'connected',
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Configured' : 'Missing',
      publishableKey: keyConfigured ? 'Configured' : 'Missing',
    });
  } catch (err: any) {
    return NextResponse.json({ status: 'error', message: err?.message || 'Connection failed' }, { status: 500 });
  }
}
