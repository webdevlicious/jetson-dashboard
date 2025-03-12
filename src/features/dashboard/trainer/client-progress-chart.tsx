import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Sample data for client progress over time
const progressData = [
  { client: 'Client A', strength: 75, endurance: 65, flexibility: 80 },
  { client: 'Client B', strength: 85, endurance: 70, flexibility: 65 },
  { client: 'Client C', strength: 65, endurance: 85, flexibility: 70 },
  { client: 'Client D', strength: 70, endurance: 75, flexibility: 85 },
  { client: 'Client E', strength: 80, endurance: 80, flexibility: 75 },
  { client: 'Client F', strength: 90, endurance: 65, flexibility: 60 },
]

export function ClientProgressChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Client Progress Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={progressData}>
            <XAxis 
              dataKey="client" 
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
            <Bar 
              dataKey="strength" 
              fill="var(--primary)" 
              radius={[4, 4, 0, 0]}
              name="Strength"
            />
            <Bar 
              dataKey="endurance" 
              fill="var(--secondary)" 
              radius={[4, 4, 0, 0]}
              name="Endurance"
            />
            <Bar 
              dataKey="flexibility" 
              fill="var(--accent)" 
              radius={[4, 4, 0, 0]}
              name="Flexibility"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}