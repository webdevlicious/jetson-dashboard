-- Insert default permissions for PARENT role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ATHLETE_PROFILE' THEN 'FULL'::'PermissionLevel'
    WHEN 'ACADEMIC_RECORDS' THEN 'FULL'::'PermissionLevel'
    WHEN 'ATHLETIC_STATS' THEN 'FULL'::'PermissionLevel'
    WHEN 'RECRUITMENT_STATUS' THEN 'FULL'::'PermissionLevel'
    WHEN 'MESSAGES' THEN 'FULL'::'PermissionLevel'
    WHEN 'USER_RELATIONSHIPS' THEN 'FULL'::'PermissionLevel'
    ELSE 'NONE'::'PermissionLevel'
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'PARENT';