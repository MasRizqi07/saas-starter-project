'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  shimmer?: boolean
}

export function AnimatedButton({ children, className, variant = 'default', size = 'default', onClick, type = 'button', disabled = false, shimmer = false }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={shimmer ? 'relative overflow-hidden' : className}
      >
        {shimmer && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'linear',
            }}
          />
        )}
        <span className={shimmer ? 'relative z-10' : ''}>{children}</span>
      </Button>
    </motion.div>
  )
}

export function AnimatedButtonWithRipple({ children, className, variant = 'default', size = 'default', onClick, type = 'button', disabled = false, shimmer = false }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`relative overflow-hidden ${className}`}
      >
        {shimmer && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'linear',
            }}
          />
        )}
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 4, opacity: 0, transition: { duration: 0.5 } }}
        />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  )
}
