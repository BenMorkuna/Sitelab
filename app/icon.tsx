import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
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
        {/* Outer circle */}
        <div
          style={{
            width: 28,
            height: 28,
            border: '2px solid #13aff0',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* S letter */}
          <div
            style={{
              fontSize: 18,
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
