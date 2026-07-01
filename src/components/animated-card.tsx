'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  pulseGlow?: boolean
  gradientBorder?: boolean
}

export function AnimatedCard({ children, className, delay = 0, pulseGlow = false, gradientBorder = false }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative"
    >
      {pulseGlow && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/10 blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      <Card className={`${gradientBorder ? 'bg-gradient-to-br from-border/50 to-transparent' : ''} ${className} relative`}>
        <CardContent className="p-6 relative z-10">{children}</CardContent>
      </Card>
    </motion.div>
  )
}

export function AnimatedCardWithHover({ children, className, delay = 0, pulseGlow = false, gradientBorder = false }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.02, 
        y: -8,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transition: { duration: 0.2 }
      }}
      className="relative"
    >
      {pulseGlow && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/10 blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      <Card className={`${gradientBorder ? 'bg-gradient-to-br from-border/50 to-transparent' : ''} ${className} relative`}>
        <CardContent className="p-6 relative z-10">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
