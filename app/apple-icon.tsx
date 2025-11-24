import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1b1b1b',
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            width: 140,
            height: 140,
            border: '6px solid #13aff0',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* S letter */}
          <div
            style={{
              fontSize: 90,
              fontWeight: 'bold',
              color: '#43ffae',
              fontFamily: 'sans-serif',
            }}
          >
            S
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
