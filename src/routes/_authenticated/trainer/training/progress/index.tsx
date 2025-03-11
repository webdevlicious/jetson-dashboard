import { createFileRoute } from '@tanstack/react-router'
import Progress from '@/features/dashboard/trainer/progress'

export const Component = Progress

export const Route = createFileRoute('/_authenticated/trainer/training/progress/')({ component: Component })