import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Sample data for team performance over time
const performanceData = [
  { month: 'Jan', performance: 65, attendance: 78 },
  { month: 'Feb', performance: 72, attendance: 82 },
  { month: 'Mar', performance: 68, attendance: 75 },
  { month: 'Apr', performance: 75, attendance: 80 },
  { month: 'May', performance: 82, attendance: 85 },
  { month: 'Jun', performance: 85, attendance: 88 },
  { month: 'Jul', performance: 80, attendance: 84 },
  { month: 'Aug', performance: 78, attendance: 82 },
  { month: 'Sep', performance: 84, attendance: 87 },
  { month: 'Oct', performance: 88, attendance: 90 },
  { month: 'Nov', performance: 86, attendance: 88 },
  { month: 'Dec', performance: 90, attendance: 92 },
]

export function PerformanceChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Team Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={performanceData}>
            <XAxis 
              dataKey="month" 
              stroke="#888888" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--background)', 
                borderColor: 'var(--border)',
                borderRadius: '6px',
                boxShadow: 'var(--shadow)'
              }}
              labelStyle={{ color: 'var(--foreground)' }}
            />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="attendance"
              stroke="var(--secondary)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}