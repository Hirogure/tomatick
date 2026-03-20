import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tomatick - Online Pomodoro Timer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#BA4949',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <div style={{ fontSize: 96, lineHeight: 1 }}>🍅</div>
        <div style={{ fontSize: 72, fontWeight: 800, color: 'white', letterSpacing: '-2px' }}>
          tomatick
        </div>
        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.75)', marginTop: 8 }}>
          Free Online Pomodoro Timer · No Sign-up Required
        </div>
        <div
          style={{
            marginTop: 16,
            background: 'rgba(255,255,255,0.2)',
            borderRadius: 50,
            padding: '12px 32px',
            fontSize: 24,
            color: 'white',
          }}
        >
          tomatick.app
        </div>
      </div>
    ),
    { ...size }
  );
}
