import { NextResponse } from 'next/server';

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const hasConfig = Boolean(supabaseUrl && publishableKey);
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

  let isApiReachable = false;
  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/`, {
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

  return NextResponse.json({
    status: 'healthy',
    checks: {
      environment: 'configured',
      api_reachability: 'reachable',
      database_query: 'not_verified',
    },
  });
}
