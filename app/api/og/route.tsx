import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>Vibellion Events</div>
        <div style={{ fontSize: 32, opacity: 0.9 }}>
          Canada&apos;s Most Trusted Business-Event Engine
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

