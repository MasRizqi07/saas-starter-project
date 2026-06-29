// Simple analytics tracking
// In production, integrate with PostHog, Mixpanel, or similar

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return

  console.log('[Analytics]', eventName, properties)

  // Example: PostHog integration
  // if (typeof window !== 'undefined' && window.posthog) {
  //   window.posthog.capture(eventName, properties)
  // }
}

export const trackPageView = (page: string) => {
  trackEvent('page_view', { page })
}

export const trackUserSignup = (userId: string, method: string) => {
  trackEvent('user_signup', { userId, method })
}

export const trackSubscription = (userId: string, plan: string) => {
  trackEvent('subscription_created', { userId, plan })
}

export const trackProjectCreated = (userId: string, projectName: string) => {
  trackEvent('project_created', { userId, projectName })
}
