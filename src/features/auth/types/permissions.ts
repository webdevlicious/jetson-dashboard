import { z } from 'zod'

export const resourceTypeSchema = z.enum([
  'ATHLETE_PROFILE',
  'ACADEMIC_RECORDS',
  'ATHLETIC_STATS',
  'RECRUITMENT_STATUS',
  'COLLEGE_PROGRAMS',
  'MESSAGES',
  'USER_RELATIONSHIPS',
  'SYSTEM_SETTINGS',
])
export type ResourceType = z.infer<typeof resourceTypeSchema>

export const permissionLevelSchema = z.enum([
  'NONE',
  'READ',
  'WRITE',
  'FULL',
])
export type PermissionLevel = z.infer<typeof permissionLevelSchema>

export const permissionSetSchema = z.object({
  id: z.string(),
  userId: z.string(),
  resource: resourceTypeSchema,
  access: permissionLevelSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type PermissionSet = z.infer<typeof permissionSetSchema>

export const userPermissionsSchema = z.record(resourceTypeSchema, permissionLevelSchema)
export type UserPermissions = z.infer<typeof userPermissionsSchema>

export const hasPermission = (
  permissions: UserPermissions,
  resource: ResourceType,
  requiredLevel: PermissionLevel
): boolean => {
  const userLevel = permissions[resource] || 'NONE'
  const levels: Record<PermissionLevel, number> = {
    'NONE': 0,
    'READ': 1,
    'WRITE': 2,
    'FULL': 3
  }
  return levels[userLevel] >= levels[requiredLevel]
}