'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Settings, CreditCard, LogOut, FolderOpen } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/dashboard/projects', icon: FolderOpen },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  return (
    <aside className="w-64 border-r glass-nav p-6 hidden md:block relative">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-display">SaaS Foundry</h1>
        <p className="text-sm text-muted-foreground">Enterprise-grade SaaS foundation</p>
      </motion.div>
      
      <nav className="space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105'
                )}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                {item.name}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-6 left-6 right-6"
      >
        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sign out
        </motion.button>
      </motion.div>
    </aside>
  )
}
