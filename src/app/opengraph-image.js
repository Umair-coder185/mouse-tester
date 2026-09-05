import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '../lib/site';

export const runtime = 'edge';

// Image metadata
export const alt = 'MouseTester - Browser-based mouse diagnostics';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            border: '4px solid #38bdf8',
            borderRadius: '32px',
            background: 'rgba(15, 23, 42, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              fontSize: '96px',
              fontWeight: '900',
              color: '#ffffff',
              marginBottom: '20px',
              textAlign: 'center',
              letterSpacing: '-2px',
            }}
          >
            {SITE_CONFIG.name}
          </div>
          <div
            style={{
              fontSize: '42px',
              color: '#bae6fd',
              textAlign: 'center',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            {SITE_CONFIG.description}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
