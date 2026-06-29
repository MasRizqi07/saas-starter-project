'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { ReactNode, useState } from 'react'

interface AnimatedInputProps extends React.ComponentProps<typeof Input> {
  icon?: ReactNode
  label?: string
  error?: string
  helperText?: string
}

export function AnimatedInput({ icon, label, error, helperText, className, ...props }: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium transition-colors">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <motion.div
          animate={{
            borderColor: isFocused ? 'var(--ring)' : 'var(--input)',
            boxShadow: isFocused ? '0 0 0 2px var(--ring)' : 'none',
          }}
          transition={{ duration: 0.2 }}
        >
          <Input
            {...props}
            className={`${icon ? 'pl-10' : ''} ${className || ''}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </motion.div>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
      {helperText && !error && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  )
}
