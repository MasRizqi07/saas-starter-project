'use client'

import { useEffect } from 'react'
import { trackPageView } from '@/lib/analytics'
import { usePathname } from 'next/navigation'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    trackPageView(pathname)
  }, [pathname])

  return <>{children}</>
}
