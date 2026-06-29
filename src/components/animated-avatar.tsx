'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedAvatarProps {
  src?: string
  alt?: string
  fallback?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
}

export function AnimatedAvatar({ src, alt, fallback, size = 'md', className }: AnimatedAvatarProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className={`relative rounded-full overflow-hidden bg-muted ${sizeClasses[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          {fallback}
        </div>
      )}
    </motion.div>
  )
}

export function AnimatedAvatarGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex -space-x-2 ${className}`}>
      {children}
    </div>
  )
}
