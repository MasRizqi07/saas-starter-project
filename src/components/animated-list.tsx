'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedListProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

interface AnimatedListItemProps {
  children: ReactNode
  className?: string
  index: number
  staggerDelay?: number
}

export function AnimatedList({ children, className, staggerDelay = 0.1 }: AnimatedListProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedListItem({ children, className, index, staggerDelay = 0.1 }: AnimatedListItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.4,
            ease: 'easeOut',
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Alternative: Fade-in-slide-up animation for lists
export function FadeInList({ children, className, staggerDelay = 0.1 }: AnimatedListProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInListItem({ children, className }: AnimatedListItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
