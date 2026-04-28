import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ingeniería Estructural y Gestión de Riesgos | InnovazionE Guatemala',
  description: 'Diseño, rehabilitación, supervisión, ejecución y remodelación de infraestructura en toda Guatemala. Consultoría en resiliencia, confiabilidad, sostenibilidad, optimización e innovación.',
  keywords: [
    'ingeniería estructural Guatemala',
    'arquitectura y diseño de bodegas',
    'gestión de riesgos de infraestructura',
    'calculo, reforzamiento y diseño estructural avanzado',
    'planos para construcción',
    'Ingeniería civil en occidente',
    'ingeniería hidrológica, sanitaria y geotécnica'
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
