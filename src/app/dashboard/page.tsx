import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BarChart3, Users, Zap, FolderOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { SlideUp } from '@/components/page-transition'
import { AnimatedCardWithHover } from '@/components/animated-card'
import { AnimatedButton } from '@/components/animated-button'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const stats = [
    {
      title: 'Total Projects',
      value: '12',
      description: '+2 from last month',
      icon: FolderOpen,
    },
    {
      title: 'Active Users',
      value: '1,234',
      description: '+18% from last month',
      icon: Users,
    },
    {
      title: 'Revenue',
      value: '$12,345',
      description: '+23% from last month',
      icon: BarChart3,
    },
    {
      title: 'Performance',
      value: '98%',
      description: '+2% from last month',
      icon: Zap,
    },
  ]

  return (
    <div className="space-y-8">
      <SlideUp>
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.user_metadata?.name || user.email}</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your projects today.</p>
        </div>
      </SlideUp>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <AnimatedCardWithHover key={stat.title} delay={index * 0.1}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </AnimatedCardWithHover>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SlideUp delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks to get you started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedButton className="w-full justify-between" variant="outline">
                Create new project
                <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton className="w-full justify-between" variant="outline">
                Invite team members
                <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton className="w-full justify-between" variant="outline">
                View documentation
                <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
            </CardContent>
          </Card>
        </SlideUp>

        <SlideUp delay={0.3}>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest actions and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { color: 'bg-green-500', title: 'Project updated', time: '2 hours ago' },
                  { color: 'bg-blue-500', title: 'New team member added', time: '5 hours ago' },
                  { color: 'bg-purple-500', title: 'Subscription renewed', time: '1 day ago' },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`h-2 w-2 rounded-full ${activity.color}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </SlideUp>
      </div>
    </div>
  )
}
