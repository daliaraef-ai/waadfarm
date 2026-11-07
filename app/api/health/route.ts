import { NextResponse } from 'next/server';

export async function GET() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const hasConfig = Boolean(rawUrl && publishableKey);
  if (!hasConfig) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        checks: {
          environment: 'missing',
          api_reachability: 'unreachable',
          database_query: 'not_verified',
        },
      },
      { status: 500 }
    );
  }

  const supabaseUrl = rawUrl!.replace(/\/+$/, '');

  // 1. Independent API Gateway Reachability Check (Tested with publishable key)
  let isApiReachable = false;
  try {
    const res = await fetch(`${supabaseUrl}/auth/v1/health`, {
      method: 'GET',
      headers: {
        apikey: publishableKey!,
      },
      cache: 'no-store',
    });
    isApiReachable = res.ok;
  } catch {
    isApiReachable = false;
  }

  if (!isApiReachable) {
    return NextResponse.json(
      {
        status: 'degraded',
        checks: {
          environment: 'configured',
          api_reachability: 'unreachable',
          database_query: 'not_verified',
        },
      },
      { status: 502 }
    );
  }

  // 2. Database Query: Returns "not_verified" as no test table is designated
  return NextResponse.json({
    status: 'healthy',
    checks: {
      environment: 'configured',
      api_reachability: 'reachable',
      database_query: 'not_verified',
    },
  });
}
