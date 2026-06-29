'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Menu, Bell } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/animated-button'
import { AnimatedAvatar } from '@/components/animated-avatar'

export function DashboardHeader() {
  const [user, setUser] = useState<{ email?: string; user_metadata?: { name?: string; avatar_url?: string } } | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b bg-card px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </motion.div>
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 15 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <AnimatedButton variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </AnimatedButton>
        </motion.div>
        
        {user && (
          <div className="flex items-center gap-3">
            <AnimatedAvatar
              fallback={user.email?.[0].toUpperCase()}
              size="md"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium">{user.user_metadata?.name || user.email}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  )
}
