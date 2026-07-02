import './globals.css'

export const metadata = {
  title: 'Sabeen — iOS Developer & Designer',
  description: 'iOS 앱을 디자인하고 개발합니다. 2026년 Hibble 출시.',
  openGraph: {
    title: 'Sabeen — iOS Developer & Designer',
    description: 'iOS 앱을 디자인하고 개발합니다. 2026년 Hibble 출시.',
    type: 'website',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌙</text></svg>",
  },
}

export const viewport = {
  themeColor: '#0c0a12',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
