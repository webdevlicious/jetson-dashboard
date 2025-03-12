import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'
import { useTheme } from '@/context/theme-context'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

interface ChartData {
  name: string
  total: number
}

interface ChartProps {
  data: ChartData[]
}

export function BarChart({ data }: ChartProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: 'Revenue',
        data: data.map((d) => d.total),
        backgroundColor: isDark ? 'rgba(124, 58, 237, 0.8)' : 'rgba(124, 58, 237, 0.5)',
        borderColor: 'rgba(124, 58, 237, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              }).format(context.parsed.y)
            }
            return label
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#a1a1aa' : '#71717a',
        },
      },
      y: {
        grid: {
          color: isDark ? '#27272a' : '#e4e4e7',
        },
        ticks: {
          color: isDark ? '#a1a1aa' : '#71717a',
          callback: function (value: any) {
            return new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            }).format(value)
          },
        },
      },
    },
  }

  return <Bar data={chartData} options={options} />
}

export function LineChart({ data }: ChartProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: 'Users',
        data: data.map((d) => d.total),
        borderColor: 'rgba(124, 58, 237, 1)',
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(124, 58, 237, 1)',
        pointBorderColor: isDark ? '#121212' : '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#a1a1aa' : '#71717a',
        },
      },
      y: {
        grid: {
          color: isDark ? '#27272a' : '#e4e4e7',
        },
        ticks: {
          color: isDark ? '#a1a1aa' : '#71717a',
        },
        beginAtZero: true,
      },
    },
  }

  return <Line data={chartData} options={options} />
}